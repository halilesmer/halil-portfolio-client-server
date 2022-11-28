// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

import React, { useEffect, useState } from "react";
// Import Worker and the main Viewer component
import { Viewer, Worker } from "@react-pdf-viewer/core";

import { nodeEnv } from "../utils/config.js";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

export const Resume = () => {
  const [data, setData] = useState([]);
  const [pdfFile, setPdfFile] = useState([]);
  const env = nodeEnv.serverURL;

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const getData = async () => {
    try {
      const response = await fetch(`${env}/resumes/halil`);
      const result = await response.json();
      console.log("getData: ", result);
      setPdfFile(result);
    } catch (error) {
      console.log("error getting abouts data: ", error);
    }
  };

  useEffect(() => {
    getData();
    setData(data);

    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {/* View PDF */}
      <div className="viewer">
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            padding: "4px",
          }}
        >
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        {/* render this if we have a pdf file */}
        {pdfFile.length > 0 && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            {pdfFile.map((pdf) => {
              return (
                <Viewer
                  key={pdf.url}
                  fileUrl={pdf.url}
                  plugins={[zoomPluginInstance]}
                  theme={{
                    theme: "auto",
                  }}
                ></Viewer>
              );
            })}
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {pdfFile.length < 1 && <>No file is selected yet</>}
      </div>
    </div>
  );
};
