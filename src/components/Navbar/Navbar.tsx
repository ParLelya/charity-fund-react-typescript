import React from 'react';

const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper green lighten-2" style={{position: 'sticky'}}>
				<a href='/' className="brand-logo" style={{ left: '47%', top: '-20%'}}>
					<img
						src='logo.png'
						alt='logo'
						style={{ width: '120px'}}
					/>
				</a>

				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="#about" className="black-text">
							<span>О фонде</span>
						</a>
					</li>
					<li>
						<a href="#pets" className="black-text">
							<span>Подопечные</span>
						</a>
					</li>
					<li>
						<a href="#news" className="black-text">
							<span>Новости</span>
						</a>
					</li>
					<li style={{marginRight: '10px'}}>
						<a href="#help" className="black-text">
							<span>Помочь</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
