import React from 'react'
import { FadeIn } from 'react-slide-fade-in'

import PhotoSilder from '../components/PhotoSlider'

function Home() {
	const images = [
		'https://www.cozadzien.pl/img/2018/04/27/elektronik1.jpg',
		'https://www.cozadzien.pl/img/2022/12/07/_max/318491492-704665954356183-7133153310755034714-n.jpg',
		'https://bi.im-g.pl/im/b6/e1/1b/z29234870AMP,Zakonczyla-sie-termomodernizacja-Zespolu-Szkol-Ele.jpg',
		'https://d-art.ppstatic.pl/kadry/k/r/b4/10/61f2d2139d358_o_medium.jpg',
		'https://bi.im-g.pl/im/60/0f/16/z23133024AMP,Ranking-Perspektyw-2021--Najlepsze-technikum-w-Rad.jpg',
	]

	return (
		<>
			<FadeIn
				from="left"
				positionOffset={0}
				triggerOffset={0}
				delayInMilliseconds={500}
			>
				<PhotoSilder images={images} />

				<FadeIn
					from="bottom"
					positionOffset={100}
					triggerOffset={100}
					delayInMilliseconds={50}
				>
					wswregf
				</FadeIn>
			</FadeIn>
		</>
	)
}

export default Home
