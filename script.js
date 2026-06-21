// ===== script.js =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== NÓS DA AVENTURA =====
    const gameNodes = {

        // ---- INÍCIO ----
        start: {
            text: `🌅 Rio de Janeiro, 1857. Você é Bento Santiago, Bentinho. Sua mãe, D. Glória, fez uma promessa religiosa: você seria padre. Mas seu coração pertence a Capitu, a menina de olhos oblíquos e dissimulados da vizinha.<br><br>Aos 15 anos, você descobre que sua mãe mandou sua amada para um colégio interno, tentando afastá-los. O que fazer?`,
            image: '⛪ 🏠 💔',
            choices: [
                { text: '💔 Visitar Capitu escondido no colégio', nextNode: 'visit_capitu' },
                { text: '🙏 Aceitar o destino e entrar para o seminário', nextNode: 'accept_seminary' },
                { text: '🗣️ Confrontar sua mãe e pedir para casar', nextNode: 'confront_mother' },
                { text: '📖 Escrever um diário sobre seus sentimentos', nextNode: 'diary' }
            ]
        },

        // ---- DIÁRIO (NOVO) ----
        diary: {
            text: `Você começa a escrever um diário secreto, desabafando sobre o amor por Capitu e o medo de ser padre. Uma noite, sua mãe encontra o diário e lê tudo. Em vez de se irritar, ela chora e diz: "Sempre soube que você a amava, mas eu tinha medo de perder meu filho para o mundo."<br><br>Ela decide lhe dar uma chance: se você estudar e se formar, poderá escolher seu próprio caminho. Mas Capitu, desconfiada, começa a se afastar.`,
            image: '📖',
            choices: [
                { text: '❤️ Correr atrás de Capitu e declarar seu amor', nextNode: 'confess_love' },
                { text: '📚 Aceitar o trato e estudar para impressionar sua mãe', nextNode: 'study_hard' },
                { text: '🗣️ Conversar com Capitu sobre seus medos', nextNode: 'talk_fears' }
            ]
        },

        // ---- CONFESSAR AMOR (NOVO) ----
        confess_love: {
            text: `Você encontra Capitu no jardim e se declara com todas as palavras. Ela hesita, mas seus olhos brilham. "Sempre esperei por isso, Bentinho. Mas tenha cuidado: o mundo é cruel com os que amam demais."<br><br>Vocês juram amor eterno, mas no dia seguinte, Capitu desaparece. Dizem que foi levada por um primo rico para o Sul. Você passa anos procurando por ela, sem sucesso.`,
            image: '💔',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- ESTUDAR MUITO (NOVO) ----
        study_hard: {
            text: `Você se dedica aos estudos e se forma em Direito. Sua mãe fica orgulhosa e libera você para casar. Capitu esperou. Casam-se e têm uma filha, Maria, que herda os olhos oblíquos da mãe.<br><br>Mas um dia, você descobre que Capitu mantém correspondência com Escobar. A dúvida volta. O que fazer?`,
            image: '📚',
            choices: [
                { text: '🔍 Investigar as cartas', nextNode: 'investigate' },
                { text: '💀 Confrontar Capitu', nextNode: 'confront_capitu' },
                { text: '🤝 Confiar em Capitu e viver em paz', nextNode: 'trust_capitu' }
            ]
        },

        // ---- CONVERSAR SOBRE MEDOS (NOVO) ----
        talk_fears: {
            text: `Você se abre com Capitu sobre seus medos de ser padre, de perdê-la, de não ser suficiente. Ela escuta e, pela primeira vez, parece vulnerável: "Eu também tenho medo, Bentinho. Medo de que você me veja como uma armadilha."<br><br>Vocês decidem enfrentar tudo juntos. Sua mãe, vendo a união de vocês, acaba cedendo. Casam-se e vivem felizes por muitos anos.<br><br>FIM - Amor e confiança venceram.`,
            image: '🤝',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- CONFIAR EM CAPITU (NOVO) ----
        trust_capitu: {
            text: `Você decide confiar em Capitu. Rasga as cartas sem ler e a abraça. Com o tempo, a felicidade volta. Ezequiel nasce e, embora alguns digam que ele parece com Escobar, você escolhe não ver.<br><br>Envelhecem juntos. Capitu morre antes de você, e você escreve um livro sobre o amor verdadeiro, não sobre a dúvida. FIM - A escolha da confiança.`,
            image: '🌟',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- VISITAR CAPITU ----
        visit_capitu: {
            text: `Você escala o muro do colégio Santa Teresa. Capitu aparece na janela, com seus olhos de cigana oblíqua. "Bentinho, você é um louco!" Ela sorri, mas há um brilho calculista em seu olhar.<br><br>Capitu propõe um plano: você deve fingir que vai ser padre por um tempo, enquanto ela convence sua mãe. "Confie em mim", ela sussurra. Mas algo na voz dela te faz hesitar...`,
            image: '🏃',
            choices: [
                { text: '✨ Aceitar o plano de Capitu', nextNode: 'accept_capitu_plan' },
                { text: '⚠️ Desconfiar e perguntar suas verdadeiras intenções', nextNode: 'distrust_capitu' },
                { text: '🏃 Fugir com Capitu agora mesmo', nextNode: 'elope_with_capitu' },
                { text: '🤔 Pedir mais tempo para pensar', nextNode: 'think_plan' }
            ]
        },

        // ---- PEDIR MAIS TEMPO (NOVO) ----
        think_plan: {
            text: `Você pede mais tempo para pensar. Capitu parece frustrada, mas concorda. Na noite seguinte, você vê um vulto saindo do colégio: é Escobar! Ele e Capitu conversam animadamente.<br><br>Seu coração se parte. Capitu sempre teve um plano, mas você não era o centro dele. Você volta para casa e aceita o seminário.<br><br>FIM - O preço da hesitação.`,
            image: '⏳',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- ACEITAR PLANO DE CAPITU ----
        accept_capitu_plan: {
            text: `Você topa o plano. Por anos, frequenta o seminário, enquanto Capitu te espera. Finalmente, D. Glória libera vocês para casar. Casam-se, têm filhos. Mas um dia, Ezequiel nasce... e começa a parecer com Escobar, seu melhor amigo.<br><br>A dúvida te corrói: seria Capitu infiel? O que fazer?`,
            image: '👶',
            choices: [
                { text: '🔍 Investigar secretamente', nextNode: 'investigate' },
                { text: '💀 Confrontar Capitu diretamente', nextNode: 'confront_capitu' },
                { text: '📝 Escrever um livro sobre sua dor', nextNode: 'write_book' },
                { text: '🧘 Aceitar a dúvida e seguir em frente', nextNode: 'accept_doubt' }
            ]
        },

        // ---- ACEITAR A DÚVIDA (NOVO) ----
        accept_doubt: {
            text: `Você decide que a dúvida faz parte da vida. Ama Capitu e Ezequiel como são. Quando Ezequiel morre jovem, você sente uma dor profunda, mas não se arrepende de ter amado.<br><br>No fim, você entende que o ciúme é uma escolha, e você escolheu a paz. FIM - A sabedoria da aceitação.`,
            image: '🕊️',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- DESCONFIAR DE CAPITU ----
        distrust_capitu: {
            text: `Você questiona Capitu. Ela chora, diz que você não confia nela. "Os olhos de ressaca, Bentinho... Você nunca entendeu o que eles dizem." Ela se afasta. Anos depois, ela se casa com outro. Você se torna um homem amargo, solitário, que constrói um casarão idêntico ao da infância, tentando reviver o passado.<br><br>Dom Casmurro: você olha para o passado e não se reconhece.`,
            image: '🏚️',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- FUGIR COM CAPITU ----
        elope_with_capitu: {
            text: `Capitu nega. "Você é louco, Bentinho!" Ela some na noite. Você volta para casa, derrotado. Sua mãe te manda para a Europa por dois anos. Ao voltar, descobre que Capitu teve um filho de outro. O ciúme te consome. Você passa o resto da vida sozinho, escrevendo memórias para tentar entender o que aconteceu.<br><br>FIM - A solidão de um homem desconfiado.`,
            image: '😔',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- INVESTIGAR ----
        investigate: {
            text: `Você investiga em segredo. Marca semelhanças entre Ezequiel e Escobar, mas não há provas. Capitu percebe sua frieza e definha lentamente. Ezequiel morre jovem, tentando imitar Escobar. Você fica só, com a dúvida eterna. Será que imaginou tudo?<br><br>"Também não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria."`,
            image: '🔍',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- CONFRONTAR CAPITU ----
        confront_capitu: {
            text: `Você acusa Capitu. Ela nega com veemência, mas seus olhos oblíquos parecem fugir. Antes que possa provar algo, Capitu morre de tristeza. Ezequiel, órfão, parte para a Europa e também morre. Você termina como Dom Casmurro: um homem que matou com as palavras o que não pôde provar com fatos.`,
            image: '💀',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- ESCREVER LIVRO ----
        write_book: {
            text: `Você decide escrever suas memórias. Chama o livro de 'Dom Casmurro'. Destila sua dúvida em cada página, transformando Capitu no grande mistério da literatura brasileira. Leitores por gerações vão debater: Capitu traiu ou não?<br><br>Você, Bentinho, morre com a mesma dúvida. Mas a obra fica eterna. FIM - A imortalidade da dúvida.`,
            image: '📝',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- ACEITAR SEMINÁRIO ----
        accept_seminary: {
            text: `Você aceita seu destino. Torna-se padre, mas carrega um vazio no peito. Capitu casa com outro, mas continua sua vizinha. Anos depois, você a reencontra no jardim da Glória. Seus olhos dizem tudo que não foi vivido.<br><br>Você sai andando, murmurando: "Palavra puxa palavra, uma ideia traz outra, e assim fazemos um livro, um governo ou uma revolução." Mas você não fez nada.`,
            image: '🙏',
            choices: [
                { text: '📖 Recomeçar jornada', nextNode: 'start' }
            ]
        },

        // ---- CONFRONTAR MÃE ----
        confront_mother: {
            text: `D. Glória chora, lembra da promessa a Deus. "Você quer matar sua mãe?" Capitu intervém: "Deixe ele fazer o que quiser, senhora. Eu espero." Sua mãe cede. Vocês casam.<br><br>Mas a felicidade dura pouco. Quando Ezequiel nasce, parecido com Escobar, a dúvida começa. Você vive entre o ciúme e o amor, até que um dia...`,
            image: '👩',
            choices: [
                { text: '🔍 Seguir caminho da investigação', nextNode: 'investigate' },
                { text: '💀 Seguir caminho do confronto', nextNode: 'confront_capitu' },
                { text: '🧘 Seguir caminho da aceitação', nextNode: 'accept_doubt' }
            ]
        }
    };

    // ===== ESTADO =====
    let currentNode = 'start';
    let history = [];

    // ===== DOM =====
    const storyTextEl = document.getElementById('storyText');
    const choicesAreaEl = document.getElementById('choicesArea');
    const resetBtn = document.getElementById('resetBtn');
    const sceneImageEl = document.getElementById('sceneImage');

    // ===== FUNÇÃO PRINCIPAL =====
    function updateGame() {
        const node = gameNodes[currentNode];
        if (!node) {
            currentNode = 'start';
            updateGame();
            return;
        }

        // Animação
        storyTextEl.classList.remove('fade-in');
        void storyTextEl.offsetWidth;
        storyTextEl.classList.add('fade-in');

        // Texto
        storyTextEl.innerHTML = node.text;

        // Imagem
        sceneImageEl.innerHTML = node.image || '📖';

        // Escolhas
        choicesAreaEl.innerHTML = '';
        if (node.choices && node.choices.length > 0) {
            node.choices.forEach((choice) => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.innerHTML = choice.text;
                btn.addEventListener('click', () => {
                    if (gameNodes[choice.nextNode]) {
                        history.push(currentNode);
                        currentNode = choice.nextNode;
                        updateGame();
                    } else {
                        console.error('Nó não encontrado:', choice.nextNode);
                    }
                });
                choicesAreaEl.appendChild(btn);
            });
        } else {
            const resetChoice = document.createElement('button');
            resetChoice.className = 'choice-btn';
            resetChoice.innerHTML = '📖 Recomeçar jornada';
            resetChoice.addEventListener('click', resetGame);
            choicesAreaEl.appendChild(resetChoice);
        }
    }

    // ===== RESET =====
    function resetGame() {
        currentNode = 'start';
        history = [];
        updateGame();
    }

    // ===== EVENTOS =====
    resetBtn.addEventListener('click', resetGame);

    // ===== INÍCIO =====
    updateGame();
});
