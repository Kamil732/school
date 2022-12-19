import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/css/main.css'
import NavBar from './components/NavBar'

const Home = lazy(() => import('./containers/Home'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
])

function App() {
	return (
		<Suspense>
			<NavBar />

			<RouterProvider router={router} />
		</Suspense>
	)
}

export default App
