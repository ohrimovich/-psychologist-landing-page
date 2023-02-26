import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Circles from './components/Circles/Circles';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
	return (
		<div className="App">
				<Circles/>
				<Header />
				<Hero />
				<AboutMe/>
		</div>
	);
}

export default App;
