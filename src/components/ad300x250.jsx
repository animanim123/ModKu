import { useEffect, useRef } from "react";

export default function Ad300x250() {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // set global atOptions
    window.atOptions = {
      key: "bb610f567f55a377ba61b341751d23c6",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/bb610f567f55a377ba61b341751d23c6/invoke.js";
    script.async = true;

    adRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={adRef}
      style={{
        width: "300px",
        height: "250px",
        margin: "20px auto",
      }}
    />
  );
}
