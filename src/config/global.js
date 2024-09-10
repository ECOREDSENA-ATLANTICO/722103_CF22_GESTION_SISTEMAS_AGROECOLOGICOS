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
            titulo: 'Estrategia de mercado',
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
        download: 'downloads/722103_CF22_DU.zip',
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
      tema: 'Cámara de Comercio de Medellín para Antioquia',
      referencia: 'Cámara de Comercio de Medellín. 2021',
      tipo: 'Guía',
      link:
        'https://www.camaramedellin.com.co/Portals/0/Documentos/2019/GuiaTipoSocietario__FormatoPDF_ago20.pdf',
    },
    {
      tema: 'Análisis de FODA ',
      referencia: 'FAO. (2018)',
      tipo: 'Diapositivas',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/83189797-00f4-49ec-ac96-878c4806fa1e/content',
    },
    {
      tema: 'Las Buenas Prácticas Agrícolas (BPA)',
      referencia: 'Instituto Colombiano Agropecuario. (2021)',
      tipo: 'Resolución',
      link: 'https://www.ica.gov.co/areas/agricola-pecuaria/bpa-bpg.aspx',
    },
    {
      tema: 'Normas Nacionales',
      referencia: 'Instituto Colombiano Agropecuario. (2021)',
      tipo: 'Artículo',
      link:
        'https://www.ica.gov.co/normatividad/normas-nacionales/resoluciones',
    },
    {
      tema: 'Formulación y evaluación de proyectos agropecuarios ',
      referencia: 'Puentes, M.G. 2011',
      tipo: 'Libro',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2015/07/Formulacion-y-evaluacion-de-proyectos-agropecuarios-Vista-preliminar-del-libro.pdf',
    },
    {
      tema: 'Módulo STORM',
      referencia: 'Superintendencia de sociedades. Cartillas y guías',
      tipo: 'Cartillas y guías',
      link:
        'https://www.supersociedades.gov.co/web/asuntos-economicos-societarios/manuales-y-cartillas',
    },
    {
      tema: 'Tipos de contrato laborales',
      referencia: 'Ministerio del trabajo',
      tipo: 'Otro',
      link:
        'https://www.mintrabajo.gov.co/web/empleosinfronteras/conoce-los-tipos-de-contrato-de-trabajo',
    },
    {
      tema:
        'Cartilla de información y orientación laboral para la población colombiana en situación de retorno',
      referencia: 'Ministerio del trabajo',
      tipo: 'Cartilla',
      link:
        'https://migrantprotection.iom.int/es/resources/leafletbooklet/cartilla-de-informacion-y-orientacion-laboral-para-la-poblacion-colombiana',
    },
    {
      tema: 'Decreto 2616 del 20 de noviembre de 2013',
      referencia: 'Presidencia de la república',
      tipo: 'Resolución',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/NOVIEMBRE/20/DECRETO%202616%20DEL%2020%20DE%20NOVIEMBRE%20DE%202013.pdf',
    },
    {
      tema: 'Abecé de la contratación por semanas',
      referencia: 'Ministerio del trabajo',
      tipo: 'Cartilla',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/241327/abece_cotizacion_por_semanas.pdf',
    },
    {
      tema: 'Normatividad ambiental y sanitaria',
      referencia: 'Unidad de Planeación Minero Energética (UPME).',
      tipo: 'Normatividad',
      link:
        'http://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm#BM2_1_Normas_y_principios_ambientales_co',
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
      referencia: 'Agrosana. (2015). Política de Calidad. Agrosana.',
      link: 'https://agrocima.es/politica-de-calidad/',
    },
    {
      referencia: 'Agrosavia. (2021). Qué hacemos. Valores.',
      link: 'https://www.agrosavia.co/que-hacemos',
    },
    {
      referencia:
        'Cámara de Comercio de Medellín. (2021). Guías de tipos societarios.',
      link:
        'https://www.camaramedellin.com.co/Portals/0/Documentos/Guias-Mercantil/NuevaGuiaTipoSocietario__2022_002.pdf',
    },
    {
      referencia:
        'Decreto 2616 de 2013. (Ministerio de Trabajo y Protección Social). Por medio del cual se regula la cotización a seguridad social para trabajadores dependientes que laboran por períodos inferiores a un mes, se desarrolla el mecanismo financiero y operativo de que trata el artículo 172 de la Ley 1450 de 2011 y se dictan disposiciones tendientes a lograr la formalización laboral de los trabajadores informales. Noviembre 20 de 2013.',
      link: '',
    },
    {
      referencia:
        'Enciclopedia Económica (2021). Mercadeo. Funciones del Mercado.',
      link: '',
    },
    {
      referencia: 'FAO. (2018). Análisis FODA.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/83189797-00f4-49ec-ac96-878c4806fa1e/content',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2021). Buenas prácticas agrícolas y ganaderas. ICA.',
      link: 'https://www.ica.gov.co/areas/agricola-pecuaria/bpa-bpg.aspx',
    },
    {
      referencia:
        'Jiménez, L.W. (2010). Contabilidad de Costos. FOCO Ediciones Bogotá.',
      link: '',
    },
    {
      referencia:
        'Martínez, A.J. (2017). El ciclo de vida del producto. Econosublime.',
      link: 'https://www.econosublime.com/2020/01/ciclo-vida-producto.html',
    },
    {
      referencia:
        'Mendieta. 2005. Formulación y evaluación de proyectos de inversión agropecuaria. Universidad Agraria. Nicaragua.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Trabajo y Protección Social. (2014). Abecé de la cotización por semanas.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/241327/abece_cotizacion_por_semanas.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo y Protección Social. (2021). Conoce los tipos de contrato de trabajo.',
      link:
        'https://www.mintrabajo.gov.co/web/empleosinfronteras/conoce-los-tipos-de-contrato-de-trabajo',
    },
    {
      referencia:
        'Ministerio de Trabajo y Protección Social. (2017). Información y Orientación laboral para la población colombiana en situación de retorno.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59036289/CARTILLA+EMPLEO+RETORNO+op+3+completo+baja+11-10-2017.pdf',
    },
    {
      referencia:
        'Miranda, M.J. (1999). Gestión de proyectos. Cuarta Edición. MM Editores.',
      link: '',
    },
    {
      referencia:
        'Nuño, L.P. (2012). Administración de Pequeñas Empresas. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Puentes, M.G. 2011. Formulación y evaluación de proyectos agropecuarios. Ecoe.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2014). El Contrato de Trabajo. SENA.',
      link: '',
    },
    {
      referencia:
        'Universidad Autónoma de México. Estudio Técnico. Facultad de Economía. (pp.53-93).',
      link: 'http://www.economia.unam.mx/secss/docs/tesisfe/GomezAM/cap2a.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética UPME. (2021). Normatividad Ambiental y Sanitaria.',
      link:
        'http://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm#BM2_1_Normas_y_principios_ambientales_co',
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
          cargo: 'Productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>full stack</em> ',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Eulices Orduz Amézquita',
          cargo: 'Diseñador de contenidos digitales',
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
          cargo: 'Validador de diseño y contenido',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de recursos digitales',
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
          cargo: 'Validador de recursos digitales',
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
