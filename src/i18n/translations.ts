export const translations = {
  es: {
    nav: {
      about: "Conócenos",
      business: "Negocios",
      projects: "Proyectos",
      sustainability: "Sostenibilidad",
      people: "Personas",
      contact: "Contacto",
    },
    hero: {
      title: "Joint Constructions Magnament International",
      subtitle: "Construyendo el futuro con experiencia y confianza",
      cta: "Contáctanos",
    },
    about: {
      title: "Conócenos",
      description: "JCM Inc es una empresa líder en el sector de la construcción, especializada en la ejecución de proyectos de construcción de edificios, casas, urbanismos, complejos hidroeléctricos, vialidad, proyectos metalmecánicos y montajes industriales.",
      description2: "Contamos con un equipo de profesionales altamente cualificados y con amplia experiencia en el sector, lo que nos permite garantizar la calidad y eficiencia en cada uno de nuestros proyectos.",
    },
    business: {
      title: "Negocios",
      subtitle: "Áreas de especialización",
      categories: [
        {
          title: "Construcción Civil",
          description: "Edificios, casas, urbanismos, complejos hidroeléctricos y vialidad.",
        },
        {
          title: "Proyectos Metalúrgicos",
          description: "Tuberías, calderería, tanques de almacenamiento de petróleo.",
        },
        {
          title: "Electricidad",
          description: "Líneas de alta y baja tensión, transformadores, canalizaciones.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos de nuestros proyectos destacados",
    },
    sustainability: {
      title: "Sostenibilidad",
      subtitle: "Compromiso con el medio ambiente",
      description: "En JCM Inc estamos comprometidos con el desarrollo sostenible. Implementamos prácticas responsables en todos nuestros proyectos para minimizar nuestro impacto ambiental.",
      items: [
        {
          title: "Eficiencia Energética",
          description: "Optimizamos el consumo energético en todas nuestras obras.",
        },
        {
          title: "Materiales Sostenibles",
          description: "Priorizamos el uso de materiales ecológicos y reciclados.",
        },
        {
          title: "Gestión de Residuos",
          description: "Implementamos sistemas de gestión de residuos responsables.",
        },
      ],
    },
    people: {
      title: "Personas",
      subtitle: "Nuestro equipo humano",
      description: "Nuestro mayor activo es nuestro equipo humano. Contamos con profesionales altamente cualificados que comparten nuestra visión de excelencia y compromiso.",
    },
    contact: {
      title: "Contacto",
      subtitle: "Contáctenos",
      description: "Estamos disponibles para atender sus consultas y proyectos. No dude en comunicarse con nosotros.",
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar mensaje",
      address: "Dirección",
    },
    footer: {
      description: "Líderes en construcción e infraestructura industrial",
      quickLinks: "Enlaces rápidos",
      contact: "Contacto",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      about: "About Us",
      business: "Business",
      projects: "Projects",
      sustainability: "Sustainability",
      people: "People",
      contact: "Contact",
    },
    hero: {
      title: "Joint Constructions Magnament International",
      subtitle: "Building the future with experience and trust",
      cta: "Contact Us",
    },
    about: {
      title: "About Us",
      description: "JCM Inc is a leading company in the construction sector, specialized in the execution of construction projects for buildings, houses, urbanizations, hydroelectric complexes, road infrastructure, metallurgical projects and industrial assemblies.",
      description2: "We have a team of highly qualified professionals with extensive experience in the sector, which allows us to guarantee quality and efficiency in each of our projects.",
    },
    business: {
      title: "Business",
      subtitle: "Areas of specialization",
      categories: [
        {
          title: "Civil Construction",
          description: "Buildings, houses, urbanizations, hydroelectric complexes and road infrastructure.",
        },
        {
          title: "Metallurgical Projects",
          description: "Pipes, boiler work, oil storage tanks.",
        },
        {
          title: "Electricity",
          description: "High and low voltage lines, transformers, electrical channels.",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Some of our featured projects",
    },
    sustainability: {
      title: "Sustainability",
      subtitle: "Commitment to the environment",
      description: "At JCM Inc we are committed to sustainable development. We implement responsible practices in all our projects to minimize our environmental impact.",
      items: [
        {
          title: "Energy Efficiency",
          description: "We optimize energy consumption in all our works.",
        },
        {
          title: "Sustainable Materials",
          description: "We prioritize the use of ecological and recycled materials.",
        },
        {
          title: "Waste Management",
          description: "We implement responsible waste management systems.",
        },
      ],
    },
    people: {
      title: "People",
      subtitle: "Our human team",
      description: "Our greatest asset is our human team. We have highly qualified professionals who share our vision of excellence and commitment.",
    },
    contact: {
      title: "Contact",
      subtitle: "Contact Us",
      description: "We are available to answer your queries and projects. Do not hesitate to contact us.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send message",
      address: "Address",
    },
    footer: {
      description: "Leaders in construction and industrial infrastructure",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved",
    },
  },
};

export type Language = "es" | "en";
export type TranslationKeys = typeof translations.es;
