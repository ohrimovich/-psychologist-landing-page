import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Circles from './components/Circles/Circles';
import Container from './components/Container/Container';

function App() {
	return (
		<div className="App">
			<Container>
				<Circles/>
				<Header />
				<Hero />
				</Container>
		</div>
	);
}

export default App;
