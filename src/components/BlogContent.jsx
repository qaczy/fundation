import React from 'react'
import placeholder from '../assets/placeholder.png'


function BlogContent() {
	const postContent = {
		id: 1,
		title: "Title 1",
		desc: "Pies, jako najstarszy przyjaciel człowieka, towarzyszy ludziom od tysięcy lat, a zrozumienie jego zachowań jest kluczowe dla harmonijnego współżycia. Psychologia psów, zwana psią behawiorystyką, zajmuje się badaniem i interpretacją zachowań psów, a także ich uczeniem się i reakcjami na otoczenie. W psiej behawiorystyce istnieje przekonanie, że większość zachowań psa jest rezultatem interakcji z otoczeniem i uczenia się z doświadczeń. Behawiorystyka opiera się na obserwacji psa w różnych sytuacjach, analizie jego reakcji oraz zrozumieniu, jakie bodźce wpływają na konkretną odpowiedź. Podstawowym zagadnieniem w psiej behawiorystyce jest nauka o warunkowaniu klasycznym i operantowym. Warunkowanie klasyczne to proces, w którym pies kojarzy pewien bodziec z innym bodźcem, co wpływa na jego zachowanie. Przykładem może być sygnał dzwonka poprzedzający karmienie psa, co powoduje, że dzwonek sam w sobie staje się sygnałem radości dla psa. Natomiast warunkowanie operacyjne to proces, w którym pies uczy się poprzez konsekwencje swoich działań. Na przykład, jeśli pies wykonuje polecenie, a potem otrzymuje smakołyk, zwiększa się prawdopodobieństwo, że powtórzy to zachowanie.Innym obszarem badań w psiej behawiorystyce jest hierarchia społeczna w grupach psów. Psy, będąc zwierzętami stadnymi, funkcjonują w społecznościach, gdzie istnieje jasno określona struktura hierarchiczna. Zrozumienie tej hierarchii i zachowań z nią związanych jest kluczowe dla właścicieli psów, aby skutecznie zarządzać grupą i unikać konfliktów.	Współczesna psia behawiorystyka wykorzystuje również technologie, takie jak monitoring i analiza zachowań przy użyciu kamer, co pozwala na bardziej precyzyjne zrozumienie reakcji psów w różnych sytuacjach. W praktyce, psia behawiorystyka pomaga właścicielom psów radzić sobie z problematycznymi zachowaniami, takimi jak agresja, lęk czy obsesyjne nawyki. Poprzez zastosowanie metod behawioralnych i treningu, behawiorysta może pomóc w zmianie niepożądanych zachowań oraz wzmocnić pozytywne aspekty relacji między psem a jego właścicielem. Wnioski płynące z psiej behawiorystyki nie tylko pomagają w rozwiązywaniu problemów behawioralnych u psów, ale także przyczyniają się do zacieśniania więzi między człowiekiem a tym lojalnym zwierzakiem, ucząc właścicieli lepszego zrozumienia potrzeb i komunikacji ze swoim czworonożnym przyjacielem.",
		thumb: "https://images.unsplash.com/2/02.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		authorName: "Gal Anonim",
		authorThumb: "https://okeefelaw.net/wp-content/uploads/2020/09/testimonial-placeholder-female.jpg",
		authorJob: "Trener"

	}


	return (

		<div className="w-full pb-10 bg-slate-200">
			<div className="mx-auto max-w-[1240px]">
				<div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
					<div className="col-span-2 gap-x-8 gap-y-8">

						<img className=' h-64 w-full object-cover rounded-t-3xl' src={postContent.thumb} alt="" />
						<h1 className='font-bold text-2xl my-1 pt-5'>{postContent.title}</h1>
						<div className="pt-5">
							<p>{postContent.desc}</p>
						</div>

					</div>
					<div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 h-[250px]'>
						<div>
							<div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-64">
								<img src={postContent.authorThumb} alt="Autor posta" className="p-2 w-32 rounded-full mx-auto" />
								<h1 className="font-bold text-2xl text-center text-grey-900 pt-3">{postContent.authorName}</h1>
								<p className="text-center text-grey-900 font-medium">
									{postContent.authorJob}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogContent;
