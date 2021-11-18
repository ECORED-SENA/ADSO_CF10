export default {
  global: {
    componenteFormativo: 'Especificaciones de software',
    descripcionCurso:
      'En este componente formativo, se abordan los saberes referentes a la Teoría general de sistemas, licencias software, derechos de autor, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tecnología e innovación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Gestión tecnológica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diagnósticos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Soluciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Licencias de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativa',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de licencias',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Derechos de autor',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fichas técnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elaboración',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Diligenciamiento',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arnold, M. (1989). Teoría de Sistemas. Nuevos paradigmas: Enfoque de Niklas Luhmann. Revista Paraguaya de Sociología, 26(75), p. 51-72.',
    },
    {
      referencia:
        'Coque, J. (2002). La innovación tecnológica en las sociedades cooperativas y otras organizaciones de participación. Revista de Estudios Cooperativos REVESCO, 78, p. 7-25. ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/1114242.pdf',
    },
    {
      referencia:
        'Free Software Foundation Europe. (2005). Campaña “Nosotros Hablamos de Software Libre”. Espacio Linux. ',
      link:
        'https://www.espaciolinux.com/2004/01/nosotros-hablamos-de-software-libre/',
    },
    {
      referencia:
        'Gaynor, G. (1999). Manual de gestión en tecnología: Una estrategia para la competitividad de la empresa. McGraw-Hill. ',
    },
    {
      referencia:
        'Hammond, D. (2003). The Science of Synthesis: Exploring the Social Implications of General Systems Theory. University Press of Colorado. ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=TBvjCwAAQBAJ&oi=fnd&pg=PA103&dq=+General+Systems+Theory+bertalanffy&ots=Ihf9vKSIAi&sig=lmXibhgxqJHaZ1H1zHsueBiPnaw#v=onepage&q=General%20Systems%20Theory%20bertalanffy&f=false',
    },
    {
      referencia:
        'Johannsen, O. (1975). Introducción a la Teoría General de Sistemas. Universidad de Chile',
    },
    {
      referencia:
        'Malaver, F., Vargas, M. y Cerda, A. (2003). La innovación tecnológica en la industria colombiana: un estudio en dos cadenas industriales. Pontificia Universidad Javeriana.',
    },
    {
      referencia:
        'Oberto, A. (2007). Conocimiento tecnológico e innovación en el sector de termoplásticos del estado Zulia. Venezuela. Universidad del Zulia.',
    },
    {
      referencia:
        'Pavón, J. y Goodman, R. (1976). Proyecto MODELTEC. La planificación del desarrollo tecnológico en el caso español. Centro para el Desarrollo Tecnológico Industrial.',
    },
    {
      referencia:
        'Pérez, M. y Fernández, L. (2003). Técnica, Ciencia, Tecnología e Innovación. International Thomson Editores.',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería de Software. Pearson Educación. ',
      link:
        'https://sistemamid.com/panel/uploads/biblioteca/2018-06-11_03-37-12144643.pdf',
    },
    {
      referencia:
        'Wiener, N. (1979). Cibernética y Sociedad. Editorial Sudamericana.',
    },
  ],
  glosario: [
    {
      termino: 'Innovación',
      significado:
        'dinámica económica y social para la transformación del conocimiento científico y tecnológico.',
    },
    {
      termino: 'GPL',
      significado:
        'acrónimo en inglés de General Public License (Licencia Pública General). Esta licencia regula los derechos de autor de los programas de <i>software</i> libre.',
    },
    {
      termino: '<em>Open source</em>',
      significado:
        'es una expresión de la lengua inglesa que pertenece al ámbito de la informática, que traduce “fuente abierta”.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.',
    },
  ],
  complementario: [
    {
      texto:
        'ONGAWA ONGD. (2012, septiembre 11). Tecnología, innovación, ¿desarrollo humano? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OrLM7awX5Ls',
    },
    {
      texto:
        'Pacheco, L. [ Administracion 101]. (2015, marzo 2). Gestión Tecnológica: Conceptos y Dimensiones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iiT9giJlhTU',
    },
    {
      texto: 'Ármate Abogados. (2020). Licencia de <i>Software</i>.',
      tipo: 'Artículo',
      link: 'https://armate.cl/web/2020/11/03/licencia-de-software/',
    },
    {
      texto:
        'Evaluando <i>Software</i>. (2021). Las licencias de <i>software</i>.',
      tipo: 'Artículo',
      link: 'https://www.evaluandosoftware.com/las-licencias-software/',
    },
    {
      texto:
        'Bazán, V. (2020). ¿Conoces los tipos de licencia de software? Aquí te desglosamos el tema. <i>OK hosting</i>.',
      tipo: 'Artículo',
      link: 'https://okhosting.com/blog/tipos-de-licencia-de-software',
    },
    {
      texto:
        'Firma Legal Colombia. (2021, mayo 20). DERECHOS DE AUTOR EN COLOMBIA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JAfXwjut_ig',
    },
    {
      texto:
        'Leancase: Asesoría para emprendedores. (2020, junio 25). Derechos de autor sobre el <i>Software</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0pUHYYFQIPI',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Zulema Yidney León Escobar',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
