<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fichas técnicas
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p Una ficha técnica es un documento en el que se detallan las características o funciones de un software desarrollado. Funciona como una herramienta para transmitir los datos más relevantes sobre un tema específico.
        p Contiene información resumida y de utilidad, que varía según la finalidad y tipo de ficha.
        .cajon.color-primario.p-4
          p La ficha técnica es una herramienta de gran utilidad a la hora de comercializar o dar a conocer un bien o servicio. Es importante que contenga información fidedigna, que aporte datos claros y exactos. 
          p.mb-0 Documento que reúne las características de los productos de software desarrollados.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img27.png', style="width: 600px").m-auto
    #t_3_1
    .titulo-segundo.color-secundario
      h2 3.1 Elaboración
    .row(data-aos="fade-right")
      .col-3
        figure
          img(src='@/assets/curso/img28.png', style="width: 200px").m-auto
      .col-9.p-4.bg-color12
        p Para la elaboración de la ficha técnica, se debe apoyar en las normatividades. En este caso, se realizará la ficha técnica tomando como referencia la norma NTC ISO 9000 Sistema de Gestión de Calidad.
        .row.justify-content-center
          .col-10
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/img17.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1.text-white Generalidades sobre ISO-9000
                      p.text-small.text-white Para profundizar sobre la norma ISO, su objetivo, finalidades y terminología, puede consultar el siguiente sitio web:
                    .col-sm-auto
                      a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span(style="color: #000000 !important") Descargar
                        i.fas.fa-file-download(style="color: #000000 !important")
    separador.mb-5
    #t_3_2
    .titulo-segundo.color-secundario
      h2 3.2 Diligenciamiento
    p.mb-5 A continuación, se realiza la descripción para el diligenciamiento de un ejemplo de una ficha técnica de productos de software.
    h3.mb-5 Ejemplo ficha técnica:
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Registro del formato de ficha técnica
            th(style="border-left: 2px #AFAFAF solid") Responsable (coordinador encargado)
        tbody
          tr
            td(colspan="2")
              .row
                .col-12.p-4
                  p Para realizar el diligenciamiento de la ficha técnica, el coordinador técnico de desarrollo se apoya en el coordinador de base de datos y el coordinador de infraestructura.
                  p.mb-4 Se deben llenar los campos de acuerdo con:
                  p.mb-4 #[b CARACTERÍSTICAS DEL PRODUCTO]
                  p.mb-0 #[b Nombre del producto:] nombre con el que será identificado el producto.
                  p.mb-0 #[b Línea de producción:] a qué sistema pertenece.
                  p.mb-0 #[b Versiones anteriores:] número y nombre del último desarrollo del producto.
                  p.mb-0 #[b Versión actual:] número con el que se identificará el nuevo producto.
                  p.mb-5 #[b Módulo:] nombre técnico del módulo.
                  p.mb-4 #[b DESCRIPCIÓN DEL PRODUCTO]
                  p.mb-0 #[b Descripción general del producto:] descripción breve del nombre del producto.
                  p.mb-5 #[b Objetivo]
                  p.mb-4 #[b ARQUITECTURA]
                  p.mb-5 #[b Descripción:] explica el tipo de arquitectura de desarrollo del aplicativo.
                  p.mb-4 #[b REQUERIMIENTOS DEL PRODUCTO]
                  p.mb-0 #[b Requisitos del sistema (servidor)]
                  p.mb-0 #[b #[i Hardware]:] se describen los requerimientos físicos mínimos que debe tener el equipo.
                  p.mb-0 #[b #[i Software]:] se describen los requerimientos lógicos necesarios para la ejecución del aplicativo.
                  p.mb-5 #[b Otros:] recomendaciones para que el aplicativo funcione mejor.
                  p.mb-0 #[b Requisitos del sistema (cliente)]
                  p.mb-0 #[b #[i Hardware]:] se describen los requerimientos físicos mínimos que debe tener el equipo.
                  p.mb-0 #[b #[i Software]:] se describen los requerimientos lógicos necesarios para la ejecución del aplicativo.
                  p.mb-5 #[b Otros:] recomendaciones para que el aplicativo funcione mejor.
                  p.mb-4 #[b REQUERIMIENTOS]
                  p.mb-0 #[b Requerimientos funcionales generales:] definición de funciones que el sistema realizará.
                  p.mb-0 #[b Requerimientos adicionales:] funcionalidades adicionales para el correcto funcionamiento del sistema.
                  p.mb-0 #[b Clientes del producto:] características del cliente o usuarios finales que puedan usar el producto.
    h3.mb-5 Historial de modificaciones
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Versión
            th(style="border-left: 2px #AFAFAF solid") Naturaleza del cambio
            th(style="border-left: 2px #AFAFAF solid") Fecha de aprobación
            th(style="border-left: 2px #AFAFAF solid") Fecha validación
        tbody
          tr
            td 00
            td(style="border-left: 2px #AFAFAF solid") Actualización documento
            td(style="border-left: 2px #AFAFAF solid") 25/05/2021
            td(style="border-left: 2px #AFAFAF solid") 25/06/2021
          tr
            td 01
            td(style="border-left: 2px #AFAFAF solid") Actualización documento
            td(style="border-left: 2px #AFAFAF solid") 25/07/2021
            td(style="border-left: 2px #AFAFAF solid") 25/08/2021
    h3.mb-5 Firmas
    .tabla-a.color-acento-botones
      table
        thead
          tr
            th Elaboró
            th(style="border-left: 2px #AFAFAF solid") Aprobó
            th(style="border-left: 2px #AFAFAF solid") Validó
        tbody
          tr
            td(style="padding-top: 100px") Firma
            td(style="border-left: 2px #AFAFAF solid; padding-top: 100px").text-start Firma
            td(style="border-left: 2px #AFAFAF solid; padding-top: 100px").text-start Firma
          tr
            td Fecha
            td(style="border-left: 2px #AFAFAF solid;").text-start Fecha
            td(style="border-left: 2px #AFAFAF solid;").text-start Fecha

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
