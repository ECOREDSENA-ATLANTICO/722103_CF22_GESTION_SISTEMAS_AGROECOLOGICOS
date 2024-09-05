<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En este componente formativo se establecen los estudios requeridos para llevar a cabo el proceso de formulación y evaluación de proyectos, específicamente proyectos agroecológicos. Como son el estudio de mercado que se encarga de identificar y detallar el producto o servicio (características, presentación, precio, usos, etc.). Caracterizar y segmentar la población a la cual va dirigido, cuantificar la demanda y la oferta, para así aplicar estrategias de mercadeo basadas en las 4 P. El estudio técnico el cual permite determinar los recursos necesarios para el proyecto (localización, tamaño, proceso). El estudio ambiental que permite tipificación, jerarquización y análisis de los impactos ambientales ocasionados sobre el medio ambiente y sobre el entorno, producto de la producción de bienes y servicios, para llevar a cabo una adecuada gestión ambiental y, por último, el estudio financiero que indica la viabilidad y rentabilidad del proyecto. 

    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
