import { useEffect, useState } from 'react';
import NavBarRubrique from './NavBarRubrique';
import './NavBar.css'

function NavBar() {

    const [titleIsHovered, settitleIsHovered] = useState(true);

    useEffect(() => {
        if (!titleIsHovered) return
        setTimeout(() => {
            settitleIsHovered(false)
        }, 1900)
    }, [titleIsHovered])

    

    const rubriques = [["Home", "/Home"], ["World", "/world"], ["Politics", "/politics"]]


    return (
        <>
        
            <div className="container-nav-bar">
                <div className="nav-bar">
                    <div onMouseEnter={() => settitleIsHovered(true)}
                    className={`nav-bar-logo ${titleIsHovered ? 'is-animated' : ''}`}>
                        <h1><span>G</span>
                            <span>o</span>
                            <span>o</span>
                            <span>f</span>
                            <span>y</span>
                            <span> </span>
                            <span>N</span>
                            <span>e</span>
                            <span>w</span>
                            <span>s</span></h1>
                    </div>

                    <div className="nav-bar-links">
                    {rubriques.map((rubrique, index) => {
                        return <NavBarRubrique key={index} rubrique_titre={rubrique[0]} rubrique_lien={rubrique[1]} />
                    })}
                    </div>
                </div>
            </div>
        </>
    )

}

export default NavBar