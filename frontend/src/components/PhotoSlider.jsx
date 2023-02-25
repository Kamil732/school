import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function PhotoSilder({ images }) {
	const [active, setActive] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			active >= images.length - 1
				? setActive(0)
				: setActive((prevActive) => prevActive + 1)
		}, 5000)

		return () => clearInterval(interval)
	}, [active, images.length])

	return (
		<figure className="slider">
			{images.map((img, idx) => (
				<img
					src={img}
					key={idx}
					alt="Szkoła"
					className={`slider__img${active === idx ? ' active' : ''}`}
				/>
			))}
			<h1 className="slider__text">Witamy Na Stronie Elektronika!</h1>
		</figure>
	)
}

PhotoSilder.prototype.propTypes = {
	images: PropTypes.array.isRequired,
}

export default PhotoSilder
