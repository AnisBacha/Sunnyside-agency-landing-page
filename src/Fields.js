const Fields = () => {
    return (
        <article className="main__fields">
            <section className="main__graphic-design">
                <picture>
                    <source srcSet={require('./images/desktop/image-graphic-design.jpg')} media="(min-width: 1024px)" />
                    <source srcSet={require('./images/mobile/image-graphic-design.jpg')} media="(min-width: 375px)" />
                    <img src={require('./images/mobile/image-graphic-design.jpg')} alt='graphic-design'/>
                </picture>
                <section className='graphic-design'>
                    <h2>Graphic Design</h2>
                    <p>
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potentials clients' attention.
                    </p>
                </section>
            </section>
            <section className="main__photography">
                <picture>
                    <source srcSet={require('./images/desktop/image-photography.jpg')} media="(min-width: 1024px)" />
                    <source srcSet={require('./images/mobile/image-photography.jpg')} media="(min-width: 375px)" />
                    <img src={require('./images/mobile/image-photography.jpg')} alt='photography'/>
                </picture>
                <section className='photography'>
                    <h2>Photography</h2>
                    <p>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </section>
            </section>
        </article>
    )
}

export default Fields
