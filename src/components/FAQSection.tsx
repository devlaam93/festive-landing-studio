import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from './ScrollReveal';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started with MODEIPTV?",
      answer: "Simply choose your preferred plan, complete the secure checkout, and you'll receive instant activation. Our team will send you setup instructions within minutes."
    },
    {
      question: "What devices are compatible with MODEIPTV?",
      answer: "MODEIPTV works on virtually any device including Smart TVs (Samsung, LG, Sony), Android boxes, Firestick, Apple TV, iOS and Android phones/tablets, Mac and Windows computers."
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! We offer a 24-hour free trial so you can test our service quality before committing. Contact us via WhatsApp to request your trial."
    },
    {
      question: "What's included in the subscription?",
      answer: "All plans include 15,000+ live channels, 60,000+ movies and series (VOD), Netflix and streaming platform content, sports channels, catch-up TV, EPG, and 24/7 support."
    },
    {
      question: "What's the difference between Standard and Premium servers?",
      answer: "Premium servers offer more channels (30,000+), more VOD content (120,000+), integrated VPN protection, and priority bandwidth allocation for the smoothest possible streaming experience."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 7-day money-back guarantee on all plans. If you're not satisfied for any reason, we'll refund your purchase - no questions asked."
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-3xl opacity-20 animate-float">🎄</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}>🎁</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Frequently Asked <span className="text-christmas-green">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              🎅 Got questions? We've got answers. If you can't find what you're looking for, 
              reach out to our 24/7 support team.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                duration={500}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass border border-border/50 rounded-xl px-6 data-[state=open]:border-christmas-gold/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-christmas-gold transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
