import React from 'react'
import Logo from '../assets/imgs/logo.png'
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
							height={150}
							className="tablet"
						/>

						<h1 className="pagehero__text">
							Zespół Szkół Elektronicznych
							<br />
							Im. Westerplatte
							<br />W Radomiu
						</h1>

						<img
							src={Westerplatte}
							alt="Bohaterowie Westerplatte"
							width={250}
							height={175}
							style={{ borderRadius: '8px' }}
						/>
					</div>
				</FadeIn>
			</section>

			<section className="pagehero">
				<h2 className="quote">
					<FadeIn
						from="left"
						positionOffset={200}
						triggerOffset={500}
						delayInMilliseconds={1000}
					>
						<div className="pagehero__content">
							<figure style={{ marginLeft: 'auto' }}>
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
		</>
	)
}

export default MainPagehero
