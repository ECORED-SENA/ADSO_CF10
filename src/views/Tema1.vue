<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Teoría de sistemas
    .bloque-texto-b.color-secundario.p-4.mb-5
      .bloque-texto-b__texto.mb-4
        i.fas.fa-quote-left
        p.mb-0 Can Es el estudio de las características que tienen en común los sistemas; su aplicación se enfoca en los sistemas automatizados.
        i.fas.fa-quote-right
      .bloque-texto-d__autor
        .row
          .col-12.d-inline-flex.justify-content-end.align-items-center
            p.mb-0 #[b  (Maida y Pacienzia, 2015).]
            .cuadro
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/img1.png', style="width: auto").m-auto
    p.mb-5 Los siguientes son algunos de los principios generales de la Teoría General de Sistemas (TGS):
    .row.mb-5.d-flex(data-aos="fade-right")
      .col-6.col-lg-3.bg-color2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/img2.png', style="width: 600px").m-auto
          .col-12.bg-color1
            .p-4
              p.mb-0 Entre más especializado sea un sistema, tiene menos capacidad de adaptarse a circunstancias diferentes.
      .col-6.col-lg-3.bg-color2.d-flex
        .row.bg-color1
          .col-12.px-0
            figure
              img(src='@/assets/curso/img3.png', style="width: 600px").m-auto
          .col-12.bg-color1
            .p-4
              p.mb-0 Cuanto mayor sea el sistema, mayor es el número de recursos que deben dedicarse a su mantenimiento diario.
      .col-6.col-lg-3.bg-color2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/img4.png', style="width: 600px").m-auto
          .col-12.bg-color1
            .p-4
              p.mb-0 Los sistemas siempre forman parte de sistemas mayores y siempre pueden dividirse en sistemas menores.
      .col-6.col-lg-3.bg-color2.d-flex
        .row.bg-color1
          .col-12.px-0
            figure
              img(src='@/assets/curso/img5.png', style="width: 600px").m-auto
          .col-12.bg-color1
            .p-4
              p.mb-0 Los sistemas crecen.
    .row.justify-content-center.mb-5
      .col-10
        .row.align-items-center.justify-content-center.bg-color3(data-aos="fade-left")
          .col-lg-11
            figure.mb-5
              img(src='@/assets/curso/img1.svg').img-position1
            p.text-white #[b Según Arnold y Rodríguez (1990)], la Teoría General de Sistemas (TGS) se presenta como un ejemplo de representación científica. En sus selecciones conceptuales, no hay definiciones o relaciones con contenidos preestablecidos, pero la observación sí se puede dirigir con referencia a ellas, haciéndola aplicar en contextos identificables.
            .row.mb-5
              .col-12.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-white #[b  (Maida y Pacienzia, 2015).]
                .cuadro
    .row.justify-content-center
      .col-10
        .row
          .col-lg-6.mb-4.mb-lg-0
            p.mb-4 Los objetivos originales de la Teoría General de Sistemas son los siguientes:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span(style="color: #000000") 1
                | Impulsar el desarrollo de una terminología general que permita describir las características, funciones y comportamientos sistémicos.
              li 
                .lista-ol--cuadro__vineta
                  span(style="color: #000000") 2
                | Desarrollar un conjunto de leyes aplicables a todos estos comportamientos; y, por último.
              li 
                .lista-ol--cuadro__vineta
                  span(style="color: #000000") 3
                | Promover una formalización (matemática) de estas leyes.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img2.svg', style="width: 400px").m-auto
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1 Conceptos
    p.mb-5 A continuación, se describen los principales conceptos de la Teoría General de Sistemas, según conceptos de Arnold (1989) y otros autores:
    #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
      .carousel-inner
        .carousel-item.active
          .row
            .col-12.bg-color4
              .row.align-items-center
                .col-lg-8
                  .p-5
                    .row
                      .col-12.bg-white
                        .p-4
                          p #[b Sistema:] Se trata de un grupo organizado, compuesto por partes que son independientes,  que interactúan  y se relacionan formando un todo
                          p #[b Relación:] Es básicamente visualizada como la estructuración de una red.
                          p #[b Ambiente:] Hace referencia a las condiciones y hechos  que influyen sobre el comportamiento del sistema. 
                          p #[b Atributo:] Son las propiedades y características funcionales que definen las partes de un sistema. 
                          p.mb-0 #[b Energía:] La cantidad de energía que se mantiene en un sistema es igual a la de la suma de la energía importada menos la suma de la exportada.
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/img7.png', style="width: 400px").m-auto
        .carousel-item
          .row
            .col-12.bg-color4
              .row.align-items-center
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/img8.png', style="width: 400px").m-auto
                .col-lg-8
                  .p-5
                    .row
                      .col-12.bg-white
                        .p-4
                          p #[b Entropía:] Se trata de la máxima probabilidad de los sistemas en su consecutiva desorganización y su homogeneización con el ambiente.
                          p #[b Equifinalidad:] Consiste en que un sistema, iniciando con diferentes condiciones iniciales y por diferentes caminos, llegue a un mismo estado final.
                          p #[b Equilibrio:] Cuando los estados de equilibrio son alcanzados en sistemas abiertos por diversos caminos, se denomina equifinalidad. Mantener el equilibrio implica importación de recursos del ambiente.
                          p #[b Emergencia:] Cuando se realiza descomposición de sistemas en unidades menores, hasta el límite, se denomina emergencia.
                          p.mb-0 #[b Elemento:] Las partes o componentes que constituyen un sistema son llamadas elementos. Por ejemplo, objetos o procesos que son organizados en modelos.
        .carousel-item
          .row
            .col-12.bg-color4
              .row.align-items-center
                .col-lg-8
                  .p-5
                    .row
                      .col-12.bg-white
                        .p-4
                          p #[b Frontera:] Es aquella que permite separar al sistema de su entorno, definiendo lo que pertenece y lo que no.
                          p #[b Estructura:] Cuando las partes más o menos estables tienen interrelaciones que pueden ser identificadas en un momento dado, a esto se le llama estructura del sistema.
                          p #[b Función:] El output del sistema es denominado función, enfocada en mantener el sistema mayor en el que está inscrito.
                          p #[b Cibernética:] Permite la retroalimentación  de los procesos de control y de comunicación, igual en máquinas que en seres vivos (Wiener, 1979).
                          p #[b Circularidad:] Es el proceso de retroalimentación y metamorfosis, donde se refieren procesos de causa, así como cuando A causa a B y B causa C, pero se causa A.
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/img9.png', style="width: 400px").m-auto
        .carousel-item
          .row
            .col-12.bg-color4
              .row.align-items-center
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/img10.png', style="width: 400px").m-auto
                .col-lg-8
                  .p-5
                    .row
                      .col-12.bg-white
                        .p-4
                          p #[b Complejidad:] Permite indicar el número de elementos de un sistema (complejidad cuantitativa) y sus posibles interacciones (conectividad.)
                          p #[b Conglomerado:] Se dice que si la suma de las partes, componentes y atributos en un conjunto es igual al todo, se trata de un conglomerado (Johannsen, 1975).
                          p #[b Homeóstasis:] Se refiere a los organismos vivos en sistemas adaptables.
                          p #[b Información:] Se dice que la información es la corriente más importante con la que cuentan los sistemas complejos. 
                          p #[b Input/output:] Se trata de la elaboración de procesos de  entradas y elaboraciones de salidas de un sistema.
        .carousel-item
          .row
            .col-12.bg-color4
              .row.align-items-center
                .col-lg-8
                  .p-5
                    .row
                      .col-12.bg-white
                        .p-4
                          p #[b Input:] Se refiere a la recolección de recursos de su ambiente para dar inicio a las actividades del sistema.
                          p #[b Output:] Son las corrientes de salida de un sistema.
                          p #[b Organización:] Wiener se refiere a la organización como “una dependencia de las distintas partes organizadas” (Buckley, 1970, p. 127).
                          p #[b Modelo:] Permite identificar y mensurar relaciones sistemáticas complejas.
                          p #[b Morfogénesis:] Se caracteriza por modificar o crear sus formas, con el objeto de conservarse viable.
                          p #[b Morfostasis:] Se trata de los procesos de intercambio que se hacen con el ambiente para preservar una organización en un estado determinado.
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/img11.png', style="width: 400px").m-auto
        .carousel-item
          .row
            .col-12.bg-color4
              .row.align-items-center
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/img12.png', style="width: 400px").m-auto
                .col-lg-8
                  .p-5
                    .row
                      .col-12.bg-white
                        .p-4
                          p #[b Observación:] Incorpora el problema de la observación de sistemas de observadores.
                          p #[b Recursividad:] Hace referencia a incluir los resultados de las operaciones de un sistema en el mismo sistema.
                          p #[b Retroalimentación:] Es cuando un sistema abierto recoge información estudiando los efectos de sus decisiones.
                          p #[b Sinergia:] Es una consecuencia, un fenómeno que nace de las interacciones entre las partes de un sistema.
                          p #[b Variabilidad:] Muestra el número máximo de relaciones posibles.
                          p #[b] Se trata de hacer una medición de la capacidad de sobrevivencia y adaptación de un sistema.
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    separador.mb-5
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Tecnología e innovación
    p.mb-5 Para definir tecnología e innovación, se presentan los conceptos de varios autores:
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Concepto uno")
            .col-12
              p.text-small Coque (2002) atribuye la innovación tecnológica al mercado, aplicándose de forma permanente, donde su principal objetivo es aportar en el mejoramiento del desarrollo del sector productivo de bienes y servicios, así como incrementar la calidad de vida mediante el abastecimiento de excelentes productos a los consumidores. 
          .row(numero="2" titulo="Concepto dos")
            .col-12
              p.text-small Para Oberto (2007), solo se puede llamar innovación a una idea que se utiliza para cubrir una necesidad concreta.
          .row(numero="3" titulo="Concepto tres")
            .col-12
              p.text-small Otra definición fue la de Pavón y Goodman (1976), en la cual se expresa el concepto como un grupo de actividades suscritas en un tiempo y lugar explícito que llevan a la introducción con éxito por primera vez en el mercado; básicamente, se forma una idea de nuevos y buenos productos o servicios de gestión y organización.
          .row(numero="4" titulo="Concepto cuatro")
            .col-12
              p.text-small La innovación tecnológica en las empresas tiene características específicas, tiene limitaciones concernientes al origen natural de su fabricación y las características del consumo. Desde otro punto de vista, la innovación está por encima de la investigación y el desarrollo, en lo concerniente a las fases científicas, técnicas, comerciales y financieras necesarias para el éxito de los productos nuevos o mejorados en sus características, o la introducción de un nuevo servicio.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img3.svg', style="width: 400px").m-auto
    .h4.mb-5 Concepto de tecnología
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .h4.mb-5 Clasificación de tecnología
    p.mb-5 La clasificación de la tecnología está compuesta por diferentes formas y tecnologías que se pueden encontrar en una organización, y que se agrupan según sus atributos.
    .row.mb-5
      .col-12.bg-color5
        .p-5
          .titulo-sexto.color-acento-contenido
            p.mb-0 Clasificación de la tecnología
          figure(data-aos="fade-left")
            img(src='@/assets/curso/img4.svg', style="width: 950px").m-auto
    separador.mb-5
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Gestión tecnológica
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 El concepto de gestión de la tecnología se entiende como el proceso de administración, compra, aplicación y propagación de esta, en diferentes sectores, entre ellos:
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img5.svg', style="width: 550px").m-auto
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img13.png', style="width: 450px").m-auto
    .row.mb-5.p-5.bg-color6
      .col-12.my-4(data-aos="fade-left")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img6.svg', style="width: 650px").m-auto
          .col-lg-6
            p.mb-0 Comprende, desde luego, la administración del proceso de innovación, investigación y desarrollo (I+D), y se constituye como la mejor forma de encajar y utilizar tecnología para tolerar el desarrollo de productos y delimitar y mejorar procesos de orden industrial.
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12.bg-color7.mb-4
            .p-4
              p.mb-0 Uno de los objetivos de la gestión de la tecnología es evitar extender las inversiones, optimizar la productividad, aumentar la calidad, realizar propuestas de productos nuevos y servicios de mercado, así como promover el desarrollo de conocimiento nuevo.
          .col-12
            p.mb-0 En resumen, es un ejercicio que se establece como la forma de administrar, de la manera más efectiva, el conocimiento en la solución de los diferentes problemas de la sociedad, del ser humano y del medio ambiente.
      .col-lg-6
        figure
          img(src='@/assets/curso/img14.png', style="width: 650px").m-auto
    .row.justify-content-center.mb-5
      .col-10
        .row.align-items-center.justify-content-center.bg-color3(data-aos="fade-left")
          .col-lg-11
            figure.mb-5
              img(src='@/assets/curso/img1.svg').img-position1
            p.text-white Según Gaynor (1999, p. 5), hay una diferencia entre los conceptos de gestión y administración. La administración implica inspeccionar las principales tareas que son asignadas para conservar una organización a flote, y la gestión implica grados de creatividad, liderazgo, preocupación y riesgo por el desempeño futuro.
            .row.mb-5
              .col-12.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-white #[b  Gaynor (1999, p. 5)]
                .cuadro
    p Cabe aclarar que, en la realidad, la generalidad de las empresas administran sus recursos tecnológicos, sin embargo, no todas los saben gestionar, esencialmente, porque no fomentan el ejercicio de la innovación constante.
    separador.mb-5
    #t_1_4
    .titulo-segundo.color-secundario
      h2 1.4 Diagnósticos
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 El diagnóstico tecnológico se define como la actividad de observación conjunta entre empresa y expertos (internos, externos) implementada por medio del seguimiento de una metodología definida anteriormente, la cual pretende definir tanto las necesidades como el potencial tecnológico con el cual cuenta la empresa; obteniendo como resultado sus potencialidades y carencias. Determina aspectos de orden interno y externo.
        .cajon.color-primario.p-4
          p.mb-0 En el orden interno, se pretende inventariar y evaluar los recursos tecnológicos con los cuales cuenta la empresa; en el externo, lo que hacen los competidores o la diferencia que los separa de los líderes.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img15.png', style="width: 650px").m-auto
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img16.png', style="width: 650px").m-auto
      .col-lg-6
        p.mb-4 Un diagnóstico tecnológico facilita la identificación, determinación y evaluación del potencial tecnológico que tiene una empresa en el ambiente en el cual se expone; esto en una estrategia global.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Como objetivo principal], el diagnóstico tecnológico identifica una serie de capacidades de la empresa para un eficiente desarrollo de innovaciones. Básicamente, funciona como una herramienta que diferencia entre las capacidades que son requeridas y las que se tiene en el momento (brechas).
        a.anexo(:href="obtenerLink('/downloads/Anexo1.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xml.svg")
          .anexo__texto
            p #[b Anexo 2]. Matriz de evaluación.xls
    separador.mb-5
    #t_1_5
    .titulo-segundo.color-secundario
      h2 1.5 Soluciones
    .row.px-5.bg-color8
      .col-12
        .row.mb-5
          .col-lg-6
            p El abordaje unidireccional de los diferentes problemas de un sistema es uno de los grandes inconvenientes del proceso de innovación. Una de las formas de mejorar esta realidad y mirarla con una visión de amplia gama, que ofrezca diferentes opciones para así potencializar soluciones, es utilizar una técnica desarrollada por Alex F. Osborn y también complementada por varios autores, que consiste en realizar una serie de preguntas que estudian variadas posibilidades, logrando estimular las capacidades creativas de las personas.
            .dual-txt-deco
              p(style="position: relative; z-index: 1;") Así pues, las soluciones creativas tienen como objetivo estudiar alternativas de solución a un problema por medio de la aplicación metodológica de una serie de preguntas que facilitan la consideración de opciones diferentes a las ya existentes.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img17.png', style="width: 650px").m-auto
        .row.mb-4
          .col-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img8.svg', style="width: 850px").m-auto


</template>

<script>
export default {
  name: 'Tema1',
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
