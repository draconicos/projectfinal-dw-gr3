import React, { Component } from 'react';
import fire from '../config/Fire';
import {Link} from 'react-router-dom';

class Header extends Component {
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
                {/* <!--======================================== Navegación ========================================--> */}
	<header className="full-reset header" style={{backgroundColor: "#000000"}}>
		{/* <!--======================================== Logo(Nombre INS) ========================================--> */}
		<div className="full-reset logo">
			<span className="hidden-lg hidden-md">UMG</span>
			<span className="hidden-xs hidden-sm">Universidad Mariano Gálvez</span>
		</div>
		{/* <!--======================================== Links de navegación ========================================--> */}
		<nav className="full-reset navigation" style={{backgroundColor: "#000000"}}>
			<ul className="full-reset list-unstyled">
				<li><Link to="/">Inicio</Link></li>
				<li><Link to="/institucion">Institución</Link></li>
				<li><Link to="/secretaria">Secretaría</Link></li>
				<li><Link to="/bachillers">Bachilleratos</Link></li>
				<li><Link to="/galerias">Galería</Link></li>
				<li><a className="btn btn-danger" onClick={this.logout}>Cerrar Sesión</a></li>
			</ul>
		</nav>
		{/* <!--======================================== Mega menu ========================================--> */}
		<div className="full-reset mega-menu">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-4">
						<span className="full-reset titles">Recursos educativos</span>
						<ul className="list-unstyled full-reset">
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-search"></i>&nbsp; Buscar en GOOGLE</a></li>
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-graduation-cap"></i>&nbsp; Plataforma (MOODLE)</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4">
						<span className="full-reset titles">Enlaces importantes</span>
						<ul className="list-unstyled full-reset">
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-university"></i>&nbsp; MINED</a></li>
							<li><a href="#!"><i className="fa fa-paw"></i>&nbsp; ARA-MACAO</a></li>
							<li><a href="#!"><i className="fa fa-globe"></i>&nbsp; JOVENES A.T.T</a></li>
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-flask"></i>&nbsp; UNIVERSIDADES</a></li>
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-gavel"></i>&nbsp; GOBIERNO</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4">
						<span className="full-reset titles">Archivos</span>
						<ul className="list-unstyled full-reset">
							<li><a href="#!"><i className="fa fa-star-o"></i>&nbsp; Promociones INS</a></li>
							<li><a href="#!" className="open-link-newTab"><i className="fa fa-file-text-o"></i>&nbsp; Const. de conducta</a></li>
							<li><a href="#!"><i className="fa fa-download"></i>&nbsp; Descargas</a></li>
						</ul>
					</div>
				</div>
			</div>
			<i className="fa fa-times-circle btm-mega-menu close-mega-menu fa-2x"></i>
		</div>
		{/* <!--======================================== Boton menu mobil ========================================--> */}
		<a href="#" className=" hidden-sm hidden-md hidden-lg pull-right button-menu-mobile show-close-menu-m"><i className="fa fa-ellipsis-v"></i></a>
	</header>
            </div>
        );

    }

}

export default Header;