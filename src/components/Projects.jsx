import { me } from '../me';
// import from ...

function Projects() {
	return (
		<section id="projects" className="projects sec-pad">
			<div className="main-container">
				<h2 className="heading heading-sec heading-sec__mb-bg">
					<span className="heading-sec__main">Projects</span>
				</h2>

				<div className="projects__content">
					{me.projects.map((project, number) => (
						<div className="projects__row" key={number}>
							<div className="projects__row-img-cont">
								<img
									src={project.image}
									alt={project.name}
									className="projects__row-img"
									loading="lazy"
								/>
							</div>
							<div className="projects__row-content">
								<h3 className="projects__row-content-title">{project.name}</h3>
								<p className="projects__row-content-desc">
									{project.description}
								</p>
								<p className="projects__row-content-desc">
									{project.contribution}
								</p>
								<div className="projects__row">
									<a
										href={project.links?.[0].uri}
										className="btn btn--sm btn--theme dynamicBgClr"
									>
										Check it live
									</a>
									<a
										href={project.links?.[1].uri}
										className="btn btn--sm btn--theme dynamicBgClr"
									>
										Check it on Github
									</a>
								</div>

								<p className="projects__row-content-desc">
									{project.technologies.map((technology, number) => (
										<span className="projects__row-content-desc" key={number}>
											{technology.name}
										</span>
									))}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
