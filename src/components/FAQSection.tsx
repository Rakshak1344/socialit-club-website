import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does bidding work?",
      answer: "Creators can choose to offer limited spots through bidding. You place a bid for the amount you're willing to pay, and the highest bidders get access. All bids are sealed until the bidding closes, ensuring fairness."
    },
    {
      question: "Is the platform safe?",
      answer: "Absolutely. All creators are verified, payments are secured through our platform, and we have robust safety guidelines. You can also view creator ratings and reviews before joining any experience."
    },
    {
      question: "How do creators get paid?",
      answer: "Creators receive payments directly after their experience is completed. We handle all payment processing and only take a small platform fee. Creators can cash out weekly."
    },
    {
      question: "What kind of experiences can I find?",
      answer: "Everything from cooking classes and fitness sessions to art workshops, music lessons, gaming sessions, and unique adventures. Creators are constantly adding new types of experiences."
    },
    {
      question: "Can I request specific experiences?",
      answer: "Yes! You can request experiences from your favorite creators. If there's enough interest, creators often respond by creating the requested experience."
    },
    {
      question: "What's the difference between bidding and RSVP?",
      answer: "Bidding is for exclusive, limited experiences where demand is high. RSVP is for experiences with open availability - just sign up and you're in! Creators choose which model works best for each experience."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Socialit.club
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};