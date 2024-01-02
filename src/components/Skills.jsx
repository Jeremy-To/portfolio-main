import { me } from '../me';

function Skills() {
	return (
		<section id="about" className="about sec-pad">
			<div className="main-container">
				<h2 className="heading heading-sec heading-sec__mb-med">
					<span className="heading-sec__main">About Me</span>
					<span className="heading-sec__sub">{me.about}</span>
				</h2>
				<div className="about__content">
					<div className="about__content-main">
						<h3 className="about__content-title">Get to know me!</h3>
						<a
							href="./#contact"
							className="btn btn--med btn--theme dynamicBgClr"
						>
							Contact
						</a>
					</div>
					<div className="about__content-skills">
						<h3 className="about__content-title">My Skills</h3>
						<div className="skills">
							{me.skills.map((skill, number) => (
								<div className="skills__skill" key={number}>
									{skill.name}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="about__content">
					<div className="about__content-main">
						<h3 className="about__content-title">Eductaion</h3>
						<div>
							{me.education.map((skill, number) => (
								<div className="skills__skill" key={number}>
									<p>{skill.degree}</p>
									<p>{skill.major}</p>
									<p>{skill.school}</p>
									<p>{skill.graduation}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
