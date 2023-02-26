import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FadeIn } from 'react-slide-fade-in'

import PhotoSilder from '../components/PhotoSlider'
import { MONTHS, COMPASS_VALUES } from '../app/utilites'

function Home() {
	const [weather, setWeather] = useState({})

	const images = [
		'https://www.cozadzien.pl/img/2018/04/27/elektronik1.jpg',
		'https://www.cozadzien.pl/img/2022/12/07/_max/318491492-704665954356183-7133153310755034714-n.jpg',
		'https://bi.im-g.pl/im/b6/e1/1b/z29234870AMP,Zakonczyla-sie-termomodernizacja-Zespolu-Szkol-Ele.jpg',
		'https://d-art.ppstatic.pl/kadry/k/r/b4/10/61f2d2139d358_o_medium.jpg',
		'https://bi.im-g.pl/im/60/0f/16/z23133024AMP,Ranking-Perspektyw-2021--Najlepsze-technikum-w-Rad.jpg',
	]

	const news = [
		{
			title: 'Gala Sportu',
			img: 'https://www.elektronik.edu.pl/images/garfika_artykuly/2022_2023/2023_02_08_KATARZYNA_SKORKIEWICZ_NAGRODA/M/logo_strona1.jpg',
			description:
				'Miło nam poinformować, że podczas tegorocznej Gali Sportu, która odbyła się 3 lutego w Awiatorze, nauczycielka naszej szkoły Katarzyna Skórkiewicz została uhonorowana nagrodą w kategorii "Serce dla sportu". Gratulujemy otrzymania tej prestiżowej nagrody.',
			published: '10 luty 2023',
			author: 'Pawel Wach',
		},
		{
			title: 'Budujemy EKO-MIASTO LEGO',
			img: 'https://www.elektronik.edu.pl/images/garfika_artykuly/2022_2023/2023_02_02_ECOLEGO/M/logo_lego.jpg',
			description:
				'W dniu 2 lutego nauczycielki języka angielskiego, Barbara Kostkiewicz i Magdalena Dygała zaangażowały uczniów klasy 3M w akcję ,,Budujemy EKO-MIASTO LEGO” w ramach międzynarodowego projektu ,,Climate Action Project”.',
			published: '09 luty 2023',
			author: 'Pawel Wach',
		},
		{
			title: 'SWEDED FILM',
			img: 'https://www.elektronik.edu.pl/images/garfika_artykuly/2022_2023/2022_10_20_KONKURS_SWEDEDFILM/M/Grafika2.png',
			description:
				'Miło nam ogłosić zwycięzców konkursu filmowego pt. „Sweded film – film niskobudżetowy" zorganizowanego przez szkolny klub filmowy „Elektrofilmowcy ZSE”. I miejsce zajęli uczniowie klasy 2P1: Dominik Ruszczyk, Jakub Markowski, Kacper Jaskólski, Krzysztof Widziniewicz, Wiktor Maj. Gratulujemy serdecznie!!!',
			published: '19 styczeń 2023',
			author: 'Pawel Wach',
		},
		{
			title: 'Zmiany w planie lekcji os 02.01.2023',
			img: 'https://www.elektronik.edu.pl/images/inne/plan.png',
			description:
				'Proszę zapoznać się z nowym planem lekcji obowiązującym od 02.01.2023.',
			published: '30 grudzień 2022',
			author: 'Zbigniew Matyga',
		},
	]

	useEffect(() => {
		let mounted = true
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=51.2492925&lon=21.0792463&lang=PL&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
			.then((res) => {
				const date = new Date()
				const sunrise = new Date(
					res.data.sys.sunrise * 1000
				).toLocaleTimeString('pl-PL')
				const sunset = new Date(
					res.data.sys.sunset * 1000
				).toLocaleTimeString('pl-PL')

				mounted &&
					setWeather({
						date: `${date.getDate()} ${
							MONTHS[date.getMonth()]
						}, ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
						...res.data,
						wind: {
							...res.data.wind,
							compass_dir:
								COMPASS_VALUES[
									Math.round(
										(res.data.wind.deg % 360) / 22.5,
										0
									)
								],
						},
						sys: {
							...res.data.sys,
							sunrise,
							sunset,
						},
					})
			})
		return () => (mounted = false)
	}, [])

	return (
		<>
			<FadeIn
				from="left"
				positionOffset={0}
				triggerOffset={0}
				delayInMilliseconds={500}
			>
				<PhotoSilder
					images={images}
					text="Witamy Na Stronie Elektronika!"
				/>

				<FadeIn
					from="bottom"
					positionOffset={100}
					triggerOffset={100}
					delayInMilliseconds={50}
				>
					<div className="inline">
						<div className="card">
							<div className="card__header">
								<h2 className="card__header__title">
									Aktualności
								</h2>
							</div>
							<div className="card__body">
								<ul className="list" style={{ width: '60vw' }}>
									{news.map((item, idx) => (
										<li className="list__item" key={idx}>
											<img
												src={item.img}
												alt={item.title}
												width={100}
												className="list__item__image"
											/>
											<div className="list__item__body">
												<h2 className="list__item__title">
													{item.title}
												</h2>
												{item.description}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="v-inline" style={{ width: '20vw' }}>
							<div className="card">
								<div className="card__header">
									<h2 className="card__header__title small">
										Dziś mamy
									</h2>
								</div>
								<div className="card__body small">
									<span>Imieniny: Kamila, Bartka</span>

									<div className="weather">
										{Object.keys(weather).length > 0 ? (
											<>
												<small>{weather.name}</small>
												<small>{weather.date}</small>

												<div
													className="flex-center inline"
													style={{
														margin: '-1rem 0',
													}}
												>
													<img
														src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
														alt={
															weather.weather[0]
																.description
														}
														width={75}
														className="weather"
													/>
													<div>
														<h4>
															{
																weather
																	.weather[0]
																	.description
															}
														</h4>
														<h4>
															{weather.main.temp}
															&deg;C
														</h4>
													</div>
												</div>
												<small>
													Odczuwalne:{' '}
													{weather.main.feels_like}
													&deg;C
												</small>
												<small>
													aktualne ciśnienie:{' '}
													{weather.main.pressure} hPa
												</small>
												<small>
													wilgotność:{' '}
													{weather.main.humidity}%
												</small>
												<small>
													prędkość wiatru:{' '}
													{weather.wind.speed}m/s{' '}
													{weather.wind.compass_dir}
												</small>
												<small>
													Wiatr w porywach:{' '}
													{weather.wind.gust}m/s
												</small>
												<small>
													wschód słońca:{' '}
													{weather.sys.sunrise}
												</small>
												<small>
													zachód słońca:{' '}
													{weather.sys.sunset}
												</small>
											</>
										) : null}
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card__header">
									<h2 className="card__header__title small">
										Dziś mamy
									</h2>
								</div>
								<div className="card__body small">
									Imieniny: Kamila, Bartka
								</div>
							</div>
						</div>
					</div>
				</FadeIn>
			</FadeIn>
		</>
	)
}

export default Home
