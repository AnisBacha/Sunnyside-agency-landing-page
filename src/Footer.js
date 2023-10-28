const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__h2">sunnyside</h2>
            <ul className="footer__list">
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <section className="footer__socials">
                <img src={require('./images/icon-facebook.svg').default} alt='facebook'/>
                <img src={require('./images/icon-instagram.svg').default} alt='instagram'/>
                <img src={require('./images/icon-twitter.svg').default} alt='twitter'/>
                <img src={require('./images/icon-pinterest.svg').default} alt='pinterest'/>
            </section>
        </footer>
    )
}

export default Footer
