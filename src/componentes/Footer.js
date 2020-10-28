import React, { Component } from 'react';
import fire from '../config/Fire';
import {Link} from 'react-router-dom';

class Footer extends Component {

	constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                	{/* <!--======================================== Pie de pagina ========================================--> */}
	<footer className="full-reset footer" style={{backgroundColor: "#000000"}}>
		<div className="full-reset" style={{padding: "15px 0"}}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-4">
						<h4 className="titles text-center">Navegar</h4>
						<ul className="list-unstyled links-footer">
							<li><Link to="/">Inicio</Link></li>
        <li><Link to="/institucion">Institución</Link></li>
        <li><Link to="/secretaria">Secretaría</Link></li>
        <li><Link to="/bachillers">Bachilleratos</Link></li>
        <li><Link to="/galerias">Galería</Link></li>
        <li><a className="btn btn-danger" onClick={this.logout}>Cerrar Sesión</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4">
						<h4 className="titles text-center">Contactenos</h4>
						<h4 className=" titles text-center">Tele-Fax: +(000)0000-0000 <br/>Correo Electrónico: correo@hotmail.com</h4>
					</div>
					<div className="col-xs-12 col-sm-4">
						<h4 className="titles subtitles-footer">Siguenos en</h4>
						<ul className="list-unstyled links-footer">
							<li><a href="https://www.facebook.com/Universidad-Mariano-Galvez-de-Guatemala-149110205157962" className="open-link-newTab"><i className="fa fa-facebook"></i> &nbsp; Facebook</a></li>
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-twitter"></i> &nbsp; Twitter</a></li>
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-google-plus"></i> &nbsp; Google+</a></li>
						</ul>
					</div>
					<div className="col-xs-12">
						<div className="full-reset footer-copyright"><i className="fa fa-copyright"></i> 2020 Grupo3 Desarrollo Web UMG</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
            </div>
        );

    }

}

export default Footer;