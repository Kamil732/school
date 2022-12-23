import React from 'react'

import Logo from '../assets/imgs/logo.png'
import Emblem from '../assets/imgs/emblem.png'
import Westerplatte from '../assets/imgs/westerplatte.jpg'

import { FadeIn } from 'react-slide-fade-in'

function MainPagehero() {
	return (
		<>
			<section className="pagehero">
				<FadeIn
					from="top"
					positionOffset={20}
					triggerOffset={0}
					delayInMilliseconds={500}
				>
					<div className="pagehero__content">
						<img
							src={Logo}
							alt="Zespół Szkół Elektronicznych Im. Westerplatte"
							height={window.innerWidth >= 1024 ? 175 : 150}
							className="tablet"
						/>

						<div className="flex-center">
							<img src={Emblem} alt="" height={100} />
							<h1 className="pagehero__text">
								Zespół Szkół Elektronicznych
								<br />
								Im. Westerplatte
								<br />W Radomiu
							</h1>
						</div>

						<img
							src={Westerplatte}
							alt="Bohaterowie Westerplatte"
							width={window.innerWidth >= 1024 ? 220 : 180}
							height={window.innerWidth >= 1024 ? 150 : 120}
							style={{ borderRadius: '8px' }}
						/>
					</div>
				</FadeIn>
				<h2 className="quote">
					<FadeIn
						from="left"
						positionOffset={200}
						triggerOffset={500}
						delayInMilliseconds={1000}
					>
						<div className="pagehero__content">
							<figure
								style={{
									marginLeft: 'auto',
									placeSelf: '',
									gridColumn: '2 / span 3',
								}}
							>
								<blockquote>
									<q>
										Lorem ipsum dolor, sit amet consectetur
										adipisicing.
										<br />
										Inventore eveniet deserunt earum quia
										ullam, numquam temporibus.
									</q>
								</blockquote>
								<figcaption>
									~ Bohaterzy Westerplatte
								</figcaption>
							</figure>
						</div>
					</FadeIn>
				</h2>
			</section>

			{/* <section className="pagehero">

			</section> */}
		</>
	)
}

export default MainPagehero
