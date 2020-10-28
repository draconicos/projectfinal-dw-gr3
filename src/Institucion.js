import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Institucion extends Component {

    render() {
        return (
            <div style={{backgroundColor: "#fff", padding: "20px 0"}}>
           {/*  <!--======================================== Contenido de la pagina ========================================--> */}
	<section className="full-reset" style={{backgroundColor: "#fff", padding: "20px 1px"}}>
		<div className="container">
			<div className="row">
				<section className="col-xs-12 col-sm-8 col-md-9 info-section-ins">
					{/* <!--======================================== Mision y vision ========================================--> */}
					<article className="full-reset" id="mision-vision">
						<div className="page-header" style={{marginBottom:"40px"}}>
						  <h1><i className="fa fa-graduation-cap"></i> &nbsp; Misión y Vision</h1>
						</div>
						<br/>
						<div className="panel panel-primary">
						  <div className="panel-heading lead text-center titles">Misión</div>
						  <div className="panel-body">
						    <p className="lead text-justify">	
							Formar, en niveles de excelencia académica y de acuerdo con las necesidades y demandas de la sociedad, profesionales, investigadores, técnicos y docentescientíficamente competentes, éticamente responsables y socialmente abiertos al cambio progresista, mediante el desarrollo integrado de la docencia, la investigación y el servicio a la comunidad, a fin que ésta tenga la oportunidad de participar de los beneficios de la ciencia, la tecnología y la cultura.
							</p>
						  </div>
						</div>
						<br/>
						<div className="panel panel-primary">
						  <div className="panel-heading lead text-center titles">Visión</div>
						  <div className="panel-body">
						    <p className="lead text-justify">
							Ser una institución de educación superior altamente competitiva, líder en su género, innovadora y creadora de conocimientos científicos y tecnológicos, en la que sus educandos alcancen una formación integral, armónica y potencien sus aptitudes y capacidades, en un ambiente de libertad y aceptación de los supremos valores del cristianismo. Y que sus egresados, sean capaces de asumir los desafíos del mundo contemporáneo y de una sociedad cambiante.
							</p>
						  </div>
						</div>	
					</article>
					{/* <!--======================================== Reseña historica ========================================--> */}
					<article className="full-reset" id="resena-ins">
						<div className="page-header" style={{marginBottom:"50px"}}>
						  <h1><i className="fa fa-university"></i> &nbsp; Reseña histórica</h1>
						</div>
						<h3 className="text-center titles text-uppercase">Antesedentes</h3>
						<p className="lead text-justify">
							El primer ciclo académico de la Universidad Mariano Gálvez, se inició el 2 de marzo de 1966 en acto solemne en el que el Rector de la Universidad de San Carlos de Guatemala, pronunció el discurso de salutación y el primer Rector de la naciente Universidad pronunció el discurso de inauguración.
							<br/>
							En 1968, la Universidad Mariano Gálvez abrió las carreras de Derecho, Economía, Ingeniería Civil, Administración de Empresas, Teología y Humanidades. Posteriormente se abrieron carreras cortas en Pedagogía y Artes Plásticas, Gerencia, Economía Aduanera y Visita Médica.
						</p>
						<br/>
					</article>
					{/* <!--======================================== Ubicacion geografica ========================================--> */}
					<article className="full-reset" id="ubicacion-ins">
						
						<br/>
						<h3 className="text-center titles"><i className="fa fa-map-marker"></i> &nbsp; Mapa de localización (RN-23, Jutiapa)</h3>
						<div id="mapa-ins" style={{ height: '100vh', width: '100%' }}>
						<div className="google-map">
						<Map google={this.props.google} initialCenter={{
            lat: 14.283093,
            lng: -89.897089
          }} zoom={14} style={{width: "860px", height: "500px"}}>
 
 <Marker onClick={this.onMarkerClick}
		 name={'RN-23, Jutiapa'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
	 <div>
	 </div>
 </InfoWindow>
</Map>
						</div></div>
					</article>
				</section>
				{/* <!--======================================== Navegacion fija lateral derecha ========================================--> */}
				<nav className="hidden-xs scroll-navigation-ins">
					<figure className="full-reset">
                    <img src={ require('./media/img/logo.png')} alt="Logo" className="img-responsive center-box"/>
					</figure>
					<h4 className="text-center titles">Información de la institución</h4>
					<ul className="list-unstyled full-reset">
						<li>Misión y Visión</li>
						<li>Reseña Histórica</li>
						<li>Ubicación Geofráfica</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>
            </div>
        );

    }

}
 
export default GoogleApiWrapper({
	apiKey: ("AIzaSyBg8qummVJlFY2b5KFcWoLLnK9pwZJbi7Q")
  })(Institucion)