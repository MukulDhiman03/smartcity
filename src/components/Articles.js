import React from 'react'
import "../css/Articles.css"
import { FaLink } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
const Articles = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='article_heading'>Services that we provides.</h1>
            </div>
            <div className='row articles'>
                <div className='col-md-6 '>
                    <h2><span><FaLink /></span> Increased transparency and connectivity.</h2>
                    <p>Cities can interconnect using blockchain vertical services, such as mobility, energy or security, through a single open, accessible, transversal system that is able to exchange data with their inhabitants in real time.</p>
                </div>
                <div className='col-md-6 '>
                    <h2><span><HiSpeakerphone /></span>  Direct communication.</h2>
                    <p>Blockchain makes it possible for government departments and the public to interact digitally, without the need for intermediaries. This would speed up, for example, bureaucratic procedures at registries, town halls, etc..</p>
                </div>
            </div>
            <div className='row articles'>
                <div className='col-md-6 '>
                    <h2><span><FaEyeSlash /></span> Integrity over information.</h2>
                    <p>With this technology it is possible to encrypt a file totally or partially in order to share only the part that is of interest, privately, securely and without the risk of its being manipulated by a third party.</p>
                </div>
                <div className='col-md-6 '>
                    <h2><span><MdManageAccounts /></span>  Efficient management.</h2>
                    <p>Blockchain allows both the public and city officials to know the origin and destination of each resource. In addition, the latter can find out how city services are being used without compromising people's privacy.</p>
                </div>
            </div>
            <div className='row articles'>
                <div className='col-md-6 '>
                    <h2><span><FaShieldAlt /></span> To digitalize ongoing mechanisms.</h2>
                    <p>With this technology it is possible to upgrade the ongoing mechanisms by digitalizing the traditional system , which will make it easily accessible.</p>
                </div>
                <div className='col-md-6 '>
                    <h2><span><FaRegCheckSquare /></span>Verify genuineness of ownership.</h2>
                    <p>Blockchain Provides an easy way to verify the  genuineness of ownership.</p>
                </div>
            </div>
        </div>
    );
}

export default Articles
