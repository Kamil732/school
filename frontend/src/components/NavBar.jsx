import React from 'react'
import { useState } from 'react'

function NavBar() {
	const [open, setOpen] = useState(false)

	const onClick = () => setOpen(!open)

	return (
		<nav className="navbar">
			<a href="/">
				<img
					className="navbar__logo"
					src=""
					alt="Technikum Elektronik im. Bohaterów Westerplatte"
				/>
			</a>
			<div className="navbar__mobile">
				<span>Menu</span>
				<button onClick={onClick}></button>
			</div>
			<ul className={`navbar__list${!open && ' closed'}`}>
				<li className="navbar__list__item">strona głowna</li>
				<li className="navbar__list__item">aktualności</li>
				<li className="navbar__list__item">e-dziennik</li>
				<li className="navbar__list__item">klauzulka dostępności</li>
				<li className="navbar__list__item">rodo</li>
				<li className="navbar__list__item">Kontakt</li>
			</ul>
		</nav>
	)
}

export default NavBar
