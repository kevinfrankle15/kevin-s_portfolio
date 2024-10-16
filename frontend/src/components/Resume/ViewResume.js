import React from "react";
import resumePdf from "./resume.pdf";
// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
const MyResume = () => {
  // const doc = [
  //   {
  //     uri: require("../Resume/resume.pdf"),
  //     fileType: "pdf",
  //     fileName: "resume.pdf",
  //   },
  //   {
  //     uri: require("./resume.docx"),
  //     fileType: "docx",
  //     fileName: "resume.docx",
  //   },
  // ];
  return (
    <div>
      {/* <DocViewer documents={resumePdf} /> */}
      {/* <DocViewer
        documents={doc}
        pluginRenderers={DocViewerRenderers}
        style={{ width: "100vw", height: "100vh" }}
      /> */}
      {/* <iframe title="This is a unique title" /> */}
      <iframe src={resumePdf} style={{ width: "100vw", height: "100vh" }} />
      {/* <a href={resumePdf} target="_blank" rel="noreferrer">
        Download PDF
      </a> */}
    </div>
  );
};
export default MyResume;
