import Image from 'next/image';
import data from '../data/trustUsSection.json';

const TrustUs = () => {
    return (
        <section className="trustus">
            <div className="header-trustus" style={{marginBottom: '5em'}}>
                <h2>Our Team</h2>
            </div>

            <div className="container-trustus">
                <div className="content-trustus">

                    <Image src={data.aman} alt="Trust Us" width={320} height={400} />
                    <Image src={data.eshita} alt="Trust Us" width={320} height={400} />
                    <Image src={data.kunal1} alt="Trust Us" width={320} height={400} />
                    <Image src={data.jyot} alt="Trust Us" width={320} height={400} />
                    <Image src={data.kunal2} alt="Trust Us" width={320} height={400} />

                </div>
            </div>

        </section>
    )
};

export default TrustUs;