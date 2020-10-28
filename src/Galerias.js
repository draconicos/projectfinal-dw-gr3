import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Galerias extends Component {

    render() {
        return (
            <div>
            {/* <!--======================================== Contenido de la pagina ========================================--> */}
	<section class="full-reset section-gallery-ins">
		{/* <!--======================================== Eventos del 2013 ========================================--> */}
		<article class="container">
			<h2 class="text-center"><i class="fa fa-calendar-o"></i> &nbsp; Eventos Año 2013</h2>
			<div class="row">
				{/* <!--======================================== Evento 1========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/1.jpg')} alt="Default"/>
						<p class="text-center"><strong>Acreditaciones</strong></p>
						
					</div>
				</div>
				{/* <!--======================================== Evento 2========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/2.jpg')} alt="Default"/>
						<p class="text-center"><strong>Acreditaciones</strong></p>
						
					</div>
				</div>
				{/* <!--======================================== Evento 3========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/1.jpg')} alt="Default"/>
						<p class="text-center"><strong>Acreditaciones</strong></p>
					</div>
				</div>
			</div>
		</article>
		<div class="divider-general"></div>
		{/* <!--======================================== Eventos del 2012 ========================================--> */}
		<article class="container">
			<h2 class="text-center"><i class="fa fa-calendar-o"></i> &nbsp; Eventos Año 2012</h2>
			<div class="row">
				{/* <!--======================================== Evento 1========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/123.jpg')} alt="Default"/>
						<p class="text-center"><strong>Primera Movilidad Estudiantil Odontología</strong></p>
					</div>
				</div>
				{/* <!--======================================== Evento 2========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/122.jpg')} alt="Default"/>
						<p class="text-center"><strong>Primera Movilidad Estudiantil Odontología</strong></p>
					</div>
				</div>
				{/* <!--======================================== Evento 3========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/121.jpg')} alt="Default"/>
						<p class="text-center"><strong>Primera Movilidad Estudiantil Odontología</strong></p>
					</div>
				</div>
				
			</div>
		</article>
		<div class="divider-general"></div>
		{/* <!--======================================== Eventos del 2010 ========================================--> */}
		<article class="container">
			<h2 class="text-center"><i class="fa fa-calendar-o"></i> &nbsp; Eventos Año 2010</h2>
			<div class="row">
				{/* <!--======================================== Evento 1 ========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/103.jpg')} alt="Default"/>
						<p class="text-center"><strong>Informativa</strong></p>
					</div>
				</div>
				{/* <!--======================================== Evento 2 ========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/102.jpg')} alt="Default"/>
						<p class="text-center"><strong>Informativo</strong></p>
					</div>
				</div>
				{/* <!--======================================== Evento 3 ========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/gallery/101.jpg')} alt="Default"/>
						<p class="text-center"><strong>Feria del Empleao</strong></p>
					</div>
				</div>
			</div>
		</article>
		<div class="divider-general"></div>
		{/* <!--======================================== Fotos de la institucion ========================================--> */}
		<article class="container">
			<h2 class="text-center"><i class="fa fa-picture-o"></i> &nbsp; Fotos Instalaciones</h2>
			<div class="row">
				{/* <!--======================================== Evento 1========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/img/umg3.jpg')} alt="Default"/>
						<p class="text-center"><strong>Campus</strong></p>
					</div>
				</div>
				{/* <!--======================================== Evento 2 ========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/img/umg2.jpg')} alt="Default"/>
						<p class="text-center"><strong>Campus</strong></p>
					</div>
				</div>
				{/* <!--======================================== Evento 3 ========================================--> */}
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="tile-gallery">
                    <img src={ require('./media/img/umg1.jpg')} alt="Default"/>
						<p class="text-center"><strong>Salones</strong></p>
					</div>
				</div>
			</div>
		</article>
	</section>
            </div>
        );

    }

}

export default Galerias;