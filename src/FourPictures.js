const FourPictures = () => {
    return (
        <section className="main__four-pictures">
            <picture>
                    <source srcSet={require('./images/desktop/image-gallery-milkbottles.jpg')} media="(min-width: 1024px)" />
                    <source srcSet={require('./images/mobile/image-gallery-milkbottles.jpg')} media="(min-width: 375px)" />
                    <img 
                        src={require('./images/mobile/image-gallery-milkbottles.jpg')} 
                        alt='milk-bottles'
                        width={376}
                        height={376}
                    />
            </picture>
            <picture>
                <source srcSet={require('./images/desktop/image-gallery-orange.jpg')} media="(min-width: 1024px)" />
                <source srcSet={require('./images/mobile/image-gallery-orange.jpg')} media="(min-width: 375px)" />
                <img 
                    src={require('./images/mobile/image-gallery-orange.jpg')} 
                    alt='orange'
                    width={376}
                    height={376}
                />
            </picture>
            <picture>
                <source srcSet={require('./images/desktop/image-gallery-cone.jpg')} media="(min-width: 1024px)" />
                <source srcSet={require('./images/mobile/image-gallery-cone.jpg')} media="(min-width: 375px)" />
                <img 
                    src={require('./images/mobile/image-gallery-cone.jpg')} 
                    alt='cone'
                    width={376}
                    height={376}
                />
            </picture>
            <picture>
                <source srcSet={require('./images/desktop/image-gallery-sugarcubes.jpg')} media="(min-width: 1024px)" />
                <source srcSet={require('./images/mobile/image-gallery-sugar-cubes.jpg')} media="(min-width: 375px)" />
                <img 
                    src={require('./images/mobile/image-gallery-sugar-cubes.jpg')} 
                    alt='sugar-cubes'
                    width={376}
                    height={376}
                />
            </picture>
        </section>
    )
}

export default FourPictures
