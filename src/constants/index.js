import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
{/* MENU PRINCIPAL */}
export const navLinks = [
  {
    id: "#about",
    title: "INTRO",
  },
  {
    id: "#services",
    title: "SERVICIOS",
  },
  {
    id: "https://goldspy.site/panel",
    title: "PANEL DE USUARIOS",
  },
  {
    id: "https://api.whatsapp.com/send/?phone=573022102471&text=Hola+me+interesa&type=phone_number&app_absent=0",
    title: "WHATSAPP",
  },
  {
    id: "#contact",
    title: "EMAIL",
  },
];
{/* MENU PRINCIPAL */}
const services = [
  {
    title: "Hackeo de WhatsApp",
    icon: web,
  },
  {
    title: "Hackeo de Facebook",
    icon: mobile,
  },
  {
    title: "Hackeo de Instagram",
    icon: backend,
  },
  {
    title: "Hackeo de Correos Electrónicos",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Hack de WhatsApp",
    company_name: "WHATSAPP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Realice un seguimiento de todas las actividades que suceden en el teléfono sin ser detectado.",
      "Tendrá acceso a todos los SMS, chats de WhatsApp, registros de llamadas, contactos, historial del navegador y ubicación GPS.",
      "¡Todos tus datos se actualizan en tiempo real! Nos aseguramos de que esté al día con lo que sucede todo el día, todos los días.",
      "No es necesario hacer jailbreak o rootear el dispositivo de destino para habilitar cualquier característica.",
      "Puede rastrear todos los tipos de datos sin que el propietario del dispositivo lo sepa. La intervención del dispositivo es completamente indetectable.",
    ],
  },
  {
    title: "Hack de Facebook",
    company_name: "FACEBOOK",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Sin descarga. Puedes espiar el Facebook y Messenger Hackeado directamente desde nuestro panel web",
      "Nuestro servicio de soporte funciona 7/24. Usted es atendido directamente por una persona especializada en Hacking",
      "Eres 100% anónimo. Discreto y confidencial, toda la información que veas y descargue sera encriptada con la tecnología mas moderna en cifrado",
      "Desde nuestro panel podrá hackear el Messenger de Facebook, esto realizará una copia de todos los mensajes, fotos, videos, notas de audio y podrá visualizarlo desde cualquier navegador web",
    ],
  },
  {
    title: "Hack de Instagram",
    company_name: "INSTAGRAM",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Sin descarga. Puedes espiar el Instagram directamente desde nuestro panel web",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Hack de Correos Electrónicos",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Conseguí monitorear el WhatsApp de mi esposo. Estuve espiando durante dos meses y descubrí que era infiel. Sé que es inmoral espiar conversaciones ajenas, pero vivir engañada es peor.",
    name: "Sara Gonzalez",
    designation: "",
    company: "Hack de Whatsapp",
    image: "https://loremflickr.com/320/240/selfie,girl",
  },
  {
    testimonial:
      "Gracias a este servicio puedo saber muy bien a que tipos de personas contrato en mi negocio",
    name: "Cristian Cardona",
    designation: "",
    company: "Hack de Whatsapp",
    image: "https://loremflickr.com/320/240/selfie,boy",
  },
  {
    testimonial:
      "Puedo mantenerme al dia con lo que hacen mis hijos, con quienes hablan y sobre que cosas",
    name: "Marcela Giraldo",
    designation: "",
    company: "Hack de Instagram",
    image: "https://loremflickr.com/320/240/selfie,girl,asian",
  },
];

const projects = [
  {
    name: "ESPIA A TU PAREJA",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "PROTEGE A LOS NIÑOS",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "SUPERVISA A TUS EMPLEADOS",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
