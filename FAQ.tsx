import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faq = [
    {
      question: "How long does distribution take?",
      answer: "Usually between 2 and 7 days depending on platforms.",
    },

    {
      question: "Do I keep my rights?",
      answer: "Yes. You always keep 100% ownership of your music.",
    },

    {
      question: "How do I get paid?",
      answer: "Royalties are collected and paid through our system.",
    },

    {
      question: "Can I release worldwide?",
      answer: "Yes. We distribute globally to major platforms.",
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <h1>FAQ</h1>

        <p>Frequently Asked Questions</p>
      </section>

      <section className="faq-section">
        {faq.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <h3>{item.question}</h3>

            {open === index && <p>{item.answer}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}
