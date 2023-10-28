const Testimonials = () => {
    return (
        <article className="main__client-testimonials">
            <h2>CLIENT TESTIMONIALS</h2>
            <div>
                <section className="main__testimonial">
                    <img 
                        src={require('./images/image-emily.jpg')} 
                        alt='Emily'/>
                    <p className='main__testimonial-text'>
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <p className='main__testimonial-person'>
                        Emilty R. &nbsp; 
                        <span className='main__person-job'>Marketing Director</span>
                    </p>
                </section>

                <section className="main__testimonial">
                    <img 
                        src={require('./images/image-thomas.jpg')} 
                        alt='Thomas'/>
                    <p className='main__testimonial-text'>
                    Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.         
                    </p>
                    <p className='main__testimonial-person'>
                        Thomas S.
                        <span className='main__person-job'>Chief Operating Officer</span>
                    </p>
                </section>

                <section className="main__testimonial">
                    <img 
                        src={require('./images/image-jennie.jpg')} 
                        alt='Jennie'/>
                    <p className='main__testimonial-text'>
                        Incredible end result! Our sales increase over 400% when we worked with Sunnyside. Highly recommended!         
                    </p>
                    <p className='main__testimonial-person'>
                        Jennie F.
                        <span className='main__person-job'>Buisness Owner</span>
                    </p>
                </section>
            </div>
        </article>
    )
}

export default Testimonials
