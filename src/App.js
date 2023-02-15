import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
	return (
		<div className="App">
			<Container>
				<Header />
				<Hero />
			</Container>

		</div>
	);
}

export default App;
