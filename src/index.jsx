
import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';


export function App() {
	return (
		< >
   		<h1 className="text-4xl font-bold bg-blue-500 px-2 py-2">Ability Chart</h1>
		
		<LocationProvider>
			<Router>
				<Route path="/" component={Home} />
				<Route default component={NotFound} />
			</Router>
		</LocationProvider>
		</>
	);
}

render(<App />, document.getElementById('app'));
