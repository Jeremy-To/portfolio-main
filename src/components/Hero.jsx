import { me } from '../me';

function Hero() {
	return (
		<section className="home-hero">
			<div className="home-hero__content">
				<h1 className="heading-primary">Hey, My name is {me.name}</h1>
				<div className="home-hero__info">
					<p className="text-primary">{me.subtitle}</p>
					<p className="text-primary">{me.location}</p>
				</div>
				<div className="home-hero__cta">
					<a href="./#projects" className="btn btn--bg">
						Projects
					</a>
				</div>
			</div>

			<div className="home-hero__mouse-scroll-cont">
				<div className="mouse">
					<button href="./#projects"></button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
