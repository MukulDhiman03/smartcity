import React from 'react';
import '../css/Feature.css';
import { FaLink } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";

const Features = () => {
    return (

        <div className='FeatureContainer'>
            <section id="two">
                <div className="alpha">
                    <div className='two-img'>
                        <img src="netwrk.png" alt="" srcSet="" />
                    </div>
                    <div>
                        <h1>Daily live classes</h1>
                        <p>
                            Daily live classes Chat with educators, ask questions, answer live
                            polls, and get your doubts cleared - all while the class is going on
                        </p>
                    </div>
                </div>


                <div className="beta">
                    <div className='two-img'>
                        <img src="revise.png" alt="" srcSet="" />
                    </div>
                    <div>
                        <h1>Practise and revise</h1>
                        <p>
                            Learning isn't just limited to classes with our practice section, mock
                            tests and lecture notes shared as PDFs for your revision
                        </p>
                    </div>
                </div>


                <div className="gamma">
                    <div className='two-img'>
                        <img src="block.png" alt="" srcSet="" />
                    </div>
                    <div>
                        <h1>Study anytime and anywhere</h1>
                        <p>
                            One subscription gets you access to all our live and recorded classes to
                            watch from the comfort of any of your devices
                        </p>
                    </div>
                </div>


            </section>





            <section id="three">

                <div className='row'>
                    <h1 className='text-center'>Services that we provides.</h1>
                </div>


                <div className='row articles p-4'>
                    <div className='col-md-6 '>
                        <h2><span><FaLink /></span> Increased transparency.</h2>
                        <p>Cities can interconnect using blockchain vertical services, such as mobility, energy or security, through a single open, accessible, transversal system that is able to exchange data with their inhabitants in real time.</p>
                    </div>
                    <div className='col-md-6 '>
                        <h2><span><HiSpeakerphone /></span>  Direct communication.</h2>
                        <p>Blockchain makes it possible for government departments and the public to interact digitally, without the need for intermediaries. This would speed up, for example, bureaucratic procedures at registries, town halls, etc..</p>
                    </div>
                </div>
                <div className='row articles p-4'>
                    <div className='col-md-6 '>
                        <h2><span><FaEyeSlash /></span> Integrity over information.</h2>
                        <p>With this technology it is possible to encrypt a file totally or partially in order to share only the part that is of interest, privately, securely and without the risk of its being manipulated by a third party.</p>
                    </div>
                    <div className='col-md-6 '>
                        <h2><span><MdManageAccounts /></span>  Efficient management.</h2>
                        <p>Blockchain allows both the public and city officials to know the origin and destination of each resource. In addition, the latter can find out how city services are being used without compromising people's privacy.</p>
                    </div>
                </div>
                <div className='row articles p-4'>
                    <div className='col-md-6 '>
                        <h2><span><FaShieldAlt /></span> To digitalize ongoing mechanisms.</h2>
                        <p>With this technology it is possible to upgrade the ongoing mechanisms by digitalizing the traditional system , which will make it easily accessible.</p>
                    </div>
                    <div className='col-md-6 '>
                        <h2><span><FaRegCheckSquare /></span>Verify genuineness of ownership.</h2>
                        <p>Blockchain Provides an easy way to verify the  genuineness of ownership.</p>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Features