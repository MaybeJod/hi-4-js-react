import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import Nav from "./Components/nav/Nav";
import { Routes, Route } from "react-router";
import NotFoundPage from "./Components/404/NotFoundPage";
import Home from "./Components/home/Home";

function App() {
	const person = {
		name: "John",
		info: {
			age: 25,
			city: "New York",
			job: "Developer",
			hobbies: ["reading", "coding", "gaming"],
		},
	};

	//  TODO ad routes to the components we've created so far
	return (
		<div>
			<header>
				<h1>This is React</h1>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="effectsComponent" element={<EffectsComponent />} />
					<Route path="MyStateComponent" element={<MyStateComponent />} />
					<Route
						path="PropsComponent"
						element={<PropsComponent person={person} />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
