import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import Westerplatte from '../assets/imgs/westerplatte.jpg'

function Footer() {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	})

	return (
		<footer className="footer">
			<div>
				<div className="card__header">
					<h2 className="card__header__title small">Kontakt</h2>
				</div>
				<div
					style={{
						opacity: '0.9',
						fontSize: '1.2em',
						padding: '1rem 0',
						lineHeight: '2em',
					}}
				>
					<p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
						Zespół Szkół Elektronicznych Im. Bohaterów Westerplatte
					</p>
					<p>Ul. Sadkowska 19</p>
					<p>
						<b>tel:</b> 48 344-81-16
					</p>
					<p>
						<b>Faks:</b> 48 344-88-28
					</p>
					<p>
						<b>Email:</b> elektronik@radom.pl
					</p>
				</div>
			</div>
			<div>
				<div className="card__header">
					<h2 className="card__header__title small">
						Nasza lokalizacja
					</h2>
				</div>
				{isLoaded && (
					<div className="google-maps">
						<GoogleMap
							mapContainerStyle={{
								width: '100%',
								height: '250px',
								margin: '1rem auto 0',
							}}
							center={{ lat: 21.178574, lng: 72.814149 }}
							zoom={13}
						>
							<Marker
								position={{
									lat: 21.178574,
									lng: 72.814149,
								}}
							/>
						</GoogleMap>
					</div>
				)}
			</div>
			<div className="patron">
				<div className="card__header">
					<h2 className="card__header__title small">Patron szkoły</h2>
				</div>
				<div style={{ marginTop: '1rem' }}>
					<img
						src={Westerplatte}
						alt="Bohaterowie Westerplatte"
						width={200}
						style={{ float: 'left', marginRight: '0.5rem' }}
					/>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Architecto commodi reprehenderit at quasi ratione
						voluptatum sed beatae neque officiis, qui repellat
						pariatur veniam! Beatae odio, quasi aperiam similique
						omnis veniam placeat expedita maxime soluta. Consequatur
						vel cumque ut commodi velit harum quos, debitis voluptas
						suscipit officiis officia, praesentium quasi qui.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
