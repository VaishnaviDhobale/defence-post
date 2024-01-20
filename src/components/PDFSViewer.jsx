// PDFSViewer.jsx
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFSViewer = ({ pdf }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Document
                file={pdf} // Replace with the actual path to your PDF file
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
};

export default PDFSViewer;
