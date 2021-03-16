import React, { useEffect, useRef, useState } from "react";

const ModelS = () => {
  const [, setCurrentPage] = useState(1);
  const modelSRef = useRef(null);

  useEffect(() => {
    setCurrentPage(document.querySelectorAll("[section]"));
  }, []);
  return (
    <div
      section-content="Starting at $69,420"
      section="Model S"
      ref={modelSRef}
      className="modelS-wrapper"
    ></div>
  );
};

export default ModelS;
