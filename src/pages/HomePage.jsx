import CustomCursor from '../components/Cursor';
import NavBar from '../components/NavBar';
import KeyEventListener from '../components/KeyEventListener';
import './HomePage.css';
import PdfViewer from '../components/PdfViewer';

function HomePage() {



    return (
        <>
            <KeyEventListener />
            <CustomCursor />
            <NavBar/>
            <div className="container-home-page"></div>
            <PdfViewer />
        </>
    )

}

export default HomePage