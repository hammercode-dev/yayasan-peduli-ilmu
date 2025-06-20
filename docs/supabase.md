# Supabase Usage Notes for This Project

### What is Supabase?

Supabase is an open-source Firebase alternative that provides:

- **PostgreSQL database** with RESTful and real-time APIs
- **Storage** for file uploads (images, documents, etc.)
- **Authentication** (optional)

In this project, Supabase is used for:

- Fetching and storing donation programs
- Uploading donation proof images
- Managing relational data using PostgreSQL tables

---

### Why We Use Supabase?

- Provides serverless and scalable backend quickly
- Easy integration with TypeScript + Next.js
- Built-in support for file storage
- Realtime features & Row Level Security (RLS)
- Free tier available for small-scale projects

---

### When To Use Supabase in This Project?

- **Storage**: Uploading donation proof (e.g., receipt images)
- **Database**:

  - List and manage donation programs
  - Store references to donation evidences (image + donor info)

---

### How We Use Supabase

#### 1. **Client Initialization**

File: `/lib/supabase.ts`

```ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

> Set your environment variables in `.env.local`:

```
    NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key-here
```

#### 2. **Storage Bucket: `donation-evidence`**

Used for uploading images from donors. Example:

```ts
await supabase.storage
  .from('donation-evidence')
  .upload(`evidence/${filename}`, file);
```

To retrieve a public image URL:

```ts
const { data } = supabase.storage
  .from('donation-evidence')
  .getPublicUrl('evidence/my-photo.jpg');
```

#### 3. **Database Tables**

#### Table: `programs`

| Column             | Type        | Description                                 |
| ------------------ | ----------- | ------------------------------------------- |
| `id`               | `uuid (PK)` | Unique identifier (use `gen_random_uuid()`) |
| `slug`             | `text`      | URL-friendly identifier                     |
| `title`            | `text`      | Program title                               |
| `description`      | `text`      | Full description of the program             |
| `image_url`        | `text`      | Optional: image shown for the program card  |
| `target_amount`    | `numeric`   | Optional: donation goal in currency         |
| `collected_amount` | `numeric`   | Optional: current donations collected       |
| `status`           | `text`      | e.g., `active`, `closed`, `archived`        |
| `starts_at`        | `timestamp` | Optional: when the program starts           |
| `ends_at`          | `timestamp` | Optional: when the program ends             |
| `created_at`       | `timestamp` | Default: `now()`                            |
| `updated_at`       | `timestamp` | Auto-updated on changes                     |

#### Table: `donation_evidences`

| Column        | Type        | Description                              |
| ------------- | ----------- | ---------------------------------------- |
| `id`          | `uuid (PK)` | Unique ID                                |
| `program_id`  | `uuid`      | Foreign key to a `programs` table        |
| `file_path`   | `text`      | Supabase Storage file path               |
| `uploaded_at` | `timestamp` | When the evidence was uploaded           |
| `notes`       | `text`      | Optional description or notes (nullable) |
| `status`      | `text`      | Optional: `pending`, `approved`, etc     |
| `full_name`   | `text`      | Full name of the donor                   |

> Note: Make sure to allow `read` access via RLS or public policies if fetching without auth.

---

### Examples

#### Fetch data (Client Side)

```ts
useEffect(() => {
  const fetchPrograms = async () => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setPrograms(data);
  };
  fetchPrograms();
}, []);
```

#### Upload, Fetch url image and Insert data with image url (Client Side)

```ts
try {
  setStatus('loading');
  let evidenceUrl = '';

  // Upload evidence file
  if (file) {
    const filePath = `evidence/${Date.now()}_${file.name}`;

    // Upload file to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('donation-evidence')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get public URL of uploaded file
    const { data: publicUrlData } = supabase.storage
      .from('donation-evidence')
      .getPublicUrl(filePath);

    evidenceUrl = publicUrlData?.publicUrl || '';
  }

  // Insert donation record into Supabase
  const { error: insertError } = await supabase
    .from('donation_evidences')
    .insert({
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      amount: parseInt(formData.amount),
      payment_method: formData.paymentMethod,
      message: formData.message,
      evidence_url: evidenceUrl,
      status: 'Pending',
      program_id: programId,
    })
    .select();

  if (insertError) throw insertError;

  // Reset form
  setStatus('success');
  setIsOpen((prev) => !prev);
  setFormData({
    fullName: '',
    email: '',
    phoneNumber: '',
    amount: '',
    paymentMethod: '',
    message: '',
  });
  setFile(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
  setError(err.message || 'Terjadi kesalahan saat mengirim data.');
  setStatus('error');
}
```

#### Fetch data (Server Side)

```ts
const { data, error } = await supabase
  .from('programs')
  .select('*')
  .order('created_at', { ascending: false });
```

---

#### Common Issues & Fixes

| Problem                             | Cause                      | Fix                                          |
| ----------------------------------- | -------------------------- | -------------------------------------------- |
| `200 OK` with empty response (`[]`) | RLS enabled without policy | Create read policy OR disable RLS            |
| Supabase URL or Key undefined       | Missing `.env.local`       | Add `NEXT_PUBLIC_SUPABASE_*` to `.env.local` |
| Cannot upload file                  | Incorrect bucket/path      | Verify bucket name & file path               |
| File not visible                    | Not publicly accessible    | Use `.getPublicUrl()` or set public policy   |

---
