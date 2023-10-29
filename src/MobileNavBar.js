import { useState } from "react";
import NavMenu from './NavMenu';
const MobileNavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <section className="header__topbar">
                    <img src={require('./images/logo.svg').default} alt='logo' className="header__logo"/>
                    <img 
                        src={require('./images/icon-hamburger.svg').default} 
                        alt='menu-icon'
                        onClick={() => setOpenMenu(prev => !prev)}
                    />
            </section>
            {openMenu && (
                <section className="header__navbar"> 
                    <NavMenu />
                </section>
            )}
        </>
    )
}

export default MobileNavBar
