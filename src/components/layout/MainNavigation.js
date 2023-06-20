import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.wrapper}>
				<div className={classes.logo}>QStack</div>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink
								to="/quotes"
								className={(navData) =>
									navData.isActive ? classes.active : ''
								}
							>
								All Quotes
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/new-quote"
								className={(navData) =>
									navData.isActive ? classes.active : ''
								}
							>
								Add a Quote
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default MainNavigation;
