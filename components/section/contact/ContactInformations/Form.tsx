'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

type ContactFormProps = {
  openDialog: () => void;
};

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormData: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

type FormField = keyof ContactFormData;

export default function Form({ openDialog }: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as FormField]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Submitted:', formData);
    openDialog();

    // Reset form
    setFormData(initialFormData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-brand-navy text-2xl font-bold">Kirim Pesan</h2>
        <p className="text-gray-600 mt-2">
          Silakan isi formulir di bawah ini untuk menghubungi kami
        </p>
      </div>

      <div className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Masukkan nomor telepon"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subjek
              </label>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subjek pesan"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pesan
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda di sini..."
              rows={6}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-accent-800 hover:bg-accent-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <Send className="h-4 w-4 mr-2" />
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
