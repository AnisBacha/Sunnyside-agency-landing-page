import NavMenu from './NavMenu';
const DesktopNavBar = () => {
    return (
        <section className="header__topbar">
                <img src={require('./images/logo.svg').default} alt='logo' className="header__logo"/>
                <NavMenu />
        </section>
    )
}

export default DesktopNavBar
