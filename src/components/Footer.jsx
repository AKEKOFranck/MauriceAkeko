import '../styles/Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



export default function Footer() {
    const socialItems = [
    <a href='https://www.instagram.com/melio_uzumaki89/'><FaInstagram className='foot_icons' /></a>,
    <a href='https://www.linkedin.com/in/maurice-franck-akeko-461881315'><FaLinkedinIn className='foot_icons'  /></a>,
    <a href='https://github.com/AKEKOFranck'><FaGithub className='foot_icons'  /></a>
];
    return(
        <footer>
            <div className='foot_content'>
                <h4>
                    fa0055970@gmail.com
                </h4>
            </div>

            <div className='foot_content'>
               {socialItems.map((item, index) => (
                    <h3 key={index}>
                        {item}
                    </h3>
                ))}
</div>
            
        </footer>
    );
}