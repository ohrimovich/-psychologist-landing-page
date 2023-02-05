import logo from './images/logo.png';
import './App.css';
import Container from './components/Container/Container';

function App() {
	return (
		<div className="App">
			<Container>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Марія Янчук</h1>
					<p>
          Психолог
					</p>
				</header>
			</Container>

		</div>
	);
}

export default App;
