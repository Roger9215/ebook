// Lista de vídeos e capítulos
const videos = [
  'videos/capa.mp4',
  'videos/caixa.mp4',
  'videos/planetas.mp4',
  'videos/asteroides.mp4',
  'videos/cometas.mp4',
  'videos/nebulosa.mp4',
  'videos/fim.mp4' 

];

const capitulos = [
  {
    titulo: "Introdução – O Sonho Estrelado de Léo",
    texto: "Léo está na janela de seu quarto, olhando para o céu estrelado. Ele sonha em ser um astronauta. De repente, uma estrela cadente pousa em seu quintal — é o Cometa Cintilante, que está perdido. Léo decide ajudá-lo a voltar para casa."
  },
  {
    titulo: "Capítulo 1 – Preparando a Nave Imaginária",
    texto: "Léo e o Cometa usam a imaginação para transformar uma caixa de brinquedos em uma nave espacial. O Cometa ensina os controles e as regras de segurança para uma viagem divertida."
  },
  {
    titulo: "Capítulo 2 – Estação dos Planetas Sorridentes",
    texto: "Eles chegam a uma estação onde os planetas têm rostos sorridentes! Léo aprende sobre Mercúrio, Vênus, Marte e Saturno, cada um com sua personalidade e cor especial."
  },
  {
    titulo: "Capítulo 3 – Campo de Asteroides Brincalhões",
    texto: "A nave passa por um campo de asteroides que adoram brincar de esconde-esconde. Léo aprende a reconhecer diferentes formas de rochas espaciais."
  },
  {
    titulo: "Capítulo 4 – Dança das Estrelas Cadentes",
    texto: "Eles assistem estrelas cadentes dançando em formação. O Cometa explica como as constelações guiam viajantes do espaço."
  },
  {
    titulo: "Capítulo 5 – O Enigma da Nebulosa do Arco-Íris",
    texto: "Antes de chegar em casa, o Cometa e Léo precisam resolver um enigma de cores que guarda a entrada da Nebulosa do Arco-Íris."
  },
  {
    titulo: "Conclusão – Um Amigo para Sempre",
    texto: "O Cometa agradece a Léo e promete visitá-lo novamente. Léo acorda em sua cama e vê uma pequena luz piscando na janela — a lembrança de sua aventura cósmica!"
  }



  
];

let capAtual = 0;
const player = document.getElementById("videoPlayer");
const page = document.getElementById("page");
const content = document.getElementById("pageContent");
const counter = document.getElementById("chapterCounter");

// Inicialização
player.src = videos[capAtual];
atualizarCapitulo();

function proximo() {
  if (capAtual < capitulos.length - 1) {
    capAtual++;
    animarVirada();
  }
}

function anterior() {
  if (capAtual > 0) {
    capAtual--;
    animarVirada();
  }
}

function atualizarCapitulo() {
  const cap = capitulos[capAtual];
  content.innerHTML = `<h2>${cap.titulo}</h2><p>${cap.texto}</p>`;
  player.src = videos[capAtual];
  player.play();
  counter.textContent = `Capítulo ${capAtual + 1} de ${capitulos.length}`;
}

// Efeito de virada suave
function animarVirada() {
  page.classList.add("flip");
  setTimeout(() => {
    page.classList.remove("flip");
    page.classList.add("fade");
    setTimeout(() => {
      page.classList.remove("fade");
      atualizarCapitulo();
    }, 400);
  }, 600);
}
