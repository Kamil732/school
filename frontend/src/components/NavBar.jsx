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
			<Link to="/" onClick={() => setOpen(false)}>
				<img
					className="navbar__logo"
					src={Logo}
					height={60}
					alt="Technikum Elektronik im. Bohaterów Westerplatte"
				/>
			</Link>
			<div className="navbar__container">
				<div className="navbar__mobile mobile">
					<label htmlFor="menu-btn">Menu</label>
					<button id="menu-btn" className="btn" onClick={onClick}>
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
						<NavLink to="/o-szkole" onClick={onClick}>
							o szkole
						</NavLink>
					</li>
					{/* <li className="navbar__list__item">
						<a
							href="https://adfslight.vulcan.net.pl/radomprojekt/LoginPage.aspx?ReturnUrl=%2fradomprojekt%2fDefault.aspx%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253A%252F%252Fsynergia.librus.pl%252Floguj%252Fradom"
							target="_blank"
							rel="noreferrer"
						>
							e-dziennik
						</a>
					</li> */}
					<li className="navbar__list__item">
						<NavLink to="/oferty" onClick={onClick}>
							oferty
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/strefa-ucznia" onClick={onClick}>
							strefa ucznia
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/strefa-rodzica" onClick={onClick}>
							strefa rodzica
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/sport-rekreacja" onClick={onClick}>
							sporty
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/ogloszenia" onClick={onClick}>
							ogłoszenia
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/linki" onClick={onClick}>
							linki
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink to="/kontakt" onClick={onClick}>
							kontakt
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="navbar__contact">
				<p>
					<span>Adres:</span> Sadkowska 19, Radom 26-600, Polska
				</p>
				<p>
					<span>Tel:</span> 48 344-81-16, 48 344-88-28
				</p>
				<p>
					<span>Faks:</span> 48 344-05-97
				</p>
				<p>
					<span>E-mail:</span> elektronik@radom.pl
				</p>
			</div>
		</nav>
	)
}

export default NavBar
