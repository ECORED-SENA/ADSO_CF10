<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Licencias de <i>software</i>
    .row.px-5.bg-color8.mb-5
      .col-12
        p.mb-5 A continuación, se dará el concepto de licencia de #[i software].
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XiXnR4mssBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        #t_2_1
        .titulo-segundo.color-secundario
          h2 2.1 Conceptos
        .row.mb-5
          .col-lg-6.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Licencia")
                .col-12
                  p Cuando se realiza un convenio o contrato entre un desarrollador y un usuario y para el cual el #[i software] está sujeto a una propiedad intelectual y derechos de autor, se dice que estamos hablando de una licencia. En ella se establecen detalladamente los derechos y deberes de ambas partes. Depende del desarrollador la selección de la licencia de distribución del #[i software]. 
              .row(numero="2" titulo="Patente")
                .col-12
                  p Se trata de un derecho exclusivo que proporciona el Estado para la protección de una invención de un nuevo producto (material o inmaterial) dispuesto para ser explotado comercialmente a conveniencia del solicitante por un periodo de tiempo limitado.
              .row(numero="3" titulo="Derecho de autor o <i>copyright</i>")
                .col-12
                  p Forma de protección proporcionada por las leyes vigentes en la mayoría de los países para los autores de obras originales, incluyendo obras literarias, dramáticas, musicales, artísticas e intelectuales, tanto publicadas como pendientes de publicar.
              .row(numero="4" titulo="<i>Software</i> libre")
                .col-12
                  p Permite libertad de:
                  ul.lista-ul--color
                    li 
                      i.fas.fa-compass
                      | Correr programas para cualquier uso.
                    li 
                      i.fas.fa-compass
                      | Analizar el funcionamiento del programa y modificarlo de acuerdo con sus necesidades.
                    li 
                      i.fas.fa-compass
                      | Redistribuir copias.
                    li 
                      i.fas.fa-compass
                      | Realizar y aplicar mejoras al programa para beneficio de toda la comunidad.
              .row(numero="5" titulo="<i>Software</i> de fuente abierta")
                .col-12
                  p Sus criterios de distribución son:
                  ul.lista-ul--color
                    li 
                      i.fas.fa-compass
                      | Libre distribución.
                    li 
                      i.fas.fa-compass
                      | Intervención del código fuente.
                    li 
                      i.fas.fa-compass
                      |
                      p.mb-0 Permitir modificaciones y trabajos que cumplan las mismas condiciones que el #[i software] original.
                    li 
                      i.fas.fa-compass
                      | Integrar sin ninguna discriminación a personas o grupos.
                    li 
                      i.fas.fa-compass
                      | La licencia debe ser tecnológicamente neutral.
              .row(numero="6" titulo="<i>Software</i> de dominio público")
                .col-12
                  p Aquél que no está protegido con #[i copyright].

          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img9.svg', style="width: 500px").m-auto
        separador.mb-5
        #t_2_2
        .titulo-segundo.color-secundario
          h2 2.2. Normativa
        p.mb-5 Cuando se realiza la implementación de un #[i software], su uso debe estar regido por una normatividad que evitará futuras sanciones o multas.
        .row.justify-content-center.mb-4
          .col-10(data-aos="fade-left")
            .row
              .col-lg-6.mb-4.mb-lg-0
                .h2 #[i ¿Cumple con la LEY 603?]
                .row
                  .col-12.bg-color1
                    .p-4
                      p.mb-0 En Colombia, la ley que regula las licencias de #[i software] es la Ley 603 de 2000, la cual recibe el nombre de Ley para el cumplimiento de las licencias de #[i software].
              .col-lg-6
                figure
                  img(src='@/assets/curso/img10.svg', style="width: 400px").m-auto
    .row
      .col-12.bg-color9.mb-4(data-aos="fade-right")
        .p-4.my-5
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b La Ley 603 de 2000 dice que:]
              p Este mandato obliga a las empresas a presentar un reporte de la gestión, que incluye la información sobre el avance de los negocios y su estado financiero, administrativo y jurídico.
              p.mb-0 #[b El informe debe contener la condición de acatamiento de las normas referentes a la propiedad intelectual y los derechos de autor.]
            .col-lg-6
              figure
                img(src='@/assets/curso/img18.png', style="width: 500px").m-auto
      .col-12.bg-color9(data-aos="fade-right")
        .p-4.my-5
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p La #[b DIAN (autoridad tributaria)]  podrá realizar auditorías cuando se realicen visitas a las empresas, garantizando el cumplimiento legal del #[i software] instalado en los equipos de cómputo.
              p A continuación, se mencionan las penalidades por no cumplir la Ley 603 de 2000:
              ul.lista-ul--color
                li 
                  i.fas.fa-layer-group
                  | Para los administradores de la empresa, sanciones de hasta 200 SMMLV.
                li 
                  i.fas.fa-layer-group
                  | Delito de desfalco de derechos patrimoniales, que tiene prisión de entre 2 y 5 años.
                li 
                  i.fas.fa-layer-group
                  | Infracción a los elementos de protección de los derechos patrimoniales de autor: prisión de 4 a 8 años.
                li 
                  i.fas.fa-layer-group
                  |
                  p.mb-0 Además, la #[b DIAN] también podrá imponer sanción por evadir impuestos procedentes de #[i software] ilegal.
            .col-lg-6
              figure
                img(src='@/assets/curso/img19.png', style="width: 500px").m-auto
    separador.mb-5
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Tipos de licencias
    .row.mb-5
      .col-12.p-4.bg-color10
        .row.justify-content-center.py-5
          .col-lg-8
            SlyderF(columnas="col-12")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/img20.png' alt='AvatarTop')
                h3.text-center Licencia de #[i software freeware]
                p Son aquellas que permiten descargar, instalar y/o usar gratuitamente un programa para computador.
                p Para este tipo de licencia, el usuario no necesita suscribirse ni registrarse o comprar alguna licencia.
                p Este tipo de licencia permite tener acceso al código objeto, mas no al código fuente.
                p.mb-0 #[b Ejemplos:]
                p Antivirus Avast: permite su descarga gratuitamente de Internet.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/img21.png' alt='AvatarTop')
                h3.text-center Licencias de #[i software] libre o #[i software] de código abierto
                p En este tipo de licencia los desarrolladores, generalmente, dan acceso abierto al código fuente de su #[i software].
                p Existen diferentes licencias creadas por las organizaciones, como GNU GPL (#[b #[i General Public License]]),  Licencia Pública General de GNU, que fue creada por la fundación  #[b #[i Free Software Foundation]],  es una licencia de derecho de autor ampliamente usada en el mundo del #[i software] libre y código abierto, y avala a los usuarios finales (personas, organizaciones, compañías) la libertad de utilizar, analizar, compartir (copiar) y modificar el #[i software]. 
                p.mb-0 #[b Ejemplos:]
                p Android, Mozilla, Linux, WordPress, Chromium.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/img13.svg' alt='AvatarTop' style="width: 150px").m-auto
                p Este tipo de licencias se subdivide en otras que contienen cláusulas más específicas, como el #[i copyleft].
                p #[b #[i Copyleft]:] se dice que el #[i copyleft] es otra versión de copyright, y básicamente es creada para la regulación de las licencias de #[i software] libre. Su función principal es evitar que algún tipo de material sea distribuido y reformado por alguien diferente a el autor del producto. Lo que hace el #[i copyleft] es impedir que el código fuente sea utilizado sin autorización y establece unas condiciones sobre las cuales puede hacerse uso del código.
                p #[b Licencia de #[i software] libre sin protección #[i copyleft]:] se autoriza a terceros no solo a modificar el producto sino también a que pueda licenciar con sus términos.
                p #[b Licencia de #[i software] libre con protección #[i copyleft]:] este tipo de licencia es creada para obligar a los programadores que deseen redistribuir su código a seguir unos lineamientos y restricciones establecidas. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/img23.png' alt='AvatarTop' style="width: 150px").m-auto
                h3.text-center Licencias de #[i software shareware]
                p Este tipo de licencia consiste en que se libera gratuitamente una versión con funcionamiento limitado, o sea, después de unos días, para seguir utilizando todas las funcionalidades, el usuario tendrá que pagar.
                p Este tipo de licencias no permite ningún tipo de cambio, debido a que no se incluye su código fuente.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/img24.png' alt='AvatarTop' style="width: 450px").m-auto
                p Se subdividen en 3 tipos de licencias, que son: trial, demo, adware.
                p #[b #[i Trial]:] licencia que activa todas las funcionalidades del #[i software], pero por un periodo de tiempo limitado.
                p #[b Demo:] A diferencia del trial, permite hacer uso del #[i software] de forma indefinida, pero con la limitante de que no tiene habilitadas todas sus funciones. En estas, entran los videojuegos.
                p #[b #[i Adware]:] Son las licencias que permiten utilizar los programas de forma gratuita, pero, a cambio, descargan publicidad continua.
                p.mb-0 #[b Ejemplos:]
                p YouTube, Spotify.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/img25.png' alt='AvatarTop' style="width: 450px").m-auto
                h3.text-center Licencias de #[i software] propietario
                p Esta licencia consiste en que el autor del #[i software] limita los derechos de copia, redistribución y modificación de su proyecto. De esta manera, si un usuario final hace cualquiera de estas acciones, deberá pagar una cantidad de dinero al autor para legalizar el derecho de poder hacerlo.
    separador
    #t_2_4
    .titulo-segundo.color-secundario
      h2 2.4 Derechos de autor
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img26.png', style="width: 600px").m-auto
      .col-lg-6
        p Se refiere a todas las obras artísticas, literarias, o científicas que son protegidas por el derecho de autor durante cierto periodo de tiempo, por el solo hecho de la creación de la obra. #[span.text-deco1 La entidad DNDA (Dirección Nacional de Derechos de Autor) en Colombia es la que se encarga de proteger todas estas obras.]
        p Cuando el #[i software] está protegido por medio del derecho de autor, se deben establecer qué usos serán permitidos realizar por parte del usuario.
        p.mb-0 Comúnmente, los usos que se autorizan son:
    .row.mb-5
      .col-lg-4.p-4.bg-color11
        figure.mb-4
          img(src='@/assets/curso/img14.svg', style="width: 150px").m-auto
        p.text-white La ejecución del código del #[i software], bien sea en dispositivos de almacenamiento o en el disco local del equipo donde se instalará el #[i software].
      .col-lg-4.p-4.bg-color11
        figure.mb-4
          img(src='@/assets/curso/img15.svg', style="width: 150px").m-auto
        p.text-white Es esencial que en la licencia quede estipulado el plazo en el que se está concediendo la licencia y el territorio para el que se concede.
      .col-lg-4.p-4.bg-color11
        figure.mb-4
          img(src='@/assets/curso/img16.svg', style="width: 150px").m-auto
        p.text-white La posibilidad de distribución del #[i software] (realizar nuevas copias y comercializarlas a terceros).
    p.mb-0 Como último, se debe tener en cuenta que los usuarios solo podrán hacer uso del #[i software] exclusivamente para los usos que se autorizaron.

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
