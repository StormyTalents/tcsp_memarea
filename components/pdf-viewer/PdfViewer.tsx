import { useRef, useEffect } from "react";
import { Resource } from "../../types";

type PdfViewerProps = {
  pdf: Resource;
};

export const PdfViewer = ({ pdf }: PdfViewerProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");
      //   const pdfResponse = await window.fetch(
      //     "http://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      //   );
      //   const documentBuffer = await pdfResponse.arrayBuffer();

      instance = await PSPDFKit.load({
        container,
        document: "/sample.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};
