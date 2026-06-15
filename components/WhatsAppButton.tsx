"use client";
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = "6285772580768";
  const message = "Hello ZHORA APPAREL, I would like to inquire about your products and custom jersey services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      {/* Tooltip Label (Desktop Only) */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold py-2 px-4 rounded shadow-xl whitespace-nowrap hidden md:block border-l-4 border-primary">
        Chat with us!
      </div>
      
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
      </a>
    </motion.div>
  );
}