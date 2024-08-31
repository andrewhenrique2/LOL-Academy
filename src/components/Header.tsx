import Image from "next/image";
import logo from '../../public/logo.png'

const Header = () => {
    return ( 
        <div className="container w-full bg-header-custom flex justify-center items-center">
            <Image src={logo} alt="logo" width={100} height={100} />
            <h1 className="text-3xl text-white">LOL Academy</h1>
        </div>
     );
}
 
export default Header;