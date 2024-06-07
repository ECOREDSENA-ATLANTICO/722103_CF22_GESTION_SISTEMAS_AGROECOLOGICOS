<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estudio Administrativo

    .row.my-4.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Imagen decorativa')

      .col-lg-7
        p El objetivo del estudio administrativo es generar herramientas para poder realizar una adecuada administración del proyecto agropecuario que se desee ejecutar, al igual que los estudios de demanda, técnico, financiero, legal y ambiental, tiene alta relevancia, aquí también se plasma la esencia, las causas y lo que se quiere conseguir en la ejecución del proyecto productivo, además genera orden en los procesos, junto con el registro de las diferentes actividades realizadas día a día en la explotación agropecuaria.
        .row.align-items-center
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='Imagen decorativa' width="100px" height="100px")
          .col-lg-9
            p En la implementación del aspecto administrativo para el proyecto agropecuario es importante iniciar con un elemento administrativo que es la planeación estratégica, encargada de definir el rumbo y las acciones a realizar para alcanzar los objetivos que se plantean en el proyecto agropecuario.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.1 Planeación estratégica

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3.svg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 El propósito de la planeación estratégica es identificar para donde desea que va a ir su empresa, usando las tendencias del mercado, sociales y económicas; luego, comienza el proceso para generar la misión, visión, objetivos, políticas, estrategias, valores, etc, a continuación se relaciona una breve descripción de cada uno:

    LineaTiempoD.color-acento-contenido.my-5
      .row(numero="1" titulo="Misión")
        .col-md-6.mb-4.mb-md-0
          p Aquí se establece el propósito o función que se pretende cumplir con el proyecto, ejemplo: ser una empresa reconocida como líder en la producción y comercialización de mojarra roja, tanto a nivel nacional como internacional.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img4.svg', alt='Imagen decorativa')

      .row(numero="2" titulo="Visión")
        .col-md-6.mb-4.mb-md-0
          p Para indicar el rumbo de la empresa con el fin de guiar las políticas generadas desde la gerencia y sus colaboradores (operario, supervisores, técnicos, personal administrativo). Ejemplo, comprometernos en ser la empresa agropecuaria líder en Colombia, para lograrlo invertiremos en investigación, desarrollo del capital humano y productivo para alcanzar los resultados financieros establecidos, sin perder de vista la sostenibilidad ambiental de la región.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imagen decorativa')

      .row(numero="3" titulo="Objetivo")
        .col-md-6.mb-4.mb-md-0
          p Son metas propuestas para lograr lo que se pretende con la creación y puesta en marcha del proyecto, se caracterizan por ser medibles o cuantificables, detallados, claros, fáciles de entender, son limitados en el tiempo y deben poder realizarse por las personas que trabajan en la organización. Ejemplo, producir mensualmente 2000 kilos de plátano hartón de primera calidad durante los dos primeros años del proyecto productivo.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imagen decorativa')

      .row(numero="4" titulo="Políticas")
        .col-md-6.mb-4.mb-md-0
          p Generan lineamientos para el trabajo en la empresa agropecuaria, la política es generada desde la gerencia del proyecto. Ejemplo, la dirección de grupo agrosana entiende que la calidad de sus servicios y productos debe estar orientada hacia la satisfacción de las expectativas de nuestros clientes, como elemento diferenciador y fundamental que asegura el éxito en la “venta al por mayor de fitosanitarios, fertilizantes y productos auxiliares para uso agrícola”. Pretendemos seguir avanzando para llevar nuestro espíritu de vanguardia y calidad para que de esta forma cada vez más empresas puedan disfrutar de todos nuestros productos y servicios, haciendo de grupo agrosana, una empresa de referencia en el mercado nacional. A fin de cumplir con esta política, grupo agrosana ha establecido un sistema de gestión de la calidad conforme a los requisitos de la norma UNE-EN-ISO-9001:2015 cuyas estipulaciones son de obligado cumplimiento. Agrosana, 2015.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imagen decorativa')
      
      .row(numero="5" titulo="Valores")
        .col-md-6.mb-4.mb-md-0
          p Aquí se establecen los principios por medio de los cuales se rigen las personas que hacen parte del proyecto productivo, están dirigidos al cumplimiento de los objetivos y planes. Ejemplo, la confianza que se genera seguridad entre las personas y frente a otros, respecto de nuestra idoneidad, competencia y credibilidad para lograr la transformación sostenible del sector agropecuario. Agrosavia, 2021.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imagen decorativa')
      
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.2 Análisis DOFA

    .row.mb-4
      .col-lg-10.m-auto
        .row.align-items-center.grad1.p-3
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imagen decorativa' width="64px" height="64px")
          .col-lg-7
            h2.text-light Análisis DOFA
            .text-light.mb-0 Es una herramienta o técnica de diagnóstico en procesos de producción y proyectos productivos en la que se identifican las debilidades (D) oportunidades (O) fortalezas (F) y amenazas (A).
          .col-lg-3.text-center
            button Descargar

    .row.my-5.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
      
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0 Al finalizar el desarrollo de la herramienta podemos realizar un análisis sobre las fortalezas y debilidades que se identifican dentro del proyecto productivo y también se puede realizar un análisis externo del proyecto oportunidades y amenazas que afectan positiva y negativamente el desarrollo de las actividades del proyecto.

    .row.mb-4
      .col-lg-10.m-auto
        .row.align-items-center.grad1.p-3
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa' width="64px" height="64px")
          .col-lg-7
            h2.text-light Herramienta DOFA
            p.m-0.text-light Para conocer más acerca de la herramienta DOFA, puede descargar el siguiente recurso.
          .col-lg-3.text-center
            button Descargar

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.3 Organigrama

    p Consiste en la elaboración de un cuadro de jerarquía en el que se escriben los cargos que se identifican dentro del proyecto, para su elaboración debe identificarse la cadena de mando, las áreas están presentes, identificar las funciones que se desarrollan en cada una de las áreas y sus relaciones jerárquicas.

    p.text-bold.text-center Para la elaboración del organigrama del proyecto se pueden utilizar los siguientes pasos:

    .row.my-5
      .col-lg-10.m-auto
        figure
          img.d-lg-block.d-none(src='@/assets/curso/temas/tema3/img12.svg', alt='Imagen decorativa')
          img.d-lg-none.d-block(src='@/assets/curso/temas/tema3/img13.svg', alt='Imagen decorativa')
    .row.mb-4
      .col-lg-10.m-auto
        .cajon.color-primario.p-4
          p.mb-0 El organigrama ayuda a identificar la toma de decisiones con el fin de delegar funciones y diseñar diferentes estrategias.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.4 Aspecto legal

    .row.my-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')

      .col-lg-7
        p En la formulación de proyectos agropecuarios el aspecto legal es de gran relevancia debido a que muchas de las actividades que realizamos en el campo están reguladas por la constitución política de Colombia, por el Ministerio de Agricultura y Medio Ambiente (MADR) por la Agencia de Desarrollo Rural (ADR) y por el Instituto Colombiano Agropecuario (ICA); esta última entidad es la encargada de velar por la sanidad de los productos en el país para su exportación e importación. No debe perder de vista la legislación reciente Sistema Nacional de Innovación Agropecuaria (SNIA) la cual fue vista en el componente formativo 1: diagnóstico de la situación problémica en la población, organización o empresa agropecuaria rural.

    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Normatividad agropecuaria

    .row.my-4.align-items-center
      .col-lg-7
        p Todas las explotaciones agropecuarias del país estén o no formalizadas como empresas están en la obligación de cumplir con una normatividad mínima en aspectos técnicos de sanidad vegetal, animal y agroindustrial; para esto el ICA tiene como misión, “trabajar por la sanidad agropecuaria y la inocuidad agroalimentaria del campo Colombiano”.
        .row.align-items-center.p-3(style="background: #DEEBAD")
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen decorativa', width="64px" , height="64px")
          .col-lg-9
            p.m-0 Es así como esta entidad realiza asesoría y acompañamiento a los productores agropecuarios del país para la obtención de certificados tales como se relacionan en la siguiente tabla: 

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')

    .tabla-b.mb-5(data-aos="zoom-in-up")
      table.text-center
        thead(style="background:#FFA686")
          tr
            th Norma
            th Descripción
        tbody
          tr
            td Resolución 20009 de 2016
            td Por Medio de la cual se establecen los requisitos para la certificación en buenas prácticas agrícolas en producción primaria devegetales y otras especies para consumo humano.

          tr
            td Resolución 2304 de 2015
            td Por la cual se establecen los requisitos sanitarios y de inocuidad para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción primaria de ovinos y caprinos destinados al sacrificio paraconsumo humano.

          tr
            td Resolución ICA 448 de 2016
            td Por medio de las cuales se establecen los requisitos para el registro ante el ICA de los predios de vegetales para exportación enfresco, el registro de exportadores y el registro de las plantas empacadoras de las plantas para exportación en fresco.

          tr
            td Decreto 616 de 2007
            td Por el cual se establece el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercialice, expenda, importe o exporte en el país.

          tr
            td Decreto 1880 de 2011
            td Por el cual se señalan los requisitos para la comercialización de leche cruda para consumo humano directo en el territorionacional.

          tr
            td Decreto 1162 de 2010
            td Por el cual se organiza el sistema administrativo nacional de propiedad intelectual y se crea la comisión intersectorial de propiedad intelectual.

          tr
            td Decreto 3149 de 2006
            td Por el cual se dictan disposiciones sobre la comercialización, transporte, sacrificio de ganado bovino y bufalino y expendio de carne en el territorio nacional.

          tr
            td Decreto 616 de 2006
            td Por el cual se expide el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercializa, expenda, importe o exporte en el país.

          tr
            td Decreto 1355 de 2001
            td Por el cual se adoptan medidas transitorias sobre las exportaciones de animales vivos de la especie bovina.

          tr
            td Decreto 459 de 2000
            td Por el cual se dictan normas relacionadas con los plaguicidas genéricos.

          tr
            td  Resolución 17 de 2012
            td Por la cual se establece el sistema de pago de la leche cruda al proveedor.

          tr
            td Resolución 310 de 2009	
            td Por la cual se determina el valor promedio nacional de los costos de establecimiento y mantenimiento por hectárea de bosque plantado, se fija la cuantía máxima porcentual que se reconocerá por concepto de certificado de incentivo forestal y se fija el Incentivo por árbol, para elaño 2010.
          
          tr
            td Resolución 36 de 2009
            td Por la cual se reglamentan para el año 2009 los contingentes de exportación de ganado en pie de la especie bovina. (publicadadiario oficial 47262 de 2009).
          
          tr
            td Resolución 1442 de 2008	
            td Por la cual se establece el procedimiento para la expedición del dictamen técnico-ambiental al que alude la norma andina para el registro y control de plaguicidas químicos de uso agrícola, decisión 436,de la comisión de la comunidad andina, y se toman otras determinaciones.

    .row.mb-5
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 200px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso web
              p.text-light.m-0 Si está interesado en la normatividad para certificarse en buenas prácticas agrícolas y/o buenas prácticas pecuarias, diríjase al siguiente enlace.
            .col-lg-3
              button Ver sitio
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-2(style="min-height: 200px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso web
              p.text-light.m-0 Para conocer en detalle la normatividad ICA, ingresar al siguiente enlace.
            .col-lg-3
              button Ver sitio

    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Tipos de empresas en Colombia

    p En el estudio administrativo es preciso determinar el tipo de empresa que se va a crear, para poder realizar las actividades comerciales acordes a las necesidades para la ejecución del proyecto, como la compra de insumos, pago de impuestos, contratación, etc.

    .row.my-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen decorativa')
      .col-lg-7
        p En el territorio nacional existen dos formas jurídicas que son persona natural cuando la actividad comercial la ejerce una persona a nombre propio; persona jurídica fi­gura en la que el negocio es una sociedad que funciona con patrimonio independiente al de sus accionistas, siempre necesita de un representante legal quien actúa en nombre de la sociedad. (cámara de comercio de Medellín, 2021, p3).
        .row.p-3.align-items-center(style="background: #DEEBAD") 
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img18.svg', alt='Imagen decorativa', width="64px", height="64px")
          .col-lg-9
            p.m-0 Cuando se registra como persona jurídica es importante conocer las características de cada una de ellas, según la cámara de comercio de Medellín, existen las siguientes tipos de sociedades:

    .row.my-5 
      .col-lg-10.m-auto 
        figure
          img.d-lg-block.d-none(src='@/assets/curso/temas/tema3/img19.svg', alt='Imagen decorativa')
          img.d-lg-none.d-block(src='@/assets/curso/temas/tema3/img20.svg', alt='Imagen decorativa')

    
    .row.my-5
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 200px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso web
              p.text-light.m-0 Superintendencia de sociedades. Cartillas y guías.
            .col-lg-3
              button Ver sitio
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 200px;")
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/tema3/img21.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso web
              p.text-light.m-0 Para ampliar la información puede consultar la guía de tipos societarios de la Cámara de Comercio de Medellín (2021).
            .col-lg-3
              button Ver sitio
            
    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Contratación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img27.svg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 Después de haber conocido los tipos de sociedades que existen en Colombia, es momento de conocer los tipos de contrato que existen junto con sus características, es por esto por lo que en la página del ministerio de trabajo se encuentra esta información para su conocimiento y manejo.

    .row.my-5
      .col-lg-10.m-auto
        .row.align-items-center.grad1.p-3
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imagen decorativa', width="64px", height="64px")
          .col-lg-6
            h2.text-light Recurso web
            p.text-light Ministerio del trabajo. Tipos de contrato.
          .col-lg-3.text-center
            button Ver sitio
    
    .cajon.color-primario.p-4
      p.mb-0 También para conocer a detalle la definición de contrato, tipos de contrato, periodo de prueba, salario y demás características que todo emprendedor debe conocer para conformar una empresa que cumpla con los estándares legales y que aporte al desarrollo social, productivo generando procesos de responsabilidad social empresarial.

    .row.my-4
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 180px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img22.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light El contrato de trabajo SENA
              p.text-light Documento SENA. El contrato de trabajo.
            .col-lg-3
              button Descargar
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 180px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img23.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso PDF
              p.text-light Información y orientación laboral para la población colombiana en situación de retorno.
            .col-lg-3
              button Descargar 

    .row.my-5.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img24.svg', alt='Imagen decorativa')
      .col-lg-7
        p.m-0 El sector agropecuario en Colombia está enmarcado por la informalidad en la contratación de trabajadores del sector rural, para mejorar las condiciones laborales el gobierno nacional bajo la dirección del ministerio de trabajo y protección social expide el decreto 2616 de 2013 que establece la cotización seguridad social para trabajadores que laboren menos de un mes; este decreto ayuda a mejorar condiciones laborales en términos de aporte a pensión, salud y riesgos laborales de trabajadores de campo, además ayuda a la empresa a cumplir con compromisos de responsabilidad social o políticas orientadas a mejorar las condiciones de vida de los habitantes del área de influencia.
        
    .row.my-4
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 180px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img25.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso PDF
              p.text-light Decreto 2616 del 20 de noviembre de 2013.
            .col-lg-3
              button Descargar
      .col-lg-6
        div.px-2
          .row.align-items-center.grad1.p-3(style="min-height: 180px;")
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img26.svg', alt='Imagen decorativa', width="64px", height="64px")
            .col-lg-6
              h2.text-light Recurso PDF
              p.text-light Abecé de la contratación por semanas.
            .col-lg-3
              button Descargar 
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
