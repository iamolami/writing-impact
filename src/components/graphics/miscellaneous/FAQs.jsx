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
      main: "Why should I choose Writing Impact graphic design service?",
      text: "Graphic design is not only about beautifying a webpage. It optimizes your chance to get your content across a larger mass efficiently with visual cues. Writing Impact offers the best graphic design services and can create impactful designs for your business.",
    },
    {
      main: "Can I see some samples before committing to Writing Impact?",
      text: "Yes, we are just an email away. When you choose Writing Impact as your graphic design partner, you will get all the assistance necessary for a smooth transaction.",
    },
    {
      main: "Does Writing Impact have the required workforce to take up large projects?",
      text: "Writing Impact has a large team of competent designers - inhouse and freelancers, to execute large projects within a reasonable deadline.",
    },
    {
      main: "What are the best graphic design service companies?",
      text: "There might be a bunch of graphic design providers online, but with Writing Impact, you get a start-to-end content solution for your business. When your content is created in sync with your graphic, there will be no gaps in communication.",
    }
  ];
  return (
    <div className="FAQs section">
      <div className="container">
        <div className="thmtitle">
          <h3>Go on, ask us anything. Let’s get into the nitty gritty</h3>
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
