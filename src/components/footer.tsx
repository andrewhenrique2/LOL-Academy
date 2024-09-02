import Image from "next/image";
import logo from "../../public/logo.png";
const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-[#1a1b1f] text-white mt-12">
            <div className="mb-4 md:mb-0 items-center flex flex-col">
                <Image src={logo} alt="Logo" width={70} height={70} />
                <p>&copy; 2024 Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
                <a href="#" className="hover:text-gray-400">LinkedIn</a>
            </div>
        </div>
    );
}

export default Footer;
