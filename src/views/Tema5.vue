<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Estudio financiero

    .row.my-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')       
      
      .col-lg-7
        p El estudio financiero establece la viabilidad y rentabilidad del proyecto, es decir, consiste en determinar cuáles son los beneficios que se obtienen con los recursos destinados o empleados, por medio del análisis de la información obtenida en otros estudios como el técnico y de mercado, específicamente la relacionada con los costos, gastos e inversiones que se requieren para llevar a cabo la ejecución del proyecto, como también los ingresos que se producen.
        .row 
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
          .col-lg-9
            p La información es sistematizada y organizada por medio de los flujos de caja que expresan los costos e ingresos, con el objetivo de realizar la evaluación del proyecto, por medio de diversas herramientas e indicadores de rentabilidad como se muestra en el siguiente a continuación:     :

    .row.my-2
      SlyderA(data-aos="zoom-in-left", tipo="b")
        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 El análisis de riesgos
            p Es el estudio de las amenazas, los eventos, los daños y las posibles consecuencias de       poner en marcha un proyecto determinado. Es importante especificar que se entiende por amenaza aquel acto, agente externo o vulnerabilidad que pudiera alterar el proceso o afectar a uno de los elementos del proyecto.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 El valor presente neto (VPN)
            p Es el método más conocido a la hora de evaluar proyectos de inversión a largo plazo.  El VPN permite determinar si una inversión cumple con el objetivo básico financiero: MAXIMIZAR la inversión.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
        
        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 La tasa interna de retorno (TIR)
            p Es la rentabilidad que ofrece una inversión. Es decir, es el porcentaje de beneficio o pérdida que tendrá una inversión para las cantidades que no se han retirado del proyecto.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')

        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 Relación Beneficio / Costo (B/C)
            p Este índice se define como la relación entre los beneficios y los costos o egresos de un proyecto. Su cálculo se basa en la relación entre el valor actual de las entradas de efectivo futuras y el valor actual del desembolso original.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')

    .row.mb-4
      .cajon.color-primario.p-4
        p.mb-0 Estos indicadores  permiten medir y comparar los resultados obtenidos en la evaluación financiera y así poder tomar la decisión de si se implementa o no el proyecto.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 5.1 Inversiones y costos 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img10.png')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 En los proyectos se hace necesario establecer y analizar las inversiones iniciales que requieren para lograr la puesta en marcha; los recursos pueden estar representados en dinero en efectivo o terrenos, maquinaria, equipos, es decir bienes tangibles, pero también pueden ser bienes intangibles como servicios. Por lo tanto, la inversión inicial se puede clasificar como se muestra en la siguiente infografía:

    .row.mb-4
      .col-lg-4.m-auto
        div Inversión inicial

    .row.mb-4
      .col-lg-4.mb-2
        figure
          img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
        
        h3.text-center Activos fijos
        p.text-center  Hace referencia a los bienes materiales como terrenos, obras o construcciones civiles, infraestructura de energía eléctrica, agua potable, comunicaciones y demás servicios, maquinarias, herramientas, muebles, entre otros equipamientos.
      .col-lg-4.mb-2
        figure
          img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
        
        h3.text-center Activos intangibles
        p.text-center  Son aquellos servicios o derechos adquiridos como licencias, software, patentes, bases de datos, consultorías, permisos, seguros, etc.
      .col-lg-4.mb-2
        figure
          img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
        
        h3.text-center Capital de trabajo
        p.text-center   Es el capital adicional representado en efectivo, inventarios y cuentas por cobrar, es decir los activos corrientes, pero también están los pasivos corrientes como deudas con proveedores (insumos, materias primas) y mano de obra para lograr la primera producción.

    
    .row.my-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')       
      
      .col-lg-7
        .cajon.color-primario.p-4
          p.mb-0 Además de la inversión inicial, están los costos que como lo indica Baca Urbina, G. (2001), hacen referencia al desembolso ya sea en efectivo o especie, que se puede realizar en el pasado (costos hundidos) presente (inversión) o en el futuro (costo futuro) y también de forma virtual (costo de oportunidad)  Entre estos costos están los de producción, de administración, de ventas y financieros, como se presenta en la siguiente figura:     

    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="De producción")
        p Entre estos se encuentran las materias primas, mano de obra directa e indirecta, empaques y envases, servicios (energía eléctrica, agua), mantenimiento, control de calidad, combustibles, cargos de amortización y depreciación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="De ventas")
        p Todo lo relacionado con proceso de mercadotecnia, es decir acciones para mejorar las ventas y comercialización, como publicidad, desarrollo de nuevos productos y mercados, estudios, etc.
      .tarjeta.color-acento-botones--borde.p-4(titulo="De administración")
        p Están relacionados los sueldos de personal no solo del área administrativa, sino también de venta, investigación, etc., más los gastos e insumos requeridos para las funciones administrativas de todas las oficinas y dependencias.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Financieros")
        p Se incluyen principalmente el pago intereses derivados de préstamos de capital.

    .row.mb-4
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0 Adicionalmente, los costos pueden ser analizados y catalogados en dos tipos como lo expresa Jiménez (2010). Los fijos son aquellos que no cambian según el nivel de producción, por ejemplo, arriendo, vigilancia, depreciación de máquinas o seguros. Y los costos variables que son los que aumentan o disminuyen dependiendo del volumen de producción como mano de obra, insumos, semilla, pie de cría, concentrado, vacunas, fertilizantes, etc.
        
        p Con las inversiones iniciales y los diversos costos, se pasa a analizar los beneficios que ofrece el proyecto, por medio de la evaluación financiera o económica, para lo cual existen diversos métodos que al aplicarse brindan un panorama para la toma de decisiones que logren obtener el mayor provecho con lo que se invierte.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 5.2 Flujo de caja 
    
    .row.mb-4
      .col-lg-8
        p Una vez identificados y estudiados, las inversiones iniciales y los diversos costos, se tienen los elementos requeridos para el flujo de caja, ya que este es un esquema mediante el cual se presentan  las salidas (egresos) y las entradas (ingresos) que se realizan en el proyecto año a año, siendo categorizados de acuerdo con  la magnitud y el momento en el cual se reciben, lo que permite obtener elementos importantes para la toma de decisiones enfocadas al empleo de los recursos existentes en búsqueda de la eficiencia y rentabilidad.
        p Específicamente, los egresos del flujo de caja hacen referencia a la inversión inicial, costos y gastos, mientras que los ingresos como lo indica Mendieta (2005), es el dinero percibido por la venta del producto o productos, incluyendo los ingresos operativos (por venta del producto o prestación del servicio) como los ingresos financieros (por ejemplo, por inversión de reserva).
        .row 
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
          .col-lg-9
            p La estructura de los flujos de caja puede variar, pero siempre se debe comprender y tener en cuenta los ingresos y egresos que están sujetos a impuestos, los gastos no erogables, además de los ingresos y egresos no sujetos a impuestos. Así:
      .col-lg-4 
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    
    .row.mb-4
      .col-lg-8
        p En conclusión, el flujo de caja es un elemento de gran importancia, porque mediante este se estima la rentabilidad del proyecto, a través de   las evaluaciones financieras como valor presente neto (VPN), la tasa interna de retorno (TIR) y relación Beneficio / Costo (B/C) que se realizan sobre los resultados obtenidos del flujo de caja.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 5.3 Punto de equilibrio

    .row.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0 El comportamiento de los costos ya sean fijos o variables y los ingresos se pueden analizar por medio del punto de equilibrio, ya que este indica el momento en que la empresa alcanza un nivel de producción donde los ingresos obtenidos por las ventas son iguales a los costos. Teniendo presente, que esta técnica no permite evaluar la rentabilidad, a pesar de que muestre que hay ganancias, no se puede establecer que son suficientes para hacerlo rentable, sino que es un punto de referencia que permite establecer cuánto es la producción mínima a la cual se debe operar para no caer en pérdidas.
        
        p El cálculo del punto de equilibrio se puede hallar de manera matemática, teniendo los ingresos (producto de volumen vendido X precio), se igualan a los costos totales (costos fijos + costos variables); pero como los costos variables son un porcentaje constante de las ventas, se tiene que:

    p.my-3.text-center También se puede realizar de forma gráfica, como se observa en la siguiente figura: 

    p El punto de equilibrio permite conocer la solvencia del negocio; si el negocio logra llegar al punto de equilibrio a principios de mes, obtendrá utilidades bastante mayores que si lo alcanza en los últimos días del mes. Puede también darse el caso que termine el mes y que no alcance a cubrir plenamente los costos totales; en ese caso estaría con problemas de liquidez.

    .row.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
      .col-lg-6
        .cajon.color-primario.p-4 La determinación del punto de equilibrio permite comprobar la viabilidad del negocio. Si hay constancia en el ritmo de los ingresos también lo habrá en el rango o momento en que se alcanzará el punto de equilibrio
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
