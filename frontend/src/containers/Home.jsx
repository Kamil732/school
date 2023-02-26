import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FadeIn } from 'react-slide-fade-in'

import PhotoSilder from '../components/PhotoSlider'
import { MONTHS, COMPASS_VALUES } from '../app/utilites'

function Home() {
	const getVacationTimer = () => {
		const vacation = new Date(2023, 6, 24)

		const total = Date.parse(vacation) - Date.parse(new Date())
		const seconds = Math.floor((total / 1000) % 60)
		const minutes = Math.floor((total / 1000 / 60) % 60)
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
		const days = Math.floor(total / (1000 * 60 * 60 * 24))

		return {
			days: days < 10 ? `0${days}` : days,
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
			seconds: seconds < 10 ? `0${seconds}` : seconds,
		}
	}
	const [weather, setWeather] = useState({})
	const [vacation, setVacation] = useState(getVacationTimer())

	useEffect(() => {
		const interval = setInterval(() => {
			setVacation(getVacationTimer())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

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
					<div
						className="inline"
						style={{ width: '85vw', margin: '0 auto' }}
					>
						<main>
							<div className="card">
								<div className="card__header">
									<h2 className="card__header__title">
										Aktualności
									</h2>
								</div>
								<div className="card__body">
									<ul className="list">
										{news.map((item, idx) => (
											<li
												className="list__item"
												key={idx}
											>
												<img
													src={item.img}
													alt={item.title}
													width={100}
													className="list__item__image"
												/>
												<section className="list__item__body">
													<h2 className="list__item__title">
														{item.title}
													</h2>
													{item.description}

													<div className="list__item__footer">
														<small>
															Opublikowano:{' '}
															{item.published}
														</small>{' '}
														|{' '}
														<small>
															{item.author}
														</small>{' '}
														|{' '}
														<small>
															<a href="#">
																Czytaj więcej
															</a>
														</small>
													</div>
												</section>
											</li>
										))}
									</ul>
								</div>
							</div>
						</main>
						<div className="v-inline">
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
														flexDirection: 'row',
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
										Do wakacji zostało
									</h2>
								</div>
								<div className="card__body">
									<div
										className="inline"
										style={{
											flexDirection: 'row',
											gap: '0.5rem',
										}}
									>
										<div className="flex-center">
											<h2>{vacation.days}</h2>
											<h6>DNI</h6>
										</div>
										<div className="flex-center">
											<h2>{vacation.hours}</h2>
											<h6>GODZIN</h6>
										</div>
										<div className="flex-center">
											<h2>{vacation.minutes}</h2>
											<h6>MINUT</h6>
										</div>
										<div className="flex-center">
											<h2>{vacation.seconds}</h2>
											<h6>SEKUND</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card__header">
									<h2 className="card__header__title small">
										Kierunki kształcenia
									</h2>
								</div>
								<div className="card__body">
									<figure className="profession">
										<span>Technik programista</span>
										<img
											src="https://www.zespolszkolmechanicznych.edu.pl/wp-content/uploads/2020/01/technik-programista.jpg"
											alt="programista"
										/>
									</figure>

									<figure className="profession">
										<span>Technik automatyk</span>
										<img
											src="https://www.kwalifikacjezawodowe.info/img/wo/7/13/zawod-Technik-automatyk-obrazek_sredni_4974713.jpg"
											alt="automatyk"
										/>
									</figure>

									<figure className="profession">
										<span>Technik informatyk</span>
										<img
											src="https://wit.pwr.edu.pl/fcp/2GBUKOQtTKlQhbx08SlkTUg1CUWRuHQwFDBoIVURNWHxbDlhnRlUuWTISTnoYDxMe/190/public/news/pixabay/monitor-1307227_1920_1.jpg"
											alt="informatyk"
										/>
									</figure>
									<figure className="profession">
										<span>Technik mechatronik</span>
										<img
											src="https://storage.opinieouczelniach.pl/cache/profession/1/Dv1Pcn7cZ-JXkERvcFaIZfFbD_mDY1l3.jpg?fm=pjpg&w=1120&h=500&fit=crop"
											alt="mechatronik"
										/>
									</figure>
									<figure className="profession">
										<span>Technik elektronik</span>
										<img
											src="https://dokariery.pl/documents/20184/419709/Elektronik_1160.jpg/9161ec96-5444-4aca-a311-9526eebb43e8?t=1653478026202"
											alt="elektronik"
										/>
									</figure>
									<figure className="profession">
										<span>Technik teleinformatyk</span>
										<img
											src="https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/6/76/zawod-Technik-teleinformatyk-obrazek_duzy_107676.jpg"
											alt="teleinformatyk"
										/>
									</figure>
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
