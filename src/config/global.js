export default {
  global: {
    componenteFormativo:
      'Formulación y evaluación de los componentes de estudio para proyectos agroecológicos',
    descripcionCurso:
      'Este componente formativo comprende el análisis y descripción de los estudios que conforman la formulación y evaluación de los proyectos, entre los que se destacan el de mercadeo, técnico, administrativo, ambiental y financiero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require(''),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require(''),
      // },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estudio de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación del bien o servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identificación de la demanda',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Identificación de la oferta',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Identificación del precio',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estrategia de mercadeo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estudio técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Localización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tamaño',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación y descripción del proceso',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Organización y cronograma',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estudio administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planeación estratégica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis DOFA',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Organigrama',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aspecto legal',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estudio ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Legislación ambiental',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Evaluación e impactos ambientales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estudio financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Inversiones y costos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Flujo de caja',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Punto de equilibrio',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF22_DU.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes y servicios que el mercado necesita para cubrir una necesidad o la satisfacción de un deseo, con características previamente definidas y a un precio establecido.',
    },
    {
      termino: 'Mercado',
      significado:
        'Es el escenario en donde se establecen relaciones de intercambio de bienes y servicios entre ofertantes y demandantes de dichos bienes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baca Urbina, G. (2001). Evaluación de proyectos. McGraw Hill México D.F. ISBN 78-970-10-3001-1',
      link: '',
    },
    {
      referencia:
        'Jiménez, L. (2010). Contabilidad de Costos. Clasificación de los costos. Bogotá DC, 79',
      link: '',
    },
    {
      referencia:
        'Mendieta, A. (2005). Formulación y evaluación de proyectos de inversión agropecuaria. Universidad Agraria. Managua, Nicaragua.',
      link: '',
    },
    {
      referencia:
        'Ruiz, E., Ruiz, M, y Soriano, L.  (2015). Criterios de evaluación de impacto ambiental en el sector minero. Industrial Data, 18(2),99-112.ISSN: 1560-9146. Disponible en:   ',
      link: 'https://www.redalyc.org/articulo.oa?id=81643819013',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de desarrollo curricular',
          centro:
            'Centro industrial del diseño y la manufactura Regional Santander',
        },

        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta temática',
          centro: 'Centro de comercio y servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de diseño y metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Producción audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Producción audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Rafael bladimir Pérez Meriño',
          cargo: 'Desarrollo <em>full stack</em> ',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Eulices Orduz Amézquita',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
