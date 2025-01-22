import { NavLink, Outlet } from "react-router";

function Nav() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"/PropsComponent"}>PropsComponent</NavLink>
					</li>
					<li>
						<NavLink to={"/MyStateComponent"}>MyStateComponent</NavLink>
					</li>
					<li>
						<NavLink to={"/EffectsComponent"}>EffectsComponent</NavLink>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Nav;
