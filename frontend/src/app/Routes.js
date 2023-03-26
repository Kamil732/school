import React, { lazy } from 'react'
import { Route, Routes as Switch, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../containers/Home'))
const Contact = lazy(() => import('../containers/Contact'))

function Routes() {
	return (
		<Switch>
			<Route path="/school" element={<Home />} />
			<Route path="/school/kontakt" element={<Contact />} />
			<Route path="*" element={<Navigate to="/school" />} />
		</Switch>
	)
}

export default Routes
