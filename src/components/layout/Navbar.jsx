/* import { useState } from 'react';
 */ import { me } from '../../me';
function Navbar() {
	/* 	const [isDark, setIsDark] = useState(false);
	 */ return (
		<header className="header">
			<div className="header__content">
				<div className="header__logo-container">
					{/*           <div className="header__logo-img-cont">
            <img
              src="./assets/png/john-doe.png"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div> */}
					<span className="header__logo-sub">{me.name}</span>
				</div>
				<div className="header__main">
					<ul className="header__links">
						<li className="header__link-wrapper">
							<a href="./" className="header__link">
								Home
							</a>
						</li>
						<li className="header__link-wrapper">
							<a href="./#about" className="header__link">
								About
							</a>
						</li>
						<li className="header__link-wrapper">
							<a href="./#projects" className="header__link">
								Projects
							</a>
						</li>
						<li className="header__link-wrapper">
							<a href="./#contact" className="header__link">
								Contact
							</a>
						</li>
					</ul>
					<div className="header__main-ham-menu-cont">
						<img
							src="./assets/svg/ham-menu.svg"
							alt="hamburger menu"
							className="header__main-ham-menu"
						/>
						<img
							src="./assets/svg/ham-menu-close.svg"
							alt="hamburger menu close"
							className="header__main-ham-menu-close d-none"
						/>
					</div>
				</div>
			</div>
			<div className="header__sm-menu">
				<div className="header__sm-menu-content">
					<ul className="header__sm-menu-links">
						<li className="header__sm-menu-link">
							<a href="./"> Home </a>
						</li>

						<li className="header__sm-menu-link">
							<a href="./#about"> About </a>
						</li>

						<li className="header__sm-menu-link">
							<a href="./#projects"> Projects </a>
						</li>

						<li className="header__sm-menu-link">
							<a href="./#contact"> Contact </a>
						</li>
						<li className="header__link-wrapper">
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
