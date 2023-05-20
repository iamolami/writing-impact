import React, { useState } from "react";
import AccordionItem from './AccordionItem'

const DisplayFAQs = () => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  const faqs = [
    {
      main: "What do I get if I choose writing services for my corporate websites?",
      text: "We provide you with well-researched and carefully-crafted website content and a well-written piece that is SEO-friendly and meets your expectations.",
    },
    {
      main: "What do I get if I choose writing services for my corporate websites?",
      text: "We provide you with well-researched and carefully-crafted website content and a well-written piece that is SEO-friendly and meets your expectations.",
    },
    {
      main: "What do I get if I choose writing services for my corporate websites?",
      text: "We provide you with well-researched and carefully-crafted website content and a well-written piece that is SEO-friendly and meets your expectations.",
    },
  ];
  return (
    <div className="FAQs section">
      <div className="container">
        <div className="thmtitle">
          <h3 style={{ marginBottom: '20px' }}>Go on, ask us anything. Let’s get into the nitty gritty</h3>
          <p>Anything missing? Ask us everything at your discovery call.</p>
        </div>
        <div className="FAQs__row">
          <div className="FAQs__col-lg-4">
            <div className="FAQs__accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                faq={faq}
        />
      ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFAQs;
