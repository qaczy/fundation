import React from 'react'
import reactLogo from '../assets/react.svg'

function Navbar() {
	return (
		<div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg'>
			<div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

				<div className='flex items-center'>
					<img src={reactLogo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[30px]' />
				</div>


				<div className='flex items-center'>
					<ul className='hidden md:flex'>
						<li className="ml-3">Home</li>
						<li className="ml-3">Informacje</li>
						<li className="ml-3">Kontakt</li>
					</ul>
				</div>

				<div className='hidden md:flex sm:mr-10 md:mr-10'>
					<button className='text-black border border-radius mr-6 text-2xl h-[25px] w-[25px]'>+</button>
					<button className='text-black border text-2xl h-[25px] w-[25px]'>-</button>
				</div>

			</div>

		</div>
	)
}

export default Navbar