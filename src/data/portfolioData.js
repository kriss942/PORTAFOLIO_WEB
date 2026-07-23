// ============================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// ============================================================================
// Este es el ÚNICO archivo que necesitas editar para personalizar tu portafolio
// con tu propia información. Los componentes en src/components/ solo leen estos
// datos, así que puedes cambiar todo aquí sin tocar ningún componente.
//
// Ver README.md -> "Cómo editar tu portafolio" para ejemplos guiados.
// ============================================================================

import profilePlaceholder from '../assets/images/profile-placeholder.svg'
import projectPlaceholder from '../assets/images/project-placeholder.svg'

// ----------------------------------------------------------------------------
// PERFIL: información principal que aparece en la sección Hero
// ----------------------------------------------------------------------------
export const profileData = {
  name: 'Isabel Cristina Salazar Herrera',
  title: 'Estudiante de Ingeniería de Sistemas',
  tagline: 'Escucha Activa',
  location: 'El Retiro, Antioquia',
  // Para usar tu propia foto: reemplaza el archivo en src/assets/images/profile-placeholder.svg
  // (o agrega tu foto, ej. profile.jpg, e impórtala arriba y úsala aquí).
  photo: profilePlaceholder,
}

// ----------------------------------------------------------------------------
// REDES SOCIALES Y CONTACTO: se usan en el Hero, la sección Contacto y el Footer
// ----------------------------------------------------------------------------
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/isabel-cristina-salazar-herrera-b07997166',
  github: 'https://github.com/kriss942',
  email: 'kristina448@gmail.com',
}

// ----------------------------------------------------------------------------
// SOBRE MÍ: párrafo de presentación
// ----------------------------------------------------------------------------
export const aboutData = {
  paragraph:
    'Administradora de Empresas, especialista en Gerencia Financiera con más de 18 años de experiencia ' +
    'laboral, incluyendo 10 años en dirección administrativa y financiera en el sector industrial y de ' +
    'construcción. Como profesional he desarrollado una amplia visión del proceso administrativo, cuento ' +
    'con habilidades para la planificación, programación, supervisión, dirección y control de procesos, ' +
    'poseo experiencia en coordinación del recurso humano, logística de insumos, contabilidad, gestión ' +
    'comercial, de cartera y finanzas. Poseo aptitudes de liderazgo, proactividad, iniciativa y disposición ' +
    'para aprender, asumiendo con ímpetu los retos.',
}

// ----------------------------------------------------------------------------
// HABILIDADES: lista simple de objetos {name, icon}.
// El icono es un emoji para no depender de imágenes externas ni librerías.
// Agrega o quita objetos de este array para actualizar la sección.
// ----------------------------------------------------------------------------
export const skillsData = [
  { name: 'Liderazgo', icon: '🧭' },
  { name: 'Organización y planificación', icon: '🗂️' },
  { name: 'Gestión financiera y corporativa', icon: '💰' },
  { name: 'Dirección de equipos', icon: '🤝' },
  { name: 'Comunicación asertiva y efectiva', icon: '💬' },
  { name: 'Perfil analítico y resolutivo', icon: '🎯' },
]

// ----------------------------------------------------------------------------
// PROYECTOS: cada objeto es una tarjeta en la sección Proyectos.
// Para agregar un proyecto nuevo, copia un objeto del array y edita sus valores.
// Para quitar uno, simplemente elimina su objeto del array.
// Sección dejada vacía intencionalmente: se irá llenando con los proyectos
// del semestre a medida que avancen.
// ----------------------------------------------------------------------------
export const projectsData = []

// ----------------------------------------------------------------------------
// EXPERIENCIA Y EDUCACIÓN: timeline unificado, ordenado del más reciente al más
// antiguo. El campo "type" ('work' | 'education') controla el color del badge.
// ----------------------------------------------------------------------------
export const experienceData = [
  {
    id: 1,
    type: 'education',
    role: 'Ingeniería de Sistemas',
    place: 'Institución Universitaria CEIPA',
    period: 'En curso',
    description: 'Formación técnica orientada al desarrollo de software y gestión de la información.',
  },
  {
    id: 2,
    type: 'work',
    role: 'Directora Administrativa y Financiera',
    place: 'Constructora Precomprimidos',
    period: '13 de enero de 2020 - Actualidad',
    description:
      'Dirección administrativa y financiera en el sector industrial y de construcción, con gestión ' +
      'de recurso humano, logística de insumos, contabilidad y finanzas.',
  },
  {
    id: 3,
    type: 'education',
    role: 'Especialista en Gerencia Financiera',
    place: 'Universidad Pontificia Bolivariana',
    period: '2018',
    description: '',
  },
  {
    id: 4,
    type: 'education',
    role: 'Administradora de Empresas',
    place: 'Universidad Pontificia Bolivariana',
    period: '2016',
    description: '',
  },
  {
    id: 5,
    type: 'education',
    role: 'Tecnóloga en Administración y Finanzas',
    place: 'Universidad Remington',
    period: '2006',
    description: '',
  },
]

// ----------------------------------------------------------------------------
// CONTACTO: se usa en la sección Contacto (formulario -> mailto) y el Footer.
// ----------------------------------------------------------------------------
export const contactData = {
  email: 'kristina448@gmail.com',
  phone: '+57 305 258 5804',
  availability: 'Disponible para proyectos de práctica y oportunidades que integren gestión financiera y tecnología',
}