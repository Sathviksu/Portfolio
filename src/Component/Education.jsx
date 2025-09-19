import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<section id="Education">
			<div className="bg-base-100 mt-[150px]">
				{/* Heading */}
				<div className="pb-5 flex justify-center items-center w-full bg-[#61CE61]">
					<div className="flex gap-5 justify-center items-center">
						<FaGraduationCap className="text-black text-5xl md:text-[100px]" />
						<h1 className="text-3xl md:text-5xl underline decoration-black decoration-2 underline-offset-8 text-black">
							Education
						</h1>
					</div>
				</div>

				{/* Card container */}
				<div className="text-white w-full px-6 md:px-16 py-4 md:bg-[#111111] overflow-hidden md:text-left text-xl flex flex-col gap-5">
					{/* College */}
					<div className="college flex flex-col gap-3">
						<div className="college-name flex flex-col md:flex-row md:justify-between md:items-center gap-5">
							<h1 className="text-2xl md:text-3xl underline decoration-[#61CE61] decoration-2 underline-offset-8">
								B.Tech in Computer Science and Engineering
							</h1>
							<h1 className="text-xl md:text-2xl text-[#61CE61]">2023 - present</h1>
						</div>
						<p className="text-xl md:text-2xl text-gray-400">Reva University, Bengaluru</p>
						<p className="text-lg">CGPA : 9.1</p>
						<div>
							<p className="text-xl text-gray-400">Field of study :</p>
							<ul className="pl-3">
								<li className="text-lg">- Data Structures and Algorithms</li>
								<li className="text-lg">- Web Development</li>
								<li className="text-lg">- Artificial Intelligence</li>
							</ul>
						</div>
					</div>

					{/* School */}
					<div className="school flex flex-col gap-3">
						<div className="college-name flex flex-col md:flex-row md:justify-between md:items-center gap-5">
							<h1 className="text-2xl md:text-3xl underline decoration-[#61CE61] decoration-2 underline-offset-8">
								Senior Secondary{" "}
								<span className="text-xl md:text-2xl">(Stream : Science)</span>
							</h1>
							<h1 className="text-xl md:text-2xl text-[#61CE61]">2021 - 2023</h1>
						</div>
						<p className="text-xl md:text-2xl text-gray-400">
							Jawahar Navodaya Vidyalaya, Kodagu
						</p>
						<p className="text-lg">Score : 94.6%</p>
						<div>
							<p className="text-xl text-gray-400">Focus areas :</p>
							<ul className="pl-3">
								<li className="text-lg">- Mathematics</li>
								<li className="text-lg">- Physics</li>
								<li className="text-lg">- Chemistry</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
