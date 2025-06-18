'use client';

import React, { useState } from 'react';
import { Heart, Upload, CheckCircle, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import SuccessDialog from '@/components/ui/SuccessDialog';

type Status = 'idle' | 'loading' | 'error' | 'success';

function DonationForm({ programId }: { programId: number }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    amount: '',
    paymentMethod: '',
    message: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const donationAmounts = [100000, 300000, 500000, 1000000, 2500000];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFile(file);
  };

  const handleAmountClick = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount: amount.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

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
  };

  const handleCloseDialog = () => {
    setIsOpen((prev) => !prev);
    setStatus('idle');
  };

  return (
    <div className="bg-card rounded-lg shadow-lg border border-border">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-accent-800 flex items-center">
          <Heart className="h-6 w-6 text-secondary-600 mr-3" />
          Form Donasi
        </h2>
      </div>

      <div className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Informasi Donatur */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-800 border-b border-border pb-2">
              Informasi Donatur
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                required
                placeholder="Nama Lengkap"
                className="w-full px-3 py-2 border border-input rounded-md"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2 border border-input rounded-md"
              />
            </div>

            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel"
              required
              placeholder="Nomor Telepon"
              className="w-full px-3 py-2 border border-input rounded-md"
            />
          </div>

          {/* Detail Donasi */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-800 border-b border-border pb-2">
              Detail Donasi
            </h3>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Pilih Jumlah Cepat
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountClick(amount)}
                    className="p-3 text-sm font-medium rounded-lg border border-border bg-background text-accent-800 hover:bg-primary-50 hover:border-primary-500 transition-colors duration-200"
                  >
                    {amount.toLocaleString('id-ID')}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                type="number"
                required
                min={10000}
                placeholder="Jumlah Donasi"
                className="w-full px-3 py-2 border border-input rounded-md"
              />

              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md"
              >
                <option value="">Pilih Metode Pembayaran</option>
                <option value="bank_transfer">Transfer Bank</option>
                <option value="dana" disabled>
                  Dana (Coming Soon)
                </option>
                <option value="ovo" disabled>
                  OVO (Coming Soon)
                </option>
                <option value="gopay" disabled>
                  GoPay (Coming Soon)
                </option>
                <option value="shopeepay" disabled>
                  ShopeePay (Coming Soon)
                </option>
              </select>
            </div>
          </div>

          {/* Bukti Transfer */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-800 border-b border-border pb-2">
              Bukti Transfer *
            </h3>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
                id="evidence-upload"
                required
              />
              <label htmlFor="evidence-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2 font-medium">
                  Klik untuk upload bukti transfer
                </p>
                <p className="text-sm text-muted-foreground">
                  JPG, PNG atau PDF (maks 5MB)
                </p>
              </label>
            </div>

            {file && (
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-accent-800">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pesan  */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-input rounded-md resize-none"
            placeholder="Tulis pesan (opsional)"
          />

          {status === 'success' && (
            <SuccessDialog
              isOpen={isOpen}
              onClose={handleCloseDialog}
              title="Bukti Donasi Berhasil Diupload"
              description="Terima kasih telah berpartisipasi. Bukti donasi Anda telah berhasil dikirim dan akan segera kami verifikasi."
              closeButtonLabel="Close"
            />
          )}

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  fullName: '',
                  email: '',
                  phoneNumber: '',
                  amount: '',
                  paymentMethod: '',
                  message: '',
                });
                setFile(null);
              }}
              className="flex-1 px-6 py-3 border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-1 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center font-medium"
            >
              <Heart className="h-4 w-4 mr-2" />
              {status === 'loading' ? 'Mengirim...' : 'Kirim Bukti Donasi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
