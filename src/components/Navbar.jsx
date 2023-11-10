/** @format */

import React, { useState } from "react";
import logoReact from "../assets/logoReact.svg";
import menuPlus from "../assets/menuPlus.svg";
import menuMinus from "../assets/menuMinus.svg";
import menuContrast from "../assets/menuContrast.svg";
import menuClose from "../assets/menuClose.svg";
import menuOpen from "../assets/menuOpen.svg";


const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const handleClick = () => setToggle(!toggle);

	return (
		<div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-md">
			<div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
				<div className="flex items-center">
					<img
						src={logoReact}
						alt="logo"
						className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[30px]"
					/>
				</div>

				<div className="flex items-center">
					<ul className="hidden md:flex">
						<li className="ml-3">
							<a href="">Home</a>
						</li>
						<li className="ml-3">
							<a href="">Informacje</a>
						</li>
						<li className="ml-3">
							<a href="">Blog</a>
						</li>
						<li className="ml-3">
							<a href="">Kontakt</a>
						</li>
					</ul>
				</div>

				<div className="md:flex sm:mr-10 md:mr-10">
					<button className="text-black mr-3 rounded-full h-[45px] w-[45px] hover:shadow-md">
						<img
							src={menuPlus}
							alt="Powiększ czcionkę"
							className="p-2"
						/>
					</button>
					<button className="text-black mr-3 rounded-full h-[45px] w-[45px] hover:shadow-md">
						<img
							src={menuMinus}
							alt="Pomniejsz czcionkę"
							className="p-2"
						/>
					</button>
					<button className="text-black mr-3 rounded-full h-[45px] w-[45px] hover:shadow-md">
						<img
							src={menuContrast}
							alt="Zmień kontrast"
							aria-label="Zmień kontrast"
							className="p-2"
						/>
					</button>
					<button
						className="md:hidden h-[45px] w-[45px]"
						onClick={handleClick}
					>
						<img
							src={!toggle ? menuOpen : menuClose}
							alt="Menu"
							className="p-2 object-contain"
							aria-label="Menu"
						/>
					</button>
				</div>

				<div
					className={
						toggle
							? "md:hidden flex absolute right-2 top-20 h-[100vh] w-[100vw] bg-white"
							: "hidden"
					}
				>
					<ul className="mt-5 flex flex-col content-center w-[100%] text-center">
						<li className="my-3 mx-3">
							<a href="" className="text-3xl">
								Home
							</a>
						</li>
						<li className="my-3 mx-3">
							<a href="" className="text-3xl">
								Informacje
							</a>
						</li>
						<li className="my-3 mx-3">
							<a href="" className="text-3xl">
								Blog
							</a>
						</li>
						<li className="my-3 mx-3">
							<a href="" className="text-3xl">
								Kontakt
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
