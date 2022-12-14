import Image from 'next/image';
import data from "../data/heroSection.json";


const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="contact@carebridge.com" />
                                <button type="submit" >Contact Us</button>
                            </div>
                        </form>
                    </div>


                    <div className="right-side">
                        <Image src="/joyful-female-doctor-2.svg" layout="fill" />
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Hero;