//importar as imagens
import BlueEarth from "../image/blue-earth.png";
import AroundTheMoon from "../image/around-the-moon.png";
import Iss from "../image/iss.png";
import SmallStep from "../image/small-step.png";
import RedPlanet from "../image/red-planet.png";
import Gravity0 from "../image/gravity0.png";

//Lista de produtos

export const products = [
  {
    id: 1,
    name: "Blue Earth",
    category: "Viagem",
    description:
      "Nessa viagem ao espaço você poderá contemplar o lindo azul da Terra e descobrir se ela é redonda ou quadrada.",
    duration: "10 minutos",
    price: 20000000.0,
    image: BlueEarth,
    seats: 8,
  },
  {
    id: 2,
    name: "Around the Moon",
    category: "Viagem",
    description:
      "Nessa viagem ao redor da lua você poderá ver o lado oculto e iluminado da Lua e descobrir o que tem do outro lado.",
    duration: "48 horas",
    price: 50000000.0,
    image: AroundTheMoon,
    seats: 6,
  },
  {
    id: 3,
    name: "Space Station",
    category: "Viagem",
    description:
      "Nessa viagem você irá participar de uma missão na Estação Espacial Internacional - ISS e descobrir como seria a vida morando fora da Terra.",
    duration: "7 dias",
    price: 68000000.0,
    image: Iss,
    seats: 4,
  },
  {
    id: 4,
    name: "Small Step",
    category: "Viagem",
    description:
      "Nessa viagem você poderá pisar na lua e dar mais um pequeno passo para a humanidade e assim descobrir se é verdade que o homem já pisou lá.",
    duration: "3 dias",
    price: 250000000.0,
    image: SmallStep,
    seats: 2,
  },
  {
    id: 5,
    name: "Red Planet",
    category: "Viagem",
    description:
      "Nessa viagem você irá para Mercúrio e poderá explorar o planeta vermelho e descobrir se existe vida por lá.",
    duration: "5 dias",
    price: 150000000.0,
    image: RedPlanet,
    seats: 2,
  },
  {
    id: 6,
    name: "Gravity 0",
    category: "Experiência",
    description:
      "A bordo da nossa aeronave você poderá viver a experiência de flutuar na gravidade zero, e descobrir qual é a sensação de um astronauta no espaço.",
    duration: "30 minutos",
    price: 200000.0,
    image: Gravity0,
    seats: 10,
  },
];
