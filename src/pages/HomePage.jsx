import CustomCursor from '../components/Cursor';
import NavBar from '../components/NavBar';
import KeyEventListener from '../components/KeyEventListener';
import './HomePage.css';
import PdfViewer from '../components/PdfViewer';

import pdf from '../PDF_ARTICLES/Article scientifique.pdf';
import pdf2 from '../PDF_ARTICLES/article grabiel.pdf';

function HomePage() {


    return (
        <>
            <KeyEventListener />
            <CustomCursor />
            <NavBar/>
            <div className="container-home-page"></div>
            <PdfViewer pdf={pdf2} />
        </>
    )

}

export default HomePage