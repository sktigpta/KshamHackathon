import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io"
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer style={{ color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ margin: "1em" }}>
                    <div style={{
                        display: "flex", gap: "1em", flexDirection: "column", textAlign: "start"
                    }}>
                        <h2>Contact</h2>
                        <div style={{ display: "flex", gap: "1em" }}><IoMdCall /> <p>+91 9373124725</p></div>
                        <div style={{ display: "flex", gap: "1em" }}><MdEmail /> <p><a style={{ textDecoration: "none", color: "white" }} href="mailto:kshaminnovation@gmail.com">Send email</a></p></div>
                    </div>
                    <div>
                        <div> <p style={{ color: "#dadada", marginTop: "2em" }}>Copyright © Ksham Innovation 2023. All Rights Reserved.</p></div>

                    </div>

                    <div>
                        <div style={{ display: "flex", gap: "1em" ,marginTop: "2em" }}> 
                        
                        <div style={{fontSize:"2em", display:"flex", gap:"0.5em" , cursor:"pointer"}}>
                        
                        <a style={{ textDecoration: "none", color: "white" }}   href="https://www.linkedin.com/company/ksham-innovation/?originalSubdomain=in"> <FaLinkedin/></a>
                        <a  style={{ textDecoration: "none", color: "white" }}  href="https://www.instagram.com/ksham_innovation/"> <FaInstagram/></a>
                        </div>
                         </div>

                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;