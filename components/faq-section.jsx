import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How do I know if I need therapy?",
      answer:
        "If you're experiencing persistent feelings of sadness, anxiety, or stress that interfere with your daily life, therapy might be beneficial. Other signs include difficulty managing emotions, relationship problems, significant life changes, trauma, or if you're simply seeking personal growth. Remember, seeking help is a sign of strength, not weakness.",
    },
    {
      question: "How long does each therapy session last?",
      answer:
        "Standard therapy sessions at Bofill Psychological Services typically last 50 minutes. However, initial consultations may be longer (around 60-90 minutes) to allow time for a comprehensive assessment of your needs. We also offer extended sessions for certain therapeutic approaches when necessary.",
    },
    {
      question:
        "What is the difference between a psychologist and a psychiatrist?",
      answer:
        "Psychologists have doctoral degrees (PhD, PsyD) in psychology and specialize in therapy and psychological testing. They focus on behavioral interventions and talk therapy. Psychiatrists are medical doctors (MD) who can prescribe medication and specialize in the medical management of mental health conditions. At Bofill, we offer referrals to trusted psychiatrists when medication might be beneficial alongside therapy.",
    },
    {
      question: "Is therapy confidential?",
      answer:
        "Yes, confidentiality is a fundamental aspect of therapy. Information shared during sessions is protected by law and ethical standards. There are limited exceptions where confidentiality may be broken: if there's risk of harm to yourself or others, suspected abuse of children or vulnerable adults, or if required by court order. We'll always discuss these limitations during your first session.",
    },
    {
      question: "How many therapy sessions will I need?",
      answer:
        "The number of sessions varies greatly depending on your specific situation, goals, and the type of therapy. Some clients benefit from short-term therapy (8-12 sessions), while others may find longer-term therapy more beneficial. We'll regularly review your progress and adjust the treatment plan accordingly. Our goal is to provide the support you need for as long as it's helpful.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept many major insurance plans. We recommend contacting your insurance provider to verify your mental health benefits before your first appointment. Our administrative team can also help you understand your coverage and any out-of-pocket expenses you might incur. For clients without insurance coverage, we offer sliding scale fees based on financial need.",
    },
    {
      question: "What types of therapy do you offer?",
      answer:
        "We offer a wide range of evidence-based therapeutic approaches, including Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, Mindfulness-Based Cognitive Therapy, Acceptance and Commitment Therapy (ACT), Eye Movement Desensitization and Reprocessing (EMDR), and more. Our therapists are trained in multiple modalities and will work with you to determine the most effective approach for your specific needs.",
    },
    {
      question: "Can I switch therapists if I don't feel it's a good fit?",
      answer:
        "Absolutely. The therapeutic relationship is crucial for effective therapy, and we understand that not every therapist-client pairing is ideal. If you feel your current therapist isn't the right fit, please let us know, and we'll help you transition to another professional in our practice. We prioritize your comfort and progress in the therapeutic process.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
            COMMON QUESTIONS
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Find answers to common questions about our services, therapy
            process, and what to expect.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-muted"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
