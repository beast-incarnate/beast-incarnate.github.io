import Image from 'next/image';
import Link from 'next/link';
import data from '../data/headerSection.json';

const Header = () => {

    const scroll = () => {
        const section = document.getElementsByClassName('header-footer')[0];
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
      

    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src={data.logo} width={165} height={100} />
                    </a>
                </Link>
            </div>
            <div className="btn-try">
                <button onClick={scroll}>
                    Support Us
                </button>
            </div>
        </header>
    )
};

export default Header;