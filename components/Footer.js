import data from '../data/footerSection.json';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className="header-footer" id="funds-us">
                <h3>{data.title}</h3>
                <div id ="btc" style={{marginBottom: '1em', marginLeft: '6em', marginTop: '1em', marginRight: '5em'}}>
                    <Image src={data.bitcoin}  width={300} height={300} />
                </div>
                <h5>{data.description}</h5>
            </div>

            <form>
                <div className="form-group">
                    <input type="number" placeholder="BTC" />
                    <button type="submit" >Fund Us</button>
                </div>
            </form>
        </footer>
    )
};

export default Footer;
