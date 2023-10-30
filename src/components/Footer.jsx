/** @format */

import React from "react";

function Footer() {
	return (
		<div className="w-full bg-[#02044A] text-gray-300 py-8">
			<div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
				<div>
					<h6 className="font-bold uppercase py-2">Kontakt</h6>
					<ol>
						<li className="py-1">Fundacja</li>
						<li className="py-1">ul. Adres 1</li>
						<li className="py-1">Miasto 00-000</li>
						<li className="py-1">+48 000 000 000</li>
					</ol>
				</div>
				<div>
					<h6 className="font-bold uppercase py-2">Szybkie linki</h6>
					<ol>
						<li className="py-1">Home</li>
						<li className="py-1">Blog</li>
						<li className="py-1">Kontakt</li>
						<li className="py-1">Informacje</li>
					</ol>
				</div>

				<div className="col-span-2 pt-2 md:pt-2">
					<p className="font-bold uppercase">Bądź na bieżąco!</p>
					<p className="py-4">
						Podaj swój adres e-mail by otrzymywać informacje o
						naszych działaniach i nowych artykułach blogowych.
					</p>
					<form className="flex flex-col sm:flex-row">
						<input
							className="w-full p-2 rounded-s-md mb-2"
							type="email"
							placeholder="Wpisz tutaj e-mail"
						/>
						<button className=" w-1/5 p-2  rounded-e-md mb-2 bg-[#00B86E] ">
							Zapisz się!
						</button>
					</form>
				</div>
			</div>

			<div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
				<p>Fundacja © {new Date().getFullYear()} </p>
				<div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2"></div>
			</div>
		</div>
	);
}

export default Footer;
