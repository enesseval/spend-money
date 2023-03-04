import "./App.css";
import Header from "./components/Header";
import Bar from "./components/Bar";
import Items from "./components/Items";
import Total from "./components/Total";

function App() {
	return (
		<div className="container">
			<Header />
			<Bar />
			<Items />
			<Total />
		</div>
	);
}

export default App;
