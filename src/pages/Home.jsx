
import { FaEarListen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { SiSamsung } from "react-icons/si";

import Footer from "../components/footer"


export const Home = () => {
    return (
        <>
            <div class="container">

                <section className="dark">
                    <div className="j-center">
                        <h1>World's 1st
                            <span> Smart</span>  Aid <br />
                            Glasses for</h1>
                        <div className="discription">
                            <p style={{ marginTop: "1.5em", color: "#dadada" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident asperiores fugit officia repudiandae veniam!</p>
                        </div>
                        <div style={{ marginTop: "1em", fontSize: "1.2em", color: "black" }} className="categories">
                            <p>Deaf</p>
                            <p>Mute</p>
                            <p>Blind</p>
                        </div>
                    </div>
                    <button >Get Early Access</button>
                </section>


                <section className="lightdark j-center">
                    <div className="title">
                        <h1 style={{ fontSize: "2em", color: "#121212" }}> Why Able Innovation Exists</h1>
                    </div>
                    <div style={{ flexDirection: "row" }} className="content j-center">
                        <div className="video-card j-center">
                            <video width="500" loop='true' autoPlay='true' src="https://kshaminnovation.in/static/media/anim.0ae96bd64f4245a807ea.mp4"></video>
                        </div>
                        <div style={{ height: "70vh" }} className="cont-card">
                            <div className="title">
                                <h1 style={{ fontSize: "2em", marginBottom: "0.5em", color: "#dadada" }}> Our Innovation</h1>
                            </div>
                            <ul style={{ marginInlineStart: "1.5em", fontSize: "1.5em" }}>
                                <li style={{ marginBottom: "0.8em" }}>
                                    Globally, there are over 680 million people who are deaf, hard of hearing, mute, or blind.
                                </li>
                                <li style={{ marginBottom: "0.8em" }}>
                                    India alone is home to more than 80 million individuals belonging to these diverse disability groups.
                                </li>
                                <li style={{ marginBottom: "0.8em" }}>
                                    Sadly, an estimated 90% of these individuals lack access to education and often face poverty.
                                </li>
                                <li style={{ marginBottom: "0.8em" }}>
                                    or these individuals, accessing essential information, education, and communication channels remains a significant challenge.
                                </li>
                            </ul>
                            <button >About Us</button>
                        </div>
                    </div>

                </section>



                <section className="lightdark j-center">
                    <div className="title">
                        <h1 style={{ fontSize: "2em", color: "#121212" }}> Why Able Innovation Exists</h1>
                    </div>
                    <div style={{ flexDirection: "row" }} className="content j-center">
                        <div className="video-card j-center">


                            <div className="cards">

                                <div className="card">
                                    <div className="logo">
                                        <FaEarListen />
                                    </div>
                                    <div className="details">
                                        <h2>
                                            Glasses for Deaf & Hard of hearing
                                        </h2>
                                        <ul>
                                            <li>Patented Dome Bone Conduction Transducer</li>
                                            <li>
                                                Arrays of Microphones
                                            </li>
                                            <li>Bluetooth & Rechargeable</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="logo">
                                        <FaEye />
                                    </div>
                                    <div className="details">
                                        <h2>
                                            Glasses for Deaf & Hard of hearing
                                        </h2>
                                        <ul>
                                            <li>Patented Dome Bone Conduction Transducer</li>
                                            <li>
                                                Arrays of Microphones
                                            </li>
                                            <li>Bluetooth & Rechargeable</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="logo">
                                        <FaVolumeMute />
                                    </div>
                                    <div className="details">
                                        <h2>
                                            Glasses for Deaf & Hard of hearing
                                        </h2>
                                        <ul>
                                            <li>Patented Dome Bone Conduction Transducer</li>
                                            <li>
                                                Arrays of Microphones
                                            </li>
                                            <li>Bluetooth & Rechargeable</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="logo">
                                        <IoIosFlash />
                                    </div>
                                    <div className="details">
                                        <h2>
                                            Glasses for Deaf & Hard of hearing
                                        </h2>
                                        <ul>
                                            <li>Patented Dome Bone Conduction Transducer</li>
                                            <li>
                                                Arrays of Microphones
                                            </li>
                                            <li>Bluetooth & Rechargeable</li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ fontSize: "1.2em" }} className="cont-card">
                                    <h1 style={{ fontSize: "1.5em", marginBottom: ".5em" }}> Our Innovation</h1>
                                    <p style={{ marginBottom: "0.5em" }}>
                                        Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.
                                    </p>
                                    <p style={{ marginBottom: "1em" }}>
                                        The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize. <br />
                                    </p>
                                    <p >
                                        The open ear design makes able glasses a complete smart glasses device for everyone
                                    </p>

                                </div>

                                <div>
                                    <h1 style={{ fontSize: "1.5em", marginTop: "1em", marginBottom: ".5em", color: "black" }}> How Able Glasses Work</h1>
                                    <video style={{ marginBottom: "1em" }} width="700" src="https://kshaminnovation.in/static/media/vdo.66e3521b4938cfc54110.mp4"></video>

                                </div>
                            </div>




                        </div>

                    </div>

                </section >


                <section style={{ display: "flex", justifyContent: "space-between" }}>


                    <div>
                        <div className="j-center">
                            <h1 style={{ marginTop: "2em", fontSize: "2em", color: "#121212" }}> Our Supporters</h1>

                        </div>

                        <div style={{
                            marginTop: "0.5em", display: "flex", flexWrap: "wrap", fontSize: "8em", gap: "em", alignItems: "center", justifyContent: "center"
                        }}>
                            <FcGoogle />
                            <SiSamsung />

                        </div>

                    </div>
                    <Footer/>
                </section>


            </div>
        </>
    )
}