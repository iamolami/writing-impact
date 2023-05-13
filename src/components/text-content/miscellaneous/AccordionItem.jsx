import React from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { main, text } = faq;
  return (
    <div className="FAQs__accordion-item">
      <div
        className="FAQS__accordion-heading"
        role="heading"
        aria-level={3}
        onClick={onToggle}
      >
        <div
          className="FAQs__accordion-btn"
          aria-selected={active ? "true" : "false"}
          aria-expanded={active ? "true" : "false"}
        >
          {main}
        </div>
      </div>
      <div className={`FAQs__accordion-panel ${active ? "openPanel" : ""}`}>
        <p>{text}</p>
        <a href="/" className="thm-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AccordionItem;
