
import React, {  useState } from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import pdf from '../assets/pdf/CV_Halil_2022-02.pdf'

export const Resume = () => {
  // pdf file onChange state
  const [pdfFile] = useState(pdf);

  return (

    <div className="container">

      {/* View PDF */}

      <div className="viewer">

        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} theme={{
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
