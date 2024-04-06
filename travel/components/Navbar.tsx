import Link from 'next/link';
import Image from 'next/image';
import Button from './Button'
import { NAV_LINKS } from '@/constants';
interface Props {
    // Define the props for your component here
}

const Navbar = () => {
    // Implement your component logic here

    return (
        // JSX code for your component's UI goes here
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
  
        <ul className=" h-full gap-12 lg:flex hidden" >
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 pl-3 transition-all hover:font-bold">
              { link.label}
            </Link>
          ))}
        </ul>
        
  
        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
  
        <Image 
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    );
};

export default Navbar;