import React, { useEffect, useState } from "react";

import BLINKB from "../assets/websiteThumbnail/blink.png"
import passpot from "../assets/websiteThumbnail/passpot.png"
import hack from "../assets/websiteThumbnail/hack.png"
import spotify from "../assets/websiteThumbnail/spotify.png"
import Flavourshare from "../assets/websiteThumbnail/flavourshare.png"
// import assetHexa from "../assets/websiteThumbnail/asset-hexa.webp"


import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {



	const Data = [
		{
			title: "BlinkB",
			description: "BlinkB is a sleek, responsive link-in-bio platform that lets you showcase all your important links in a single personalized page. Perfect for creators, professionals, and businesses, BlinkB helps you connect your audience to everything you do — from social media and portfolios to products and promotions — using just one URL.",
			thumbnailImage: BLINKB,
			category: "FullStack",
			clintLink: "https://github.com/Sathviksu/BlinkB.git",
			LiveLInk: "https://blinkb-app.netlify.app/"

		},

		{
			title: "HackwarZ",
			description: "HackWarZ is a next-gen cybersecurity simulation game that puts players in the heart of high-stakes digital warfare. Dive into intense Red vs. Blue team battles, simulate real-world cyber attacks, and master advanced defense tactics — all in a gamified, educational environment designed to train the cyber warriors of tomorrow.",
			thumbnailImage: hack,
			category: "FullStack",
			clintLink: "https://github.com/NFRIDOY/asset-hexa",
			LiveLInk: "https://asset-hexa.web.app/"

		},

		{
			title: "Spotify(Clone)",
			description: "Spotify is a full-featured music that replicates the core functionality and feel of the popular music streaming platform. Built with modern web technologies, it delivers a seamless experience for browsing, playing, and managing music — right from your browser.",
			thumbnailImage: spotify,
			category: "FrontEnd",
			clintLink: "https://github.com/Sathviksu/Spotify.git",
			serverLink: null,
			LiveLInk: "https://spot-ify.netlify.app/"

		},
		{
			title: "PassPot",
			description: "Passpot is a modern, user-friendly password manager that helps you securely store, organize, and manage all your login credentials in one place. With strong encryption, seamless access, and a clean interface, Passpot ensures your digital life is always protected and easily accessible.",
			thumbnailImage: passpot,
			category: "FrontEnd",
			clintLink: "https://github.com/Sathviksu/passpot.git",
			LiveLInk: "https://passpot.netlify.app/"

		},
		{
			title: "FlavourShare",
			description: "FlavourShare is a vibrant online community platform designed for food enthusiasts and home cooks. It allows users to share, discover, and celebrate diverse culinary experiences, recipes, and cooking tips from around the world. With a user-friendly interface and engaging features, FlavourShare fosters connections among food lovers, making it easy to explore new flavors and share personal culinary journeys.",
			thumbnailImage: Flavourshare,
			category: "FullStack",
			clintLink: "https://github.com/Sathviksu/FlavourShare.git",
			LiveLink: "https://tangerine-malabi-a1d608.netlify.app/"

		},
	]



	const [activeButton, setActiveButton] = useState("Full Stack");


	const filteredData = Data.filter(item => {
		// if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "Full Stack") return item.category === "FullStack";
		return false;
	});




	return (
		<div id="Projects" className="bg-transparent py-10 ">
			<div className="sticky -top-5 z-[999] pb-2 pt-4 bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-7 mt-[15px]">
					Latest projects
				</h1>


				<div className="flex flex-wrap bg-black justify-center gap-8">
					{/* <button onClick={() => setActiveButton("all Product")} className={` ${(activeButton == "all Product") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> All Projects</button> */}
					<button onClick={() => setActiveButton("Full Stack")} className={` ${(activeButton == "Full Stack") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Full Stack Projects</button>
					<button onClick={() => setActiveButton("FrontEnd")} className={` ${(activeButton == "FrontEnd") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Frontend Projects</button>


				</div>
			</div>



			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">

				{
					filteredData?.map((item, inx) => (
						<div className={`${inx % 2 == 0 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row justify-center h-full lg:gap-5`} key={inx}>
							<div className="lg:w-[700px]" data-aos="fade-up" data-aos-delay={inx * 200}>
								<img className="bg-cover w-full h-[200px] lg:h-[380px]" src={item?.thumbnailImage} alt={item?.title} />
							</div>

							<div className="lg:w-[450px] h-full" data-aos="fade-left" data-aos-delay={inx * 200 + 100}>
								<div className="min-h=[300px] lg:min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-3xl lg:text-4xl">{item?.title}</h1>
									<p className="text-sm lg:text-lg mt-5">{item?.description}</p>
								</div>
								<div className="flex justify-between">
									<Link to={item?.clintLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaGithub /> Code base
									</Link>



									<Link to={item?.LiveLInk} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaExternalLinkAlt /> Visit website
									</Link>
								</div>
							</div>
						</div>
					))
				}

			</div>





		</div>
	);
};

export default Projects;