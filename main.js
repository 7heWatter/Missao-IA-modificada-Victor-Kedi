const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Ao ser convidado para uma festa, qual é a reação comum? ",
        alternativas: [
            {
                texto: " Demonstra entusiasmo para conhecer gente nova.",
                afirmacao: [
                    " Você é o tipo de pessoa que se sente energizada em ambientes sociais. Para você, a interação com os outros é a principal fonte de energia, e você adora a oportunidade de conversar e criar novas conexões. ",
                    "Você vê cada festa como uma chance empolgante de expandir seu círculo social, aproveitando a diversidade de pessoas para trocar ideias e experiências.",
                    "Ambientes festivos te motivam a se expressar livremente, e você frequentemente sai desses eventos com novas amizades ou histórias para contar.",
                ]
            },
            {
                texto: " Prefere eventos mais calmos e selecionados. ",
                afirmacao: [
                    " Você prefere encontros íntimos e conversas profundas, recarregando suas energias no tempo a sós ou com poucas pessoas de confiança. ",
                    "Você valoriza momentos de conexão genuína em ambientes tranquilos, onde pode ter conversas significativas sem a pressão de grandes multidões.",
                    "Para você, eventos menores com pessoas próximas permitem um relaxamento maior, recarregando suas energias para interações futuras.",
                ]
            }
        ]
    },
    {
        enunciado: " Como você se sente depois de um dia de trabalho em grupo? ",
        alternativas: [
            {
                texto: " Revigorado(a), pronto para sair de novo! ",
                afirmacao: [
                    " Você se recarrega com a interação social e se sente mais produtiva e inspirada em ambientes de grupo, onde a troca de ideias estimula sua criatividade e colaboração. ",
                    "Você se sente motivado pela energia coletiva do grupo, que estimula sua criatividade e vontade de colaborar.",
                    "Trabalhar com colegas te inspira, e você busca mais oportunidades para interagir e compartilhar ideias."
                ]
            },
            {
                texto: " Precisa de um tempo a sós para relaxar. ",
                afirmacao: [
                    " Você precisa de tempo sozinho para se reconectar, pois o excesso de estímulo social pode te cansar. Por isso, valoriza momentos de paz para renovar suas energias e organizar suas ideias. ",
                    "Após interações intensas, atividades solitárias como leitura ou reflexão te ajudam a recarregar as energias.",
                    "Momentos de introspecção são essenciais para processar ideias e manter seu equilíbrio emocional."
                ]
            }
        ]
    },

    {
        enunciado: " Qual o seu estilo em uma conversa em grupo? ",
        alternativas: [
            {
                texto: " Gosta de contar histórias e participar ativamente. ",
                afirmacao: [
                    " Você tem uma habilidade natural de se comunicar, fazendo qualquer conversa fluir e se tornando a alma do ambiente. ",
                    "Você se destaca em conversas em grupo, usando sua energia contagiante para compartilhar histórias que engajam e conectam as pessoas ao seu redor.",
                    "Sua presença ativa torna os diálogos mais dinâmicos, e você gosta de incentivar a participação de todos, criando um ambiente vibrante e acolhedor."
                ]
            },
            {
                texto: " Prefere ouvir mais do que falar e contribuir apenas quando necessário. ",
                afirmacao: [
                    " Você é um ouvinte atento(a) e tranquilo(a), sempre absorvendo as informações com calma. Suas contribuições são sempre precisas e vêm com propósito, adicionando valor à conversa. ",
                    "Você valoriza momentos de conexão genuína em ambientes tranquilos, onde pode ter conversas significativas sem a pressão de grandes multidões.",
                    "Para você, eventos menores com pessoas próximas permitem um relaxamento maior, recarregando suas energias para interações futuras."
                ]
            }
        ]
    },
    {
        enunciado: " No fim de semana ideal, o que não pode faltar?",
        alternativas: [
            {
                texto: " Eventos com amigos e família. ",
                afirmacao: [
                    " Para você, o fim de semana perfeito é cheio de movimento e socialização. Sua agenda fica repleta de eventos, sempre em busca de novas interações e experiências. ",
                    "Você se sente mais vivo em encontros animados, onde pode compartilhar momentos alegres e fortalecer laços com amigos e familiares.",
                    "Planejar atividades sociais, como jantares ou passeios, é sua forma de aproveitar ao máximo o fim de semana, criando memórias inesquecíveis."
                ]
            },
            {
                texto: " Tempo para ler, ver um filme ou simplesmente relaxar em casa. ",
                afirmacao: [
                    " Para você, o fim de semana é um verdadeiro refúgio, onde a paz e o tempo sozinho são essenciais para recarregar as energias e encontrar equilíbrio. ",
                    "Você encontra prazer em atividades tranquilas, como mergulhar em um bom livro ou filme, que permitem refletir e se conectar consigo mesmo.",
                    "Momentos de calma em casa são sua maneira de restaurar o equilíbrio, preparando-se para a semana com a mente renovada e relaxada."
                ]
            }
        ]
    },
    {
        enunciado: " Quando conhece alguém novo, como é o processo? ",
        alternativas: [
            {
                texto: " Conversa com entusiasmo e compartilha detalhes da vida. ",
                afirmacao: [
                    " Você se abre com facilidade e, com sua habilidade de se expressar, cria novas conexões de forma natural e fluida. ",
                    "Sua energia contagiante facilita a criação de laços rapidamente, pois você gosta de compartilhar histórias pessoais que tornam as conversas mais próximas e envolventes.",
                    "Você encara novos encontros como oportunidades empolgantes para trocar experiências, construindo conexões significativas com facilidade e autenticidade."
                ]
            },
            {
                texto: " Observa a pessoa e só se abre quando sente confiança. ",
                afirmacao: [
                    " Você tende a ser mais cauteloso(a) preferindo que as conexões se desenvolvam de maneira gradual, e só se abre plenamente com pessoas em quem realmente confia. ",
                    "Você prefere analisar o comportamento e as intenções da outra pessoa, compartilhando detalhes sobre si mesmo apenas quando sente uma conexão genuína.",
                    "Sua abordagem cuidadosa resulta em relacionamentos mais profundos, pois você valoriza a confiança mútua antes de se abrir completamente."
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Observando sua essência...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();