<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    p Estimado aprendiz bienvenido al componente formativo: formulación y evaluación de los componentes de estudio para proyectos agroecológicos contemplado dentro del plan de estudios del programa <strong>Gestión de sistemas agroecológicos</strong>, para iniciar lo invitamos a recorrer el siguiente video:     
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QLWCKEB0cHE?si=aeXGhjYmWy_FZLlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
