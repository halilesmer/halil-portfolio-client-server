
import React, { useState } from 'react'

// Import Worker and the main Viewer component
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';


// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

import pdf from '../assets/pdf/2022-05-30 CV_Halil_en.pdf'

export const Resume = () => {
  // pdf file  state
  //const pdfFile = 'https://www.docdroid.net/q3H6zSm/2022-02-24-cv-halil-pdf';
  const [pdfFile] = useState(pdf);

  //const [pdfLink, setPdfLink] = useState([]);

  // useEffect(() => {
  //   const fecthPosts = async () => {
  //     try {
  //       const res = await fetch(`/api/resume`);
  //       const { data } = await res.json();
  //       console.log('data: ', data);
  //       //setPdfLink(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fecthPosts();
  // }, []);
 

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

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
            padding: "4px"
          }}
        >
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
           plugins={[zoomPluginInstance]} 
              theme={{
                theme: 'auto',
              }}
            >
            </Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile && <>No file is selected yet</>}

      </div>

    </div>
  );
};
