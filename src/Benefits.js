const Benefits = () => {
    return (
        <>
            <section className="main__egg">
                <picture>
                    <source srcSet={require('./images/desktop/image-transform.jpg')} media="(min-width: 1024px)" />
                    <source srcSet={require('./images/mobile/image-transform.jpg')} media="(min-width: 375px)" />
                    <img src={require('./images/mobile/image-transform.jpg')} alt='egg' />
                </picture>                
                <section className='main__transform'>
                    <h2 className='main__h2'>Transform your brand</h2>
                    <p className='main__p'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <button className='main__btn transform-btn'>LEARN MORE</button>
                </section>
            </section>
            <section className="main__cup">
                <picture>
                    <source srcSet={require('./images/desktop/image-stand-out.jpg')} media="(min-width: 1024px)" />
                    <source srcSet={require('./images/mobile/image-stand-out.jpg')} media="(min-width: 375px)" />
                    <img src={require('./images/mobile/image-stand-out.jpg')} alt='cup'/>
                </picture>
                
                <section className='main__stand-out'>
                    <h2 className='main__h2'>Stand out to the right audience</h2>
                    <p className='main__p'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                    <button className='main__btn stand-out-btn'>LEARN MORE</button>
                </section>
            </section>
        </>
    )
}

export default Benefits
