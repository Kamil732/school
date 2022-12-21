import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../assets/css/main.css'

import NavBar from '../components/NavBar'
import Routes from './Routes'

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Suspense>
				<Routes />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
