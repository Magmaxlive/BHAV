import { FaFacebookF,FaPhoneAlt,FaEnvelope   } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const SocialLinks = [
    {
        link : 'https://www.facebook.com/people/Seven-Entertainment/61582332182525/',
        icon : <FaFacebookF size={25}/>
    },

    {
        link : 'https://www.instagram.com/seven__entertainment/',
        icon : <LuInstagram size={25}/>
    },

    {
        link : 'https://www.linkedin.com/company/sevenentertainments',
        icon : <FaLinkedin size={25}/>
    },

    {
        link : 'https://www.tiktok.com/@seven_entertainment_',
        icon : <FaTiktok size={25}/>
    },
    
    
]


export const contactus = [
    {
        content : '+64 22 384 4165',
        icon : <FaPhoneAlt size={25}/>,
        link: 'tel:+64223844165'
    },

    
    {
        content : '+64 22 163 7881',
        icon : <IoLogoWhatsapp size={25}/>,
        link: 'https://wa.me/+64221637881'
    },


    {
        content : 'events@7entertainment.co.nz',
        icon : <FaEnvelope size={25}/>,
        link :'mailto:events@7entertainment.co.nz'
    },

    {
        content :  <>
                153 Stoddard Road, Wesley,<br/> Auckland 1041
            </>,
        icon : <FaLocationDot size={25}/>,
        link:'https://www.google.com/maps/dir//360VR+STUDIO+LTD,+1A%2F153+Stoddard+Road,+Wesley,+Auckland+1041,+New+Zealand/@11.3344512,75.759616,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6d0d41490462baf5:0x1dd1c99afd2a8e30!2m2!1d174.7265678!2d-36.9030576?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D'
    },
    
    
]