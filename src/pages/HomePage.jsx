import CustomCursor from '../components/Cursor';
import NavBar from '../components/NavBar';
import KeyEventListener from '../components/KeyEventListener';
import './HomePage.css';

function HomePage() {



    return (
        <>
            <KeyEventListener />
            <CustomCursor />
            <NavBar/>
            <div className="container-home-page"></div>
        </>
    )

}

export default HomePage