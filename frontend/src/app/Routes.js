import React, { lazy } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

const Home = lazy(() => import('../containers/Home'))
const Contact = lazy(() => import('../containers/Contact'))

function Routes() {
	return (
		<Switch>
			<Route path="/" element={<Home />} />
			<Route path="/kontakt" element={<Contact />} />
		</Switch>
	)
}

export default Routes
