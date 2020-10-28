import React, { Component } from 'react';
import bkg from './media/img/font-index.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                {/* <!--======================================== Boton ir arriba ========================================--> */}
	
	
	{/* <!--======================================== Logo & Lema ========================================--> */}
	<section className="full-reset font-cover" style={{backgroundImage: "url(" + bkg + ")"}}>
		<div className="full-reset" style={{height: "100%", backgroundColor: "rgba(255,255,255,.6)", padding: "60px 0"}}>
			<h1 className="text-center titles">UMG</h1>
			<figure className="Logo-Ins-Index">
				<img src={ require('./media/img/logo.png') } alt="Logo" className="img-responsive"/>
			</figure>
			<p className="lead text-center">
				"y conoceréis la verdad, y la verdad os hará libres." -Juan 8:32
			</p>
		</div>
	</section>
	<div className="divider-general"></div>
	{/* <!--======================================== Video corto & carrusel========================================--> */}
	<section className="full-reset" style={{backgroundColor: "rgb(242, 242, 242)", padding: "40px 0"}}>
		<div className="container">
			<h2 className="text-center titles">Instalaciones de la institución</h2>
			<br/>
			{/* <!--======================================== Carrusel ========================================--> */}
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-sm-push-6">
					<h3 className="text-center titles">Fotos Instalaciones</h3>
					<p className="lead">
						Puedes visitarnos en nuestros campus, todo esta hecho y pensado para su confort y comodidad.
					</p>
					<i className="fa fa-picture-o icon-index hidden-xs hidden-sm"></i>
				</div>
				<div className="col-xs-12 col-sm-6 col-sm-pull-6">
					<div id="slider-ins" className="carousel slide" data-ride="carousel">
					  {/* <!-- Indicadores --> */}
					  <ol className="carousel-indicators">
					    <li data-target="#slider-ins" data-slide-to="0" className="active"></li>
					    <li data-target="#slider-ins" data-slide-to="1"></li>
					    <li data-target="#slider-ins" data-slide-to="2"></li>
					  </ol>

					  {/* <!-- Imagenes --> */}
					  <div className="carousel-inner" role="listbox">
						
						{/* <!-- Primera imagen --> */}
					    <div className="item active">
					      <img src={ require('./media/img/umg1.jpg') }  alt="Default"/>
					      <div className="carousel-caption">
					        Lorem ipsum dolor sit amet
					      </div>
					    </div>
						
						{/* <!-- Segunda imagen --> */}
					    <div className="item">
					      <img  src={ require('./media/img/umg3.jpg')} alt="Default"/>
					      <div className="carousel-caption">
					        Lorem ipsum dolor sit amet
					      </div>
					    </div>
						
						{/* <!-- Tercera imagen --> */}
					    <div className="item">
					      <img src={ require('./media/img/umg2.jpg')} alt="Default"/>
					      <div className="carousel-caption">
					        Lorem ipsum dolor sit amet
					      </div>
					    </div>
					    
					  </div>

					  {/* <!-- Controles --> */}
					  <a className="left carousel-control" href="#slider-ins" role="button" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="right carousel-control" href="#slider-ins" role="button" data-slide="next">
					    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
				</div>
			</div>
			<br/>
			<div className="divider-general"></div>
			{/* <!--======================================== Video ========================================--> */}
			<div className="row">
				<div className="col-xs-12 col-sm-6">
					<h3 className="text-center titles">Video Instalaciones</h3>
					<p className="lead">Tenemos las mejores infraestructuras, materiales y tecnologías para tu beneficio.</p>
					<i className="fa fa-film icon-index hidden-xs hidden-sm"></i>
				</div>
				<div className="col-xs-12 col-sm-6">
				<video width="100%" height="100%" controls style={{paddingTop: "50px"}}>
      <source src={require('./media/video/Introl.mp4')} type="video/mp4"/>
     </video>
				</div>
			</div>
		</div>
	</section>
	<div className="divider-general"></div>
	{/* <!--======================================== Acontecer institucional ========================================--> */}
	<section className="events-ins">
		<div className="container-fluid">
			<h2 className="text-center titles">Las Mejores Carreras</h2>
			<br/>
			<div className="row">
				{/* <!--======================================== Articulo 1 ========================================--> */}
				<article className="col-xs-12 col-sm-6 col-md-4">
					<div className="thumbnail">
				      <img src={ require('./media/img/hm1.jpg')} alt="IMG" className="img-responsive img-rounded"/>
				      <div className="caption">
				        <h3 className="text-center">Confort y comodidad en nuestras instalaciones para un mejor aprendizaje.</h3>
				      </div>
				    </div>
				</article>
				{/* <!--======================================== Articulo 2 ========================================--> */}
				<article className="col-xs-12 col-sm-6 col-md-4">
					<div className="thumbnail">
				      <img src={ require('./media/img/hm2.jpg')} alt="IMG" className="img-responsive img-rounded"/>
				      <div className="caption">
				        <h3 className="text-center">Contamos con variedad de carreras para una variedad de profesionales.</h3>
				      </div>
				    </div>
				</article>
			{/* 	<!--======================================== Articulo 3 ========================================--> */}
				<article className="col-xs-12 col-sm-6 col-md-4">
					<div className="thumbnail">
				      <img src={ require('./media/img/hm3.jpg')} alt="IMG" className="img-responsive img-rounded"/>
				      <div className="caption">
				        <h3 className="text-center">Estamos en constante cambio siempre para brindar la mejor educación.</h3>
				       </div>
				    </div>
				</article>
			</div>
		</div>
	</section>
	<div className="divider-general"></div>
	{/* <!--======================================== Enlaces importantes ========================================--> */}
	<section className="text-center important-links-index">
		<h2 className="titles">Sitios y enlaces importantes</h2>

		<a href="#!" className="open-link-newTab">
			<i className="fa fa-graduation-cap"></i>
			<p>MOODLE</p>
		</a>

		<a href="#!" className="open-link-newTab">
			<i className="fa fa-paw"></i>
			<p>ARA-MACAO</p>
		</a>

		<a href="#!" className="open-link-newTab">
			<i className="fa fa-globe"></i>
			<p>JOVENES A.T.T</p>
		</a>
		<a href="#!" className="open-link-newTab">
			<i className="fa fa-file-text-o"></i>
			<p>Cons.conducta</p>
		</a>

		<a href="#!" className="open-link-newTab">
			<i className="fa fa-download"></i>
			<p>Descargas</p>
		</a>
	</section>

            </div>
        );

    }

}

export default Home;
