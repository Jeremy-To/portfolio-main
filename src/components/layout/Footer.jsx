import { me } from '../../me';

function Footer() {
	return (
		<footer className="main-footer">
			<div className="main-container">
				<div className="main-footer__upper">
					<div className="main-footer__row main-footer__row-1">
						<h2 className="heading heading-sm main-footer__heading-sm">
							<span>Social</span>
						</h2>
						<div className="main-footer__social-cont">
							{me.social.map((item, number) => (
								<div key={number}>
									{/* 	<a
										target="_blank"
										rel="noreferrer"
										href={item.link}
										key={number}
									>
										<img
											className="main-footer__icon"
											src={item.image}
											alt="icon"
										/>
									</a> */}
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>
					<div className="main-footer__row main-footer__row-2">
						<h4 className="heading heading-sm text-lt">{me.name}</h4>
					</div>
				</div>
				<div className="main-footer__lower">
					Made by
					<a rel="noreferrer" target="_blank">
						jeremy to
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
