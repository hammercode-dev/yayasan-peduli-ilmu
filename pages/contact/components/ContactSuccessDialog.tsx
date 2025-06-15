import { Fragment } from 'react';

import { CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';

type ContactSuccessDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactSuccessDialog({
  isOpen,
  onClose,
}: ContactSuccessDialogProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </TransitionChild>

        {/* Dialog Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className="w-full max-w-xl rounded-2xl bg-white px-6 py-8 shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center">
                <CheckCircle2
                  className="text-green-500 w-16 h-16 animate-bounce mb-4"
                  aria-hidden="true"
                />
                <DialogTitle as="h3" className="text-xl font-bold text-brand-navy">
                  Pesan Terkirim 🎉
                </DialogTitle>
                <p className="text-gray-600 mt-2">
                  Terima kasih! Kami akan menghubungi Anda secepatnya.
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  className="inline-flex items-center px-5 py-2 rounded-md bg-secondary-600 hover:bg-secondary-700 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                  onClick={onClose}
                >
                  Tutup
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
