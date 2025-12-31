import { useEffect } from "react";

export default function Ad300x250() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/bb610f567f55a377ba61b341751d23c6/invoke.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{ width: "300px", height: "250px" }}
      dangerouslySetInnerHTML={{
        __html: `
          <script>
            atOptions = {
              'key' : 'bb610f567f55a377ba61b341751d23c6',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          </script>
        `,
      }}
    />
  );
}
