<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 A continuación, se presentará el video que hará una breve introducción del presente componente formativo:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/q8Kg3vulrcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-left")
          p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en #[b especificaciones de #[i software]], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del #[b análisis y el desarrollo de #[i software] ADSO].

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
