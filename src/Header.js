import { useState, useEffect } from 'react';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';


const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header">
            {windowWidth < 1024 ? (
                <MobileNavBar />
            ):(
                <DesktopNavBar />
            )}

            <h1 className='header__h1'>WE ARE CREATIVES</h1>
            <figure className='header__arrow-down'>
                <img 
                    src={require('./images/icon-arrow-down.svg').default} 
                    alt='arrow-down'
                />
            </figure>
            
        </header>
    )
}

export default Header
