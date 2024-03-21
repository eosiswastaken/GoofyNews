import './Pdfviewer.css';

function PdfViewer(props) {
    const { pdf } = props; // Extraire directement la propriété 'pdf' de 'props'

    return (
        <>
            <iframe src={`${pdf}#toolbar=0`} className='iframe'></iframe>
        </>
    );
}

export default PdfViewer;