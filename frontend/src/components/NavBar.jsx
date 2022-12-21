import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../assets/imgs/logo.png'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

function NavBar() {
	const [open, setOpen] = useState(false)

	const onClick = () => setOpen(!open)

	return (
		<nav className="navbar">
			<Link to="/">
				<img
					className="navbar__logo"
					src={Logo}
					height={60}
					alt="Technikum Elektronik im. Bohaterów Westerplatte"
				/>
			</Link>
			<div className="navbar__container">
				<div className="navbar__mobile">
					<span>Menu</span>
					<button className="btn" onClick={onClick}>
						{open ? <IoClose /> : <HiMenu />}
					</button>
				</div>

				<ul className={`navbar__list${!open ? ' closed' : ''}`}>
					<li className="navbar__list__item">
						<NavLink to="/" onClick={onClick}>
							strona głowna
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/aktualnosci" onClick={onClick}>
							aktualności
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<a
							href="https://adfslight.vulcan.net.pl/radomprojekt/LoginPage.aspx?ReturnUrl=%2fradomprojekt%2fDefault.aspx%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253A%252F%252Fsynergia.librus.pl%252Floguj%252Fradom"
							target="_blank"
							rel="noreferrer"
						>
							e-dziennik
						</a>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/kaluzula" onClick={onClick}>
							klauzula dostępności
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/rodo" onClick={onClick}>
							rodo
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/kontakt" onClick={onClick}>
							Kontakt
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
