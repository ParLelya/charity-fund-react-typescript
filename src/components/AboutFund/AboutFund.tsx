import React from 'react';

const About: React.FC = (props) => {
	return (
		<section id='about' >
			<div className="row">
				<div className="col s12 m6 l5">
					<div className="card">
						<div className="card-image">
							<img src="https://sun9-east.userapi.com/sun9-57/s/v1/ig2/zoQfWEEK1pldK1fiIQ2XkWTzLA947HqM1Gx5f98UPk2i_-cnCnQ0Rk_COsQ6jzIFUyPWWp28LIKFgzTtjiMfQpm4.jpg?size=2560x1706&quality=95&type=album" alt='' />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<p>
									<b>Приют для животных и социальный центр спасения и реабилитации животных «Альтера Вита» </b>
									- это многофункциональная организация по работе с безнадзорными животными.
									Мы даем шанс животным обрести новую жизнь и шанс людям – стать человечнее!<br />
									В настоящее время Центр «Альтера Вита» находится в стадии становления.<br />
									Мы строим приют, занимаемся спасением животных с улиц, участвуем в различных экологических мероприятиях.<br />
									Центр работает с 2020 года в пос. Вырица в Ленинградской области.
								</p>
							</div>
							<div className="card-action">
								<a href="#help">Хочу помочь!</a>
							</div>
						</div>
					</div>
				</div>
				<h3 className="header">Наш девиз:<br />
					<i>«ШАНС ЕСТЬ У КАЖДОГО!»</i></h3>
				<div className="col s12 m6 l7">
					<h3 className="header">Задачи фонда:</h3>
					<div className="card-panel green lighten-4">
						<p className="black-text">
							<i className="material-icons" style={{ fontSize: '1rem', transform: 'translateY(20%)' }}>check</i>
							спасение, лечение, стерилизация, пристройство бездомных кошек и собак;<br />
							<i className="material-icons" style={{ fontSize: '1rem', transform: 'translateY(20%)' }}>check</i>
							пропаганда гуманного и ответственного отношения к животным;<br />
							<i className="material-icons" style={{ fontSize: '1rem', transform: 'translateY(20%)' }} >check</i>
							формирование новой культуры взаимодействия людей и братьев наших меньших.<br />
						</p>
					</div>
				</div>

				<div className="col s12 m6 l7">
					<h3 className="header">Реквизиты:</h3>
					<div className="card-panel green lighten-4">
						<p className="black-text">
							Автономная некоммерческая организация Социальный центр спасения и реабилитации животных «Альтера Вита»<br />
							ИНН 4705088146 КПП 470501001<br />
							р/с 40703810955000004152 в Северо-западном банке ПАО Сбербанк<br />
							к/с 30101810500000000653		БИК 044030653<br />
							При переводе указывать назначение платежа: "Пожертвование на уставную деятельность".
						</p>
					</div>
				</div>

			</div>
		</section>
	);
};

export default About;
