<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estudio técnico

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )

      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El estudio técnico es el momento en que el formulador de proyectos determina las condiciones en la que debe operar el sistema productivo, aquí se indica el tamaño de la explotación agropecuaria, cuánta área debe ser destinada para el cultivo o para el semoviente, cuánta área destino para la poscosecha o para realizar el faenado, localización de la explotación, etc.

    .row.justify-content-center.my-5.align-items-center(data-aos="fade-right")
      .col-lg-7
        p La importancia de este estudio se deriva de la posibilidad de llevar a cabo una valoración económica de las variables técnicas del proyecto que permitan una apreciación exacta o aproximada de los recursos necesarios para el proyecto; además de proporcionar información de utilidad al estudio económico-financiero. Todo estudio técnico tiene como principal objetivo el demostrar la viabilidad técnica del proyecto que justifique la alternativa técnica que mejor se adapte a los criterios de optimización. (Universidad Nacional Autónoma de México, s.f., p.1).
        .row.align-items-center.p-2(style="background: #DEEBAD") 
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
          .col-lg-10
            p En este aparte de la formulación de proyectos se debe realizar la descripción del proceso productivo, teniendo en cuenta que debe especificar materiales, insumos, semilla o pie de cría, fertilizantes, concentrado, cantidades, precios, etc. Además, debe indicar la cantidad y costos de la mano de obra, a continuación, vamos a describir brevemente los componentes del estudio técnico:

      .col-lg-5.col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen decorativa')
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.1 Localización

    .row.mb-4(data-aos="fade-right")
      .col-auto
        figure
          img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imagen decorativa')
      .col-lg-9
        p En el análisis del estudio técnico, la localización hace referencia a la ubicación espacial de la explotación agrícola o pecuaria; para ello se debe tener en cuenta criterios estratégicos, institucionales, técnicos, sociales y dos aspectos como la macrolocalización, aquí se encuentran los entornos nacional y regional (ubicación del mercado de consumo, las fuentes de materias primas y mano de obra disponible), el segundo aspecto es la microlocalización, entorno de la zona urbana o rural (cercanía con el mercado consumidor, infraestructura y servicios).
    
    .row.justify-content-center.my-4(data-aos="fade-right")
      .col-lg-8
        p Al mismo tiempo, la decisión de la ubicación del proyecto está relacionado con aspectos financieros, económicos y sociales que pueden tener repercusiones en el desarrollo económico y social de una región en el largo plazo.
        .row.justify-content-center.align-items-center.p-2(style="background: #FFE9E1")
          .col-lg-2.col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')
          .col-lg-10
            p.p-0 Con el fin de establecer un método sencillo para cuantificar variables con las que se pueda determinar la ubicación de un proyecto, se pueden utilizar las siguientes:

      .col-lg-4.col-md-8.d-none
        figure
          img(src='@/assets/curso/temas/tema2/img5.png', alt='Imagen decorativa')

    .row.my-4.justify-content-center
      .col-lg-4.col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imagen decorativa')
      
      .col-lg-8
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta(data-aos="fade-right") 
            span 1
          | Los costos de transporte tanto de insumos como de productos.
          li
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 2
          | La disponibilidad de insumos y sus condiciones de precio.
          li
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 3
          | Otros factores, tales como:
          ul.separadores
            li
            i.fas.fa-greater-than
            |  Condiciones de orden fiscal y tributaria.
            li
            i.fas.fa-greater-than 
            |  Existencia suficiente y adecuada de infraestructura (vías, energía, comunicaciones, educación, salud, etc.).
            li
            i.fas.fa-greater-than 
            |  Disponibilidad y calidad de servicios públicos.

    .row.mb-4
      .col-lg-6
        ul.separadores 
          li(data-aos="fade-left")
            i.fas.fa-greater-than 
            |  Políticas de desarrollo urbano o rural.
          li(data-aos="fade-left") 
            i.fas.fa-greater-than 
            |  Condiciones generales de vida.
          li(data-aos="fade-left") 
            i.fas.fa-greater-than 
            |  Condiciones meteorológicas para el buen desarrollo de la planta y la baja incidencia de plagas y enfermedades (temperatura, humedad, etc.).

      .col-lg-6
        ul.separadores 
          li(data-aos="fade-left")
            i.fas.fa-greater-than 
            |  Precio de la tierra. (Miranda, 2005, p.133.).
          li(data-aos="fade-left") 
            i.fas.fa-greater-than 
            |  Disponibilidad, costo y calidad (capacitada en la labor) de la mano de obra en la región, (Miranda, 2005, p.133.).
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.2 Tamaño
    .row.my-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', alt='Imagen decorativa')
    
      
      .col-lg-7(data-aos="fade-left")
        p.mt-3 Cuando se habla del tamaño del proyecto se hace referencia a la capacidad que se tiene de producir el bien durante el tiempo que va a durar el proyecto. Para iniciar con este análisis, debe determinarse la unidad de medida del tamaño del proyecto, si es para una planta de faenado la unidad de medida puede ser el número de sacrificios por día, si es un cultivo de flores para exportación, la unidad puede ser el número de ramos exportados por día o por semana.

        .cajon.color-secundario.p-4(data-aos="fade-left")(style="background: #DEEBAD")
          p.mb-0 Por otro lado, es útil aclarar ciertos términos con respecto a la capacidad del proyecto, podemos distinguir tres situaciones:

  
    .row.mb-4(data-aos="flip-up")
      .col-lg-4.my-3
        .p-2(style="background: #FFF8DA; border-radius: 10px")
          figure
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen decorativa' width="128px" height="128px")

          h3.text-center Capacidad diseñada
          p.text-center  Corresponde al máximo nivel posible de producción o de prestación del servicio.
      
      .col-lg-4.my-3
        .p-2(style="background: #FFEDE7; border-radius: 10px")
          figure
            img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imagen decorativa' width="128px" height="128px")

          h3.text-center Capacidad instalada
          p.text-center  Corresponde a la capacidad máxima disponible permanentemente.
      
      .col-lg-4.my-3
        .p-2(style="background: #EFF3F6; border-radius: 10px")
          figure
            img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imagen decorativa' width="128px" height="128px")

          h3.text-center Capacidad utilizada
          p.text-center  Es la fracción de capacidad instalada que se está empleando.

    p(data-aos="fade-right") Estos términos se pueden utilizar en la medida que se vaya incrementando la producción en la capacidad utilizada, hasta el punto en que se utilice toda el área que se tiene disponible colmando la capacidad diseñada.

    .row.justify-content-center.my-4.align-items-center(data-aos="fade-right")
      .col-lg-7
        p En la estimación del tamaño del proyecto se debe pensar en la dimensión del mercado, capacidad financiera, disponibilidad de insumos, la existencia o no de servicios públicos, oferta de transporte, infraestructura vial, voluntad política, planes de desarrollo municipal, líneas productivas priorizadas en el PDEA, etc.
        .row.p-2.align-items-center(style="background: #DEEBAD")
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Imagen decorativa', width="100px" , height="100px")
          .col-lg-9
            p.mb-0 Un factor que puede ayudar en la definición del tamaño del proyecto es la relación del mercado con los costos unitarios, si el resultado es que posee los costos mínimos y además tiene la capacidad de satisfacer el crecimiento de la demanda ese será el tamaño adecuado para el proyecto agropecuario.

      .col-lg-5.col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='Imagen decorativa')
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.3 Identificación y descripción del proceso

    p En esta etapa se debe realizar una descripción técnica detallada de las actividades, insumos, cantidades, unidades de medida, mano de obra, servicios para la producción, procesos administrativos, cultivo, variedad, especie, raza; aquí es donde debe tener la mayor cantidad de información para la ejecución del proyecto; a continuación, encontrará algunos parámetros que le serán útiles en el momento de realizar esta actividad de formulación:

    .row.my-3
      .col-lg-10.m-auto
        .p-3.my-3(style="background: #FFE0D5; border-radius: 10px")
          .row.align-items-center
            .col-lg-4
              figure
                img(data-aos="fade-right",src='@/assets/curso/temas/tema2/img16.png', alt='Imagen decorativa', width='150px', height='150px')
            .col-lg-8
              p.mb-0(data-aos="fade-left") <strong>Proceso productivo del componente agropecuario</strong> (cultivo de arándano, cría y levante de cerdos o el proceso de producción escogido).
        
        .p-3.my-3(style="background: #FFF2BE; border-radius: 10px")
          .row.align-items-center
            .col-lg-4
              figure
                img(data-aos="fade-right",src='@/assets/curso/temas/tema2/img17.png', alt='Imagen decorativa', width='150px', height='150px')
            .col-lg-8
              p.mb-0(data-aos="fade-left") <strong>Condiciones ambientales</strong> (identificar variables como temperatura, humedad relativa, régimen y distribución de lluvias, radiación solar, altura sobre el nivel del mar, etc.).

        .p-3.my-3(style="background: #A9BFB0; border-radius: 10px")
          .row.align-items-center
            .col-lg-4
              figure
                img(data-aos="fade-right",src='@/assets/curso/temas/tema2/img18.png', alt='Imagen decorativa', width='150px', height='150px')
            .col-lg-8
              p.mb-0(data-aos="fade-left") <strong>Requerimientos nutricionales</strong> (nivel nutricional del suelo, necesidades nutricionales de las plantas, necesidades nutricionales de los semovientes, fertilizantes o abonos orgánicos necesarios, concentrados y porcentaje nutricional necesarios, etc.).

        .p-3.my-3(style="background: #E2EEB7; border-radius: 10px")
          .row.mlign-items-center
              .col-lg-4
                figure
                  img(data-aos="fade-right",src='@/assets/curso/temas/tema2/img19.png', alt='Imagen decorativa', width='150px', height='150px')
              .col-lg-8
                p.mb-0(data-aos="fade-left") <strong>Proceso productivo detallado</strong> (listado de equipos, herramienta o maquinaria, distribución espacial, preparación del suelo, enmiendas, siembra, cantidad de semilla, variedad, disponibilidad, riego, fertilización; pie de cría, raza, instalaciones, agua, tiempo de cría o levante, etc.).

        .p-3.my-3(style="background: #FFE0D5; border-radius: 10px")
          .row.align-items-center
            .col-lg-4
              figure
                img(data-aos="fade-right",src='@/assets/curso/temas/tema2/img20.png', alt='Imagen decorativa', width='150px', height='150px')
            .col-lg-8
              p.mb-0(data-aos="fade-left") <strong>Manejo poscosecha o labores de sacrificio, empaque</strong> (listado de equipos, herramienta o maquinaria, distribución espacial, describir las actividades de manera muy detallada).


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.4 Organización y cronograma

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img21.png')})`}"
      )

      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Al igual que los procesos de producción del bien identificado para el proyecto agropecuario, se debe identificar y describir el modelo administrativo que se va a implementar en la empresa; es importante recordar que la organización hace referencia a la conformación de una estructura jerárquica de individuos encargados de administrar los procesos y recursos dentro de la empresa. Además, en el estudio técnico es importante elaborar un cronograma de actividades en el que se relacionen las actividades que se deben hacer para iniciar procesos administrativos, financieros y técnicos para la puesta en marcha del proceso productivo.
</template>

<script>
export default {
  name: 'Tema2',
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
