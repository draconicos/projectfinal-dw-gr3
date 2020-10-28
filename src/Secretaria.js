import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Secretaria extends Component {

    render() {
        return (
            <div>
            <section className="full-reset" style={{minHeight: "850px"}}>
		<div className="jumbotron">
		  <h2 className="text-center titles">Directorio Administrativo</h2>
		</div>
		{/* <!--======================================== Info. ========================================--> */}
		<article>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="text-center titles">
							Asuntos Estudiantiles
						</h3>
						<br/>
						<p className="lead">
							<i className="fa fa-angle-double-right"></i> &nbsp; Edificio A, Oficina 260 segundo nive<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Tel.: 2411 1800 ext. 1144<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Lunes – Viernes: 7:00-20:00<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Sábado: 7:00-12:00<br/>
						</p>
					</div>
				</div>
			</div>
		</article>
		<div className="divider-general"></div>
		{/* <!--======================================== Info. ========================================--> */}
		<article>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="text-center titles">
							Asuntos Académicos
						</h3>
						<br/>
						<p className="lead">
							<i className="fa fa-angle-double-right"></i> &nbsp; Edificio A, Oficina 350 tercer nivel<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Tel.: 2411 1800 ext. 1128, 1203<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Lunes – Viernes: 8:00-19:30<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Sábado: 8:00-14:00<br/>
						</p>
					</div>
				</div>
			</div>
		</article>
		<div className="divider-general"></div>
		{/* <!--======================================== Info. ========================================--> */}
		<article>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="text-center titles">
							Banco Industrial
						</h3>
						<br/>
						<p className="lead">
							<i className="fa fa-angle-double-right"></i> &nbsp; 3a av, 9-00 interior Finca el Zapote<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Tel.: 2501 4300<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Lunes – Viernes: 8:30-20:00<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Sábado: 8:30-14:00<br/>
						</p>
					</div>
				</div>
			</div>
		</article>
		{/* <!--======================================== Info. generalidades ========================================--> */}
		<article className="well" style={{marginBottom: "0 !important"}}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="text-center titles">
							Biblioteca
						</h3>
						<br/>
						<p className="lead">
							<i className="fa fa-angle-double-right"></i> &nbsp; biblio@umg.edu.gt<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Tel.: 2411 1800 ext. 1114, 1255, 1256, 1259<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Lunes – Viernes: 8:00-21:00<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Sábado: 8:00-18:00<br/>
						</p>
					</div>
				</div>
			</div>
		</article>
		<div className="divider-general"></div>
		{/* <!--======================================== Info. ========================================--> */}
		<article>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="text-center titles">
							Carné
						</h3>
						<br/>
						<p className="lead">
							<i className="fa fa-angle-double-right"></i> &nbsp; Edificio “I” oficina 375 tercer nivel<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Tel.: 2411 1800 ext. 1162, 1149<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Horario Normal: Martes: 17:30-20:30, Jueves: 17:30-20:30, Sábado: 9:00-12:00<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Horario en Inscripciones:<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Lunes – Viernes: 8:00-13:00, 14:00-21:00<br/>
							<i className="fa fa-angle-double-right"></i> &nbsp; Sábado: 9:00-14:00<br/>
						</p>
					</div>
				</div>
			</div>
		</article>
	</section>
            </div>
        );

    }

}

export default Secretaria;