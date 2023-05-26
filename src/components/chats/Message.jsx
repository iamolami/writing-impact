import React from "react";

const DisplayMessageBox = ({ setContactOpen }) => {
  return (
    <div className="chats__popUp">
      <div className="chats__popUp-wrapper">
        <div className="chats__popUp-container" tabIndex={-1}>
          <div className="chats__popUp-close" onClick={() => setContactOpen(false)}>
            <span class="material-symbols-outlined">close</span>
          </div>
          <div className="chats__popUp-messageBox">
            <div className="chats__popUp-messageBox-header">
                <a href="/">WritingImpact</a>
            </div>
            <div className="chats__popUp-messageBox-form">
              <div className="chats__popUp-messageBox-label">
                <label htmlFor="name">Name</label>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="chats__popUp-messageBox-input"
              />
              <div className="chats__popUp-messageBox-label">
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="chats__popUp-messageBox-input"
              />
              <div className="chats__popUp-messageBox-label">
                <label htmlFor="text">Message</label>
              </div>
              <textarea
                name="text"
                id="text"
                cols="10"
                rows="10"
                className="chats__popUp-messageBox-area"
              ></textarea>
            </div>
            <div className="chats__popUp-messageBox-logged">
              <button>Send Message</button>
              <div className="chats__popUp-messageBox-phone">
                Need to Speak with Us
                <a href="tel:+2349152460899" className="chats__popUp-messageBox-number">
                    +234 915 246 0899
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMessageBox;
