import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import image1 from "../assets/icons/hacc.jpg";
import image2 from "../assets/icons/festt.jpg";
import image3 from "../assets/icons/sdg.png";



const Experience = () => {
    return (
        <div className='p-10 ' id='experience'>
            <div className="text-center ">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white"><br></br>
                    My Experience
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
                    ----- What I’ve Done ------
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-2">
                <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                    <img src={image1} className='rounded-3xl w-[250px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                </div>
                <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Team Lead – Hackathon Participant (Team Stacks and Queues)</h1>
                    <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>HaccVerse'25, REVA University | 2025</h2>

                    <h2 className='my-2 lg:hidden text-lg'>HaccVerse'25, REVA University | 2025</h2>

                    {/* for large device  */}
                    <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Led a 4-member team in building HackWarZ (CyberBattle) — a gamified cybersecurity hackathon platform where attackers and defenders compete using real-world security challenges including web exploitation, cryptography, forensics, and system hardening.                            </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Designed and developed the interactive platform using Node.js, MongoDB, and JavaScript, implementing real-time leaderboards, user authentication, and secure sandboxed environments for offensive/defensive tasks.   </span>
                        </li>


                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Coordinated brainstorming, rapid prototyping, and live presentations under deadline pressure, showcasing strong leadership, technical architecture, and problem-solving abilities.                            </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Supported by REVA Nest Incubation Cell, IEEE REVA, GTS Techlabs, Digitus, and IEEE Computer Society Bangalore Chapter during the event.

                            </span>
                        </li>
                    </ul>



                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-2">
                <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                    <img src={image3} className='border-2 border-white rounded-3xl w-[250px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                </div>
                <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Team Lead – Hackathon Finalist (Team DevDops)</h1>
                    <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>SDGForge, Intercollegiate Fest CUEST 2.0, Atria Institute of Technology | 2025</h2>

                    <h2 className='my-2 lg:hidden text-lg'>SDGForge, Intercollegiate Fest CUEST 2.0, Atria Institute of Technology | 2025</h2>

                    {/* for large device  */}
                    <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Led a 3-member team to develop SafeDose, an AI-powered health misinformation guardian designed to protect public health by flagging fake health claims in real-time using NLP and medical databases.

                            </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Engineered a system that delivers personalized, persuasive nudges and suggests verified alternatives, learning user behavior to enhance influence effectively.</span>
                        </li>


                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Coordinated rapid ideation, development, and pitching under tight deadlines, demonstrating leadership, technical innovation, and problem-solving skills.                           </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Grateful to mentors, peers, and organizers at Atria Institute for their support in fostering innovation for impactful social change.

                            </span>
                        </li>
                    </ul>



                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-2">
                {/* image section */}
                <div className="w-full md:w-1/4 lg:w-1/3 flex justify-center lg:justify-end items-center p-10 md:p-5 lg:p-10">
                    <img
                        src={image2}
                        alt="Hackathon Project"
                        className="rounded-3xl w-[250px] hover:scale-105 transition-transform duration-300 shadow-lg"
                    />
                </div>

                {/* content */}
                <div className="w-full md:w-3/4 lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                        Web3 Developer – Hackathon Participant (Team Member)
                    </h1>
                    <h2 className="text-lg text-gray-300 my-3">
                        Stack Fusion Fest Hackathon, REVA University | Apr 2024
                    </h2>

                    <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Built DevDock – a Decentralized Document Verification System for detecting fake academic certificates using Blockchain and IPFS.

                            </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Developed smart contracts and integrated Web3 technologies to provide secure, tamper-proof storage and trustless verification of academic credentials.   </span>
                        </li>


                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Collaborated in an intense 24-hour sprint, contributing across ideation, development, and final pitch to judges.                           </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Enhanced hands-on skills in smart-contract development, distributed storage, and rapid-prototyping during the hackathon.

                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                        Collaborated on 5 major projects, primarily converting Figma designs into web pages using Next.js and Tailwind CSS.
                    </span>
                </li>
                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                        Delivered high-quality, responsive web pages for multiple projects, adhering to deadlines.
                    </span>
                </li>


                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                        Integrated APIs for fetching and updating data on specific pages.
                    </span>
                </li>
                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                        Received positive feedback for creating pixel-perfect and clean code that aligned with the design team’s expectations.
                    </span>
                </li>
            </ul> */}
        </div>
    );
};

export default Experience;
