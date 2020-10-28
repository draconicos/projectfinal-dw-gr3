import React, { Component } from 'react';

class Bachillers extends Component {

    render() {
        return (
            <div>
            {/* <!--======================================== contenido de la pagina ========================================--> */}
	<section class="full-reset" style={{backgroundColor: "#fff", padding: "20px 0"}}>
		<div class="container">
			<div class="row">
				<section class="col-xs-12 col-sm-8 col-md-9 info-section-ins">
					<p class="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia beatae eum molestias ipsa incidunt laboriosam odio adipisci velit in, sint id nobis nisi harum aliquid praesentium quos. Asperiores, laudantium aspernatur.
					</p>
					<br/>
					<h3><strong>Bachillerato Técnico Vocacional</strong></h3>
					<p class="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore optio fuga commodi rerum enim soluta, nesciunt eius reprehenderit reiciendis quae quaerat quia dolorem ullam, molestias quam sunt explicabo placeat consequatur!
					</p>
					{/* <!--======================================== General ========================================--> */}
					<article class="full-reset" id="b-general">	
						<div class="page-header" style={{marginBottom:"40px"}}>
						  <h2><i class="fa fa-graduation-cap"></i> &nbsp; Bachillerato General</h2>
						</div>
						<figure>
                        <img src={ require('./media/img/Banner_bachillerato_general.png')} alt="bachillerato general" class="img-responsive img-rounded center-box"/>
						</figure>
						<br/>
						<p class="lead">
							El Bachillerato General cuenta con una carga semanal de 42 horas de clase, y tiene una duración de 2 años, a continuación:
						</p>
						<div class="table-responsive">
						  <table class="table table-hover table-bordered text-center">
						    <thead>
						    	<tr class="info">
						    		<th class="text-center" rowspan="2">Asignaturas</th>
						    		<th class="text-center" colspan="2">Año de estudio</th>
						    	</tr>
						    	<tr class="info">
						    		<th class="text-center">Primer año</th>
						    		<th class="text-center">Segundo año</th>
						    	</tr>
						    </thead>
						    <tbody>
						    	<tr class="success">
						    		<td><strong>Del área básica</strong></td>
						    		<td><strong>Horas semanales</strong></td>
						    		<td><strong>Horas semanales</strong></td>
						    	</tr>
						    	<tr>
						    		<td>Lenguaje y Literatura</td>
						    		<td>5</td>
						    		<td>5</td>
						    	</tr>
						    	<tr>
						    		<td>Matemáticas</td>
						    		<td>6</td>
						    		<td>6</td>
						    	</tr>
						    	<tr>
						    		<td>Ciencias Naturales</td>
						    		<td>6</td>
						    		<td>6</td>
						    	</tr>
						    	<tr>
						    		<td>Estudios Sociales y Cívica</td>
						    		<td>5</td>
						    		<td>5</td>
						    	</tr>
						    	<tr>
						    		<td>Idioma Extranjero</td>
						    		<td>3</td>
						    		<td>3</td>
						    	</tr>
						    	<tr>
						    		<td>Informática</td>
						    		<td>3</td>
						    		<td>3</td>
						    	</tr>
						    	<tr>
						    		<td>Curso de Habilitación Laboral</td>
						    		<td>3</td>
						    		<td>3</td>
						    	</tr>
						    	<tr>
						    		<td>Orientación para la vida</td>
						    		<td>3</td>
						    		<td>3</td>
						    	</tr>
						    	<tr>
						    		<td>Seminarios</td>
						    		<td>3</td>
						    		<td>3</td>
						    	</tr>
						    	<tr>
						    		<td>Orientación vocacional</td>
						    		<td>3</td>
						    		<td>3</td>
						    	</tr>
						    	<tr>
						    		<td>Educación Física</td>
						    		<td>2</td>
						    		<td>2</td>
						    	</tr>
						    	<tr class="danger">
						    		<td>TOTAL</td>
						    		<td>42</td>
						    		<td>42</td>
						    	</tr>
						    </tbody>
						  </table>
						</div>
					</article>
					{/* <!--======================================== Asistencia administrativa ========================================--> */}
					<article class="full-reset" id="b-asistente">
						<div class="page-header" style={{marginBottom:"40px"}}>
						  <h2><i class="fa fa-briefcase"></i> &nbsp; Bachillerato Técnico Comercial, opción: Asistencia Administrativo</h2>
						</div>
						<figure>
                        <img src={ require('./media/img/Banner_bachillerato_asistente.png')} alt="bachillerato asistente" class="img-responsive img-rounded center-box"/>
						</figure>
						<br/>
						<p class="lead">
							El propósito de esta opción del bachillerato comercial es formar en el educando competencias en la practica relaciones públicas, asistencia de jefatura; redactar, recibir y enviar correspondencia; archivar documentos, realizar inventarios, realizar registros contables y legales, controlar efectivo, controlar materiales de oficina,  desarrollar un estilo de vida laboral.
						</p>
						<p class="lead">
							Los graduados se pueden incorporar al sistema productivo como asistente de gerencia de empresas, asistencia de presidencia de empresas, asistente de ejecutivo financiero o crediticio, asistente del área de comunicaciones, asistente del área  de relaciones públicas y otros.
						</p>
						<br/>
						<h3 class="titles">PERFIL DEL ESTUDIANTE</h3>
						<p class="lead">
							En esta opción tienes la oportunidad de prepararte y adquirir ingresos económicos a corto plazo, ya que se cuenta con un currículum eficaz y docentes capacitados con un alto grado de conocimiento, comprometidos a compartir.
						</p>
						<p class="lead">
							Si deseas ingresar a esta especialidad de bachillerato debes poseer el siguiente perfil:
						</p>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Responsabilidad</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Puntualidad</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Ética Profesional</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Estética</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Deseos de Superación</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Actitud de servicio</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Intereses profesionales</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Orden y aseo personal</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Vocación</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Creatividad</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Empatía</li>
						</ul>
						<br/>
						<p class="lead">
							Esta es tu mejor opción. En los períodos de estudios de este bachillerato técnico cursarás asignaturas como Tecnología, Orientación para la Vida, Informática, Laboratorio de Creatividad, entre otras. Adquirirás habilidades como:
						</p>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Redacción de Correspondencia</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Organización de la oficina</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Administración de pequeñas y medianas empresas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Contabilidad</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Innovaciones tecnológicas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Manejo de archivos</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Relaciones humanas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Elaboración de proyectos</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Protocolo</li>
						</ul>
						<br/>
						<p class="lead">Actividades extracurriculares:</p>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Elaboración de murales</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Celebraciones</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Preparación de reuniones de padres de familia</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Preparación de asambleas</li>
						</ul>
						<br/>
						<p class="lead">
							A continuación se detallan las asignaturas y módulos de la especialidad que se deben cursar en este bachillerato:
						</p>
						<br/>
						<h3 class="titles text-center">Primer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>3</td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Orientación Vocacional</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Educación Física</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Organización del espacio físico de la oficina
										</td>
										<td rowspan="8">18</td>
									</tr>
									<tr>
										<td>Mantenimiento y uso eficiente de recursos técnicos</td>
									</tr>
									<tr>
										<td>Gestión y administración de microempresas y auto empleo</td>
									</tr>
									<tr>
										<td>Redacicción de correspondencia y documentos varios</td>
									</tr>
									<tr>
										<td>Creación y manejo de base de datos</td>
									</tr>
									<tr>
										<td>Diagramación y procesamiento de documentos</td>
									</tr>
									<tr>
										<td>Recepción, registro y codificación de documentos comerciales</td>
									</tr>
									<tr>
										<td>Procesamiento de planillas de sueldos y retenciones</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>49</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/>
						<h3 class="titles text-center">Segundo año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>3</td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Orientación Vocacional</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Educación Física</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Mantenimiento y uso eficiente de recursos tecnológicos
										</td>
										<td rowspan="8">18</td>
									</tr>
									<tr>
										<td>Organización de reuniones y elaboración de agendas y memorias</td>
									</tr>
									<tr>
										<td>Elaboración de correspondencia y otros documentos</td>
									</tr>
									<tr>
										<td>Organización de viajes de trabajo, pasantías y otras actividades</td>
									</tr>
									<tr>
										<td>Recepción y envío de correspondencia por correo electrónico e internet</td>
									</tr>
									<tr>
										<td>Control de existencias y adquisición de insumos</td>
									</tr>
									<tr>
										<td>Gestión y administración de una pequeña empresa</td>
									</tr>
									<tr>
										<td>Elaboración de conciliaciones bancarias</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>49</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/>
						<h3 class="titles text-center">Tercer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Mantenimiento y uso eficiente de recursos digitales
										</td>
										<td rowspan="7">18</td>
									</tr>
									<tr>
										<td>Gestión de información y atención al público</td>
									</tr>
									<tr>
										<td>Elaboración de correspondencia y otros documentos conforme a normas jurídicas</td>
									</tr>
									<tr>
										<td>Administración de fondos de caja chica</td>
									</tr>
									<tr>
										<td>Comunicaciones sociales internas y externas</td>
									</tr>
									<tr>
										<td>Comunicaciones internacionales bilingües</td>
									</tr>
									<tr>
										<td>Gestión y administración de medianas y grandes empresas</td>
									</tr>
									<tr>
										<td>Proyectos Vinculantes</td>
										<td>6</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>26</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
					{/* <!--======================================== Asistencia contable ========================================--> */}
					<article class="full-reset" id="b-contador">
						<div class="page-header" style={{marginBottom:"40px"}}>
						  <h2><i class="fa fa-calculator"></i> &nbsp; Bachillerato Técnico Comercial, opción: Asistencia Contable</h2>
						</div>
						<figure>
                        <img src={ require('./media/img/Banner_bachillerato_contador.png')} alt="bachillerato contador" class="img-responsive img-rounded center-box"/>
						</figure>
						<br/>
						<p class="lead">
							Los jóvenes y las jóvenes que se forman en esta opción de bachillerato comercial adquieren las competencias en registro de transacciones contables de empresas, control de flujo de efectivo, cumplimiento de aspectos legales, control de  existencia de inventarios, control de cuentas por cobrar, control de activos fijos, control de cuentas por pagar, análisis de estados financieros, control de las inversiones y manejo de equipo de computo.
						</p>
						
						<p class="lead">
							Los graduados se pueden incorporar al mundo productivo como auxiliares de contabilidad, control de inventarios, control de fondo circulante, archivo de documentos contables, caja, digitación de asuntos contables, venta de seguros empresariales y otros.
						</p>
						<br/>
						<h3 class="titles">PERFIL DEL ESTUDIANTE</h3>
						<p class="lead">
							Si te interesa ser un estudiante de contaduría, aquí te mostramos algunas de las características o habilidades con las que debes de contar y desarrollar para tener éxito en esta área técnica.
						</p>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Haber aprobado el 9° grado con una nota promedio de 7 en las asignaturas básicas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Hábitos de estudio</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Hábito por la lectura y buena ortografía</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Facilidad para el manejo de las Matemáticas (Artimética y Estadística)</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Facilidad para comunicarse adecuadamente en forma oral y escrita</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Disposición para el trabajo individual y en equipo</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Capacidad de observación, análisis y síntesis</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Tolerancia por la solución de problemas contables, administrativos y socioeconómicos</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Tener conocimientos básicos de informática</li>
						</ul>
						<br/>
						<p class="lead">
							A continuación se detallan las asignaturas y módulos de la especialidad que se deben cursar en este bachillerato:
						</p>
						<br/>
						<h3 class="titles text-center">Primer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>3</td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Orientación Vocacional</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Educación Física</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Manejo básico de equipo de computación
										</td>
										<td rowspan="7">18</td>
									</tr>
									<tr>
										<td>Manejo y archivo de documentos contables</td>
									</tr>
									<tr>
										<td>Registro de operaciones contables</td>
									</tr>
									<tr>
										<td>Registro de transacciones contables</td>
									</tr>
									<tr>
										<td>Elaboración de estados financieros</td>
									</tr>
									<tr>
										<td>Control de flujo de efectivo</td>
									</tr>
									<tr>
										<td>Elaboración de documentos para pago de obligaciones laborales</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>49</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/>
						<h3 class="titles text-center">Segundo año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>3</td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Orientación Vocacional</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Educación Física</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Inscripción de una empresa en las entidades del estado
										</td>
										<td rowspan="7">18</td>
									</tr>
									<tr>
										<td>Elaboración de declaración formal</td>
									</tr>
									<tr>
										<td>Control de existencias</td>
									</tr>
									<tr>
										<td>Control de existencias de procesos productivos</td>
									</tr>
									<tr>
										<td>Control de ventas al crédito</td>
									</tr>
									<tr>
										<td>Clasificación y archivo de clientes y de documentos mercantiles</td>
									</tr>
									<tr>
										<td>Recuperación de créditos y tratamiento de cuentas incobrables</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>49</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/>
						<h3 class="titles text-center">Tercer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Administración de activos fijos e intangibles
										</td>
										<td rowspan="5">18</td>
									</tr>
									<tr>
										<td>Control de cuentas por pagar</td>
									</tr>
									<tr>
										<td>Elaboración de presupuestos</td>
									</tr>
									<tr>
										<td>Análisis e interpretación de estados financieros</td>
									</tr>
									<tr>
										<td>Control de inversiones y comercio exterior</td>
									</tr>
									<tr>
										<td>Proyectos Vinculantes</td>
										<td>6</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>26</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
					{/* <!--======================================== Electrotecnia ========================================--> */}
					<article class="full-reset" id="b-electro">
						<div class="page-header" style={{marginBottom:"40px"}}>
						  <h2><i class="fa fa-bolt"></i> &nbsp; Bachillerato Técnico Industrial, opción: Electrotécnia</h2>
						</div>
						<figure>
                        <img src={ require('./media/img/Banner_bachillerato_electro.png')} alt="bachillerato electrotecnia" class="img-responsive img-rounded center-box"/>
						</figure>
						<br/>
						<p class="lead">
							Los y las estudiantes de esta opción del bachillerato industrial adquieren durante su formación las competencias necesarias para realizar instalaciones eléctricas residenciales, comerciales, industriales, de líneas y subestaciones de distribución; aplicar mantenimiento a sistemas de control electrónico, realizar instalaciones de líneas y sub estaciones de distribución; instalación y reparación de sistemas de refrigeración y aire acondicionado; y aplicar mantenimiento de líneas eléctricas
						</p>
						<br/>
						<p class="lead">
							Los graduados en este bachillerato se pueden incorporar al mundo laboral en mantenimiento de luminarias, plantas generadoras y motores eléctricos; Instalación de circuitos residenciales, industriales y comerciales; instalación de sistemas de refrigeración y aire acondicionado, venta de equipo electrónico y otros.
						</p>
						<br/><br/>
						<h3 class="titles">PEFIL DEL ESTUDIANTE</h3>
						<p class="lead">El estudiante en la especialidad de electrotecnia debe poseer:</p>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; La capacidad de formular y desarrollar proyectos eléctricos</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; La capacidad de seleccionar y utilizar correctamente las herramientas y equipos de medición en la instación y mantenimiento de sistemas eléctrico y de paneles de control</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; El conocimiento para supervisar y montar sistemas eléctrico de fuerza e iluminación y distribución</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; La actitud y el conocimiento para la aplicación de normas de seguridad industrial para protección de las personas, instalaciones y equipo eléctrico, así como el medio ambiente</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; El conocimiento para utilizar programas eléctricos y otros software para planear alternativas de soluciones eficientes en el desarrollo de proyectos eléctricos</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; El conocimiento para analizar el funcionamiento de un sistema de control automático que involucre elementos eléctricos, eletromecánicos y electrónicos</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; La capacidad para construir, reparar y dar mantenimiento a maquinas técnicas y/o electromecánicas. Aplicando normás técnicas de construcción</li><br/>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; El conocimiento necesario para optar a la prueba para la licencia de electricista otorgada por la SIGET</li><br/>
						</ul>
						<br/><br/>
						<h3 class="titles">PODRAS TRABAJAR:</h3>
						<p class="lead">
							El Bachiller Técnico Industrial, opción: Electrotecnia está capacitado para incorporarse al sector empresarial que se dedican a la instalación y mantenimiento de sistemas eléctricos, ya sean éstos del sector industrial, comercial o residencial. Así como iniciar una empresa dedicada a estos tipos de servicios.
						</p>
						<br/><br/>
						<h3 class="titles">HERRAMIETNAS Y OTROS RECURSOS:</h3>
						<p class="lead">
							El estudiante de Electrotecnia deberá contar al menos con un Kit Básico de herramientas, el cual le servirá para la realizacipn de los proyectos dentro y fuera de la institución, donde aplica sus conocimientos adquiridos.
						</p>
						<br/><br/>
						<h3 class="titles">Este Kit Básico consta de:</h3>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 2 tenazas de electricista</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 2 desarmadores (1 plano y 1 cruz)</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 1 navaja de electricista</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 1 gabacha color gris</li>
						</ul>
						<br/><br/>
						<p class="lead">
							A continuación se detallan las asignaturas y módulos de la especialidad que se deben cursar en este bachillerato:
						</p>
						<br/>
						<h3 class="titles text-center">Primer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>3</td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Orientación Vocacional</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Educación Física</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Instalaciones Eléctricas Residenciales
										</td>
										<td rowspan="6">18</td>
									</tr>
									<tr>
										<td>Instalaciones de tableros y red a tierra</td>
									</tr>
									<tr>
										<td>Medición de magnitudes eléctrica</td>
									</tr>
									<tr>
										<td>Trabajo con herramientas de corte</td>
									</tr>
									<tr>
										<td>Aplicación de electrónica básica</td>
									</tr>
									<tr>
										<td>Elaboración de proyectos de instalaciones eléctricas residenciales</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>49</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/><br/>
						<h3 class="titles text-center">Segundo año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>3</td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Orientación Vocacional</td>
										<td>2</td>
									</tr>
									<tr>
										<td>Educación Física</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Construcción, conexión y prueba de transformadores
										</td>
										<td rowspan="6">18</td>
									</tr>
									<tr>
										<td>Iluminación Comercial (luminotecnia)</td>
									</tr>
									<tr>
										<td>Reparación de electrodomésticos</td>
									</tr>
									<tr>
										<td>Uso y conexión de equipo de soldadura de arco</td>
									</tr>
									<tr>
										<td>Construcción de motores monofásicos</td>
									</tr>
									<tr>
										<td>Control electrónico de la velocidad del motor</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>49</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/><br/>
						<h3 class="titles text-center">Tercer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Del área básica</strong></td>
									</tr>
									<tr>
										<td>Informática</td>
										<td>2</td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Módulos</strong></td>
									</tr>
									<tr>
										<td>
											Instalaciones eléctricas industriales
										</td>
										<td rowspan="7">18</td>
									</tr>
									<tr>
										<td>Instalaciones eléctricas de alta tensión</td>
									</tr>
									<tr>
										<td>Sistemas de control automático</td>
									</tr>
									<tr>
										<td>Fabricación, diagnóstico y reparación de maquinaria y/o equipo electromecánico</td>
									</tr>
									<tr>
										<td>Mantenimiento preventivo y correctivo de sistemas de refrigeración</td>
									</tr>
									<tr>
										<td>Mantenimiento preventivo y correctivo de sistemas de aire acondicionado</td>
									</tr>
									<tr>
										<td>Gestión y administración de una empresa de electrotécnia</td>
									</tr>
									<tr>
										<td>Proyectos Vinculantes</td>
										<td>6</td>
									</tr>
									<tr class="danger">
										<td><strong>TOTAL</strong></td>
										<td><strong>26</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
					{/* <!--======================================== Infraestructura tecnológica ========================================--> */}
					<article class="full-reset" id="b-informatica">
						<div class="page-header" style={{marginBottom:"40px"}}>
						  <h2><i class="fa fa-desktop"></i> &nbsp; Bachillerato Técnico Industrial, opción: Infraestructura Tecnológica y Servicios Informáticos</h2>
						</div>
						<figure>
                        <img src={ require('./media/img/Banner_bachillerato_informatica.png')} alt="bachillerato informatica" class="img-responsive img-rounded center-box"/>
						</figure>
						<br/>
						<p class="lead">
							Los y las estudiantes de esta opción del bachillerato industrial adquieren durante su formación aprenderán a desarrollar competencias para diseñar, instalar y dar mantenimiento correctivo y preventivo a la infraestructura tecnológica e implementar y mantener servicios informáticos en el sector socioeconómico del país, mediante la investigación y aplicación de tecnologías de la información y comunicaciones emergentes, respetando marcos legales, derechos de autor y estándares internacionales de mejores prácticas y aplicación de la mejora continua.
						</p>
						<br/><br/>
						<h3 class="titles">PERFIL DEL ESTUDIANTE:</h3>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Capacidad para buscar, procesar y analizar información procedente de  fuentes diversas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Capacidad de comunicarse en forma oral y escrita</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Capacidad de realizar tareas en grupo, con actitud solidaria y tolerante</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Capacidad para utilizar herramientas ofimáticas como procesadores de  texto y hojas electrónicas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Capacidad para realizar investigación documental en internet mediante  motores de búsqueda</li>
						</ul>
						<br/><br/>
						<h3 class="titles">CAMPOS DE ACCIÓN:</h3>
						<p class="lead">
							El Bachiller Técnico en Infraestructura Tecnológica y Servicios Informáticos, es un técnico de nivel medio, con competencias para incorporarse a los procesos de mantenimiento de equipo de computación personal, infraestructura de servidores, Desarrolla actividades que le permiten desenvolverse, de forma autónoma, en las áreas de las comunicaciones como: redes LAN, WAN e Intranet, para poder insertarse al mercado de trabajo caracterizado por los siguientes tipos de empleos como: técnico de mantenimiento de equipo de computación personal, técnico en administración de redes, técnico en ventas de equipo informático y técnico en administración de servidores y backups.
						</p>
						<br/><br/>
						<h3 class="titles">PERFIL DEL EGRESADO:</h3>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Estructura problemas mediante algoritmos con pseudocódigo y diagramas de flujo</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Emprende micro-empresa de tecnología</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Utiliza herramientas de desarrollo de software para construir una aplicación informática para la solución a un problema determinado</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Instala y configura redes informáticas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Instala y configura redes de voz</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Aplica políticas y procedimientos de seguridad informática</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Utiliza herramientas de gestión de datos para la consulta de información almacenada en sistemas de bases de datos</li>
						</ul>
						<br/><br/>
						<h3 class="titles">HERRAMIETNAS Y OTROS RECURSOS:</h3>
						<p class="lead">
							El estudiante de Infraestructura Tecnológica deberán contar al menos con un Kit Básico de herramientas, el cual le servirá para la realizacipn de los proyectos dentro y fuera de la institución, donde aplica sus conocimientos adquiridos.
						</p>
						<h3 class="titles">Este Kit Básico consta de:</h3>
						<ul class="list-unstyled lead">
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 1 Multimetro</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 1 Ponchadora RJ45 y RJ11</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; 1 Punzadora</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Computadora Personal</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Certificadores de Cable UTP</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Tenazas</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Desarmadores</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Unidades de almacenamiento portátil</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; CDs y/o DVDs</li>
							<li><i class="fa fa-angle-double-right"></i>&nbsp; Consumibles (Contac Cleaner, Aire Comprimido, Espuma limpiadora, Cable UTP 5e, Conectores RJ45, entre otros)</li>
						</ul>
						<br/>
						<p class="lead">
							A continuación se detallan las asignaturas y módulos de la especialidad que se deben cursar en este bachillerato:
						</p>
						<br/>
						<h3 class="titles text-center">Primer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Informática educativa</td>
										<td>2</td>
									</tr>
									<tr class="danger">
										<td><strong>Subtotal horas clase por semana</strong></td>
										<td><strong>29</strong></td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Área técnica</strong></td>
									</tr>
									<tr>
										<td>
											Orientación de estudiantes al proceso educativo del primer año de estudio
										</td>
										<td rowspan="9">18</td>
									</tr>
									<tr>
										<td>Instalación y mantenimiento de sistemas eléctricos y de redes informáticas</td>
									</tr>
									<tr>
										<td>Instalación y mantenimiento de equipo ofimático</td>
									</tr>
									<tr>
										<td>Instalación y mantenimiento de aplicaciones ofimáticas</td>
									</tr>
									<tr>
										<td>Utilización de herramientas de diseño multimedia</td>
									</tr>
									<tr>
										<td>Análisis de sistemas utilizando lógica de programación</td>
									</tr>
									<tr>
										<td>Lectura de documentos en inglés sobre tecnologías de la información y las comunicaciones</td>
									</tr>
									<tr>
										<td>Emprendedurismo colectivo</td>
									</tr>
									<tr>
										<td>Proyecto tecnológico sobre ofimática y/o diseño multimedia</td>
									</tr>
									<tr class="danger">
										<td><strong>Total horas clase por semana</strong></td>
										<td><strong>47</strong></td>
									</tr>
									<tr>
										<td colspan="2">Competencias clave (con aplicación al área técnica)</td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/><br/>
						<h3 class="titles text-center">Segundo año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Área básica</strong></td>
									</tr>
									<tr>
										<td>Lenguaje y Literatura</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Matemáticas</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Ciencias Naturales</td>
										<td>6</td>
									</tr>
									<tr>
										<td>Estudios Sociales y Cívica</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Idioma Extranjero</td>
										<td>5</td>
									</tr>
									<tr>
										<td>Orientación para la vida</td>
										<td>2</td>
									</tr>
									<tr class="danger">
										<td><strong>Subtotal horas clase por semana</strong></td>
										<td><strong>29</strong></td>
									</tr>
									<tr class="success">
										<td colspan="2"><strong>Área técnica</strong></td>
									</tr>
									<tr>
										<td>
											Orientación de estudiantes al proceso educativo del segundo año de estudio
										</td>
										<td rowspan="9">18</td>
									</tr>
									<tr>
										<td>Desarrollo de aplicaciones de software para la solución de problemas</td>
									</tr>
									<tr>
										<td>Instalación y mantenimiento de redes informáticas</td>
									</tr>
									<tr>
										<td>Instalación y mantenimiento de redes inalámbricas y de voz</td>
									</tr>
									<tr>
										<td>Supervisión de la aplicación de estándares internacionales de TI</td>
									</tr>
									<tr>
										<td>Gestión de la seguridad informática</td>
									</tr>
									<tr>
										<td>Lectura y escritura de documentos en inglés sobre redes y seguridad informática</td>
									</tr>
									<tr>
										<td>Diseño de planes de negocio en asociatividad cooperativa</td>
									</tr>
									<tr>
										<td>Proyecto tecnológico sobre redes inalámbricas o seguridad informática</td>
									</tr>
									<tr class="danger">
										<td><strong>Total horas clase por semana</strong></td>
										<td><strong>47</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
						<br/><br/>
						<h3 class="titles text-center">Tercer año</h3>
						<div class="table-responsive">
							<table class="table table-hover table-bordered text-center">
								<thead>
									<tr class="info">
							    		<th class="text-center">Asignaturas</th>
							    		<th class="text-center">Horas semanales</th>
							    	</tr>
								</thead>
								<tbody>
									<tr class="success">
										<td colspan="2"><strong>Área técnica</strong></td>
									</tr>
									<tr>
										<td>
											Orientación de estudiantes al proceso educativo del tercer año de estudio
										</td>
										<td rowspan="9">30</td>
									</tr>
									<tr>
										<td>Gestión de bases de datos</td>
									</tr>
									<tr>
										<td>Soporte a sistema de información empresariales (ERP)</td>
									</tr>
									<tr>
										<td>Operación y monitoreo de centros de datos</td>
									</tr>
									<tr>
										<td>Gestión de servicios de red y aplicaciones empresariales</td>
									</tr>
									<tr>
										<td>Auditoría de sistemas de información</td>
									</tr>
									<tr>
										<td>Conversación en inglés sobre auditoría de centros de datos y sistemas</td>
									</tr>
									<tr>
										<td>Puesta en marcha de la microempresa en asociatividad cooperativa</td>
									</tr>
									<tr>
										<td>Proyecto tecnológico de automatización y monitoreo de centros de datos</td>
									</tr>
									<tr class="danger">
										<td><strong>Total horas clase por semana</strong></td>
										<td><strong>30</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
				</section>
				{/* <!--======================================== Navegacion fija lateral derecha ========================================--> */}
				<nav class="hidden-xs scroll-navigation-ins">
					<figure class="full-reset">
                    <img src={ require('./media/img/logo.png')} alt="Logo" class="img-responsive center-box"/>
					</figure>
					<h4 class="text-center titles">Bachilleratos</h4>
					<ul class="list-unstyled full-reset">
						<li data-href="#b-general">General</li>
						<li data-href="#b-asistente">Asistencia Administrativa</li>
						<li data-href="#b-contador">Asistencia Contable</li>
						<li data-href="#b-electro">Electrotecnia</li>
						<li data-href="#b-informatica">Infraestructura Tecnológica</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>
            </div>
        );

    }

}

export default Bachillers;