import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import EffectsComponent from "./Components/Effect/EffectsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import NotFoundPage from "./Components/404/NotFoundPage";
import Nav from "./Components/nav/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
const person = {
	name: "John",
	info: {
		age: 25,
		city: "New York",
		job: "Developer",
		hobbies: ["reading", "coding", "gaming"],
	},
};
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Nav />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="effectsComponent" element={<EffectsComponent />} />
				<Route path="MyStateComponent" element={<MyStateComponent />} />
				<Route
					path="PropsComponent"
					element={<PropsComponent person={person} />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
);
