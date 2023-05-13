import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./style";

const CustomIframe = ({ children, title, search, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <div id="sodo-search">
      <div className="groot-frame" style={search ? styles.grootFrameOpen : styles.grootFrame}>
        <iframe
          title={title}
          {...props}
          ref={setContentRef}
          style={{
            margin: "auto",
            position: "relative",
            padding: "0px",
            outline: "0px",
            width: "100%",
            opacity: "1",
            overflow: "hidden",
            height: "100%",
          }}
        >
          {mountNode && createPortal(children, mountNode)}
        </iframe>
      </div>
    </div>
  );
};

export default CustomIframe;
