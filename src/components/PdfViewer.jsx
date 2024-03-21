import './Pdfviewer.css';
import pdf from '../PDF_ARTICLES/Article scientifique.pdf';

function PdfViewer() {


    return (
        <>
            <iframe src={`${pdf}#toolbar=0`}  className='iframe'></iframe>
        </>
    )

}

export default PdfViewer