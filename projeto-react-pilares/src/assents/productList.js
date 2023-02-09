//importar as imagens
import TerraAzul from "../image/terra-azul.jpeg";
import FacesLua from "../image/lua.jpg";
import Iss from "../image/estacao-espacial-internacional.jpg";
import PisarLua from "../image/pisar-na-lua.jpeg";
import PlanetaVermelho from "../image/red-planet.jpeg";
import Gravidade0 from "../image/experiencia.jpg";

//Lista de produtos

export const products = [
  {
    id: 1,
    name: "Blue Earth",
    category: "Viagem",
    description:
      "Nessa viagem ao espaço você poderá contemplar o azul da Terra. A viagem tem duração de 10 minutos.",
    price: 20000000.0,
    image: TerraAzul,
  },
  {
    id: 2,
    name: "Around the Moon",
    category: "Viagem",
    description:
      "Nessa viagem ao redor da lua você poderá ver o lado oculto e iluminado da Lua. A viagem tem duração de 48 horas.",
    price: 50000000.0,
    image: FacesLua,
  },
  {
    id: 3,
    name: "Space Station",
    category: "Viagem",
    description:
      "Nessa viagem você irá participar de uma missão na Estação Espacial Internacional - ISS. A viagem tem duração de 7 dias.",
    price: 68000000.0,
    image: Iss,
  },
  {
    id: 4,
    name: "Small Step",
    category: "Viagem",
    description:
      "Nessa viagem você poderá pisar na lua e dar mais um pequeno passo para a humanidade. A viagem tem duração de 3 dias.",
    price: 250000000.0,
    image: PisarLua,
  },
  {
    id: 5,
    name: "Red Planet",
    category: "Viagem",
    description:
      "Nessa viagem você poderá explorar o planeta vermelho. A viagem tem duração de 5 dias.",
    price: 150000000.0,
    image: PlanetaVermelho,
  },
  {
    id: 6,
    name: "Gravity 0",
    category: "Experiência",
    description:
      "A bordo da nossa aeronave você poderá viver a experiência de flutuar na gravidade zero, e sentir a mesma sensação de um astronauta no espaço.",
    price: 200000.0,
    image: Gravidade0,
  },
];
