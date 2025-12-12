import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+1234567890"; // Replace with actual number
  const message = "Hello! I'm interested in MODE IPTV subscription.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-semibold hidden sm:inline">Chat with us</span>
    </button>
  );
};

export default WhatsAppButton;
