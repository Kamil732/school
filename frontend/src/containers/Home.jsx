import React from 'react'
import { FadeIn } from 'react-slide-fade-in'

import PhotoSilder from '../components/PhotoSlider'

function Home() {
	const images = [
		'https://www.cozadzien.pl/img/2018/04/27/elektronik1.jpg',
		'https://bi.im-g.pl/im/b6/e1/1b/z29234870AMP,Zakonczyla-sie-termomodernizacja-Zespolu-Szkol-Ele.jpg',
		'https://www.cozadzien.pl/img/2022/04/22/ze-szkolnej-kroniki-elektronik/_min/elektronik-002.jpg',
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
			</FadeIn>
		</>
	)
}

export default Home
