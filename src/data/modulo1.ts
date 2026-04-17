export interface Section {
  heading: string;
  body: string;
  items?: { term: string; def: string }[];
  steps?: string[];
  tip?: string;
  warning?: string;
}

export interface LessonContent {
  id: number;
  title: string;
  icon: string;
  sections: Section[];
}

export interface ExerciseItem {
  title: string;
  aula: number;
  desc: string;
  level: "facil" | "medio" | "dificil";
}

export const MODULE1_LESSONS: LessonContent[] = [
  {
    id: 1,
    title: "Conhecendo o Computador",
    icon: "🖥️",
    sections: [
      {
        heading: "O que é um computador?",
        body: "O computador é uma máquina que processa informações. Ele recebe dados (o que você digita, clica ou fala), processa esses dados e mostra o resultado na tela. Existem computadores de mesa (desktop), notebooks, tablets e até celulares — todos seguem essa mesma lógica.",
      },
      {
        heading: "Hardware — as partes que você pode tocar",
        body: "Hardware é tudo aquilo que é físico no computador. São as peças que você consegue ver e tocar. Conheça as principais:",
        items: [
          { term: "Monitor", def: "É a tela onde você vê tudo o que acontece no computador. Funciona como uma televisão. Quando você abre um programa, o resultado aparece aqui." },
          { term: "Teclado", def: "É onde você digita letras, números e símbolos. Também serve para dar comandos ao computador usando combinações de teclas (atalhos)." },
          { term: "Mouse", def: "Controla a setinha (cursor) na tela. Com ele você clica em botões, abre programas, seleciona textos e arrasta arquivos. Tem dois botões: o esquerdo (ação principal) e o direito (opções extras)." },
          { term: "CPU / Gabinete", def: "É a 'caixa' do computador. Dentro dela fica o processador (o cérebro que faz os cálculos), a memória RAM (que guarda informações temporárias) e outros componentes importantes." },
          { term: "HD ou SSD", def: "É o armazenamento — onde ficam salvos todos os seus arquivos, fotos, documentos e programas. O HD é mais antigo e mais lento; o SSD é mais rápido e mais moderno." },
        ],
      },
      {
        heading: "Software — o que faz o computador funcionar",
        body: "Software é tudo aquilo que você NÃO pode tocar. São os programas e instruções que dizem ao computador o que fazer. Existem dois tipos principais:",
        items: [
          { term: "Sistema operacional (SO)", def: "É o programa principal que gerencia todo o computador. Sem ele, o PC não funciona. O mais comum é o Windows, mas existem outros como Linux e macOS (Apple). O SO é o primeiro programa que roda quando você liga o computador." },
          { term: "Aplicativos / Programas", def: "São as ferramentas que você usa para trabalhar, estudar e se divertir. Exemplos: o navegador (Chrome, Edge) para acessar a internet, o Bloco de Notas para escrever textos, a Calculadora, e programas como Google Docs e Google Sheets." },
        ],
        tip: "Pense assim: o sistema operacional é como a casa, e os aplicativos são os móveis e ferramentas dentro dela. Sem a casa, não tem onde colocar os móveis!",
      },
      {
        heading: "A área de trabalho",
        body: "Quando o computador termina de ligar, a primeira tela que aparece é a Área de Trabalho (Desktop). É o ponto de partida para tudo o que você faz no computador. Ela tem alguns elementos importantes:",
        items: [
          { term: "Ícones", def: "São as figurinhas na tela. Cada ícone é um atalho para abrir um programa, pasta ou arquivo. Para abrir, clique duas vezes rapidamente (duplo clique) com o botão esquerdo do mouse." },
          { term: "Barra de tarefas", def: "Fica na parte de baixo da tela. Mostra quais programas estão abertos no momento. Você também encontra aqui o relógio, o volume do som, a conexão Wi-Fi e o botão do Menu Iniciar." },
          { term: "Menu Iniciar", def: "É o botão com o símbolo do Windows, no canto inferior esquerdo. Ao clicar nele, você vê a lista de todos os programas instalados no computador. Também pode pesquisar por nome." },
          { term: "Papel de parede", def: "É a imagem de fundo da sua área de trabalho. Você pode trocar clicando com o botão direito em uma área vazia e escolhendo 'Personalizar'." },
        ],
      },
      {
        heading: "Ligando e desligando o computador",
        body: "Pode parecer simples, mas existe um jeito certo de ligar e desligar o computador. Fazer do jeito errado pode danificar seus arquivos ou o próprio sistema.",
        steps: [
          "Para ligar: pressione o botão de energia no gabinete (ou no notebook). Aguarde o Windows carregar completamente até aparecer a Área de Trabalho.",
          "Para desligar: clique no Menu Iniciar (botão do Windows), depois clique no ícone de energia e escolha 'Desligar'. Aguarde o computador desligar sozinho.",
          "Para reiniciar: mesmo caminho, mas escolha 'Reiniciar'. O computador desliga e liga novamente. Útil quando algo trava.",
        ],
        warning: "NUNCA desligue o computador tirando da tomada ou segurando o botão de ligar! Isso pode corromper arquivos e danificar o sistema. Sempre use o Menu Iniciar.",
      },
      {
        heading: "Janelas: minimizar, maximizar e fechar",
        body: "Cada programa que você abre aparece dentro de uma janela. No canto superior direito de cada janela, existem 3 botões importantes:",
        items: [
          { term: "Minimizar ( — )", def: "Esconde a janela na barra de tarefas, sem fechar o programa. É como guardar algo no bolso — ainda está lá, só não está na tela. Para voltar, clique no ícone do programa na barra de tarefas." },
          { term: "Maximizar ( □ )", def: "Faz a janela ocupar a tela inteira. Se já está maximizada, clicar de novo volta ao tamanho anterior. Dica: clicar duas vezes na barra de título da janela também maximiza." },
          { term: "Fechar ( ✕ )", def: "Encerra o programa completamente. Se você não salvou seu trabalho, o programa geralmente pergunta se deseja salvar antes de fechar. O atalho do teclado é Alt + F4." },
        ],
        tip: "Você pode ter várias janelas abertas ao mesmo tempo! Use a barra de tarefas para alternar entre elas, ou use o atalho Alt + Tab.",
      },
    ],
  },
  {
    id: 2,
    title: "Digitação e Organização de Arquivos",
    icon: "⌨️",
    sections: [
      {
        heading: "Por que aprender a digitar corretamente?",
        body: "Digitar corretamente não é só uma questão de velocidade — é sobre conforto e saúde. Quando você posiciona as mãos da forma certa, digita mais rápido, comete menos erros e evita dores nos punhos e nas costas. Não se preocupe se no começo parecer lento; com prática, seus dedos vão 'memorizar' onde cada tecla fica.",
      },
      {
        heading: "Posição correta das mãos no teclado",
        body: "O teclado tem uma posição inicial chamada 'posição base'. Seus dedos devem descansar sempre nessas teclas quando não estiver digitando:",
        items: [
          { term: "Mão esquerda", def: "Mindinho no A, Anelar no S, Médio no D, Indicador no F. O indicador esquerdo também alcança as teclas G e números 5-6." },
          { term: "Mão direita", def: "Indicador no J, Médio no K, Anelar no L, Mindinho no Ç. O indicador direito também alcança as teclas H e números 7-8." },
          { term: "Polegares", def: "Ambos ficam sobre a barra de espaço." },
        ],
        tip: "As teclas F e J têm uma pequena saliência (um relevo). Isso existe para você encontrar a posição correta sem precisar olhar para o teclado!",
      },
      {
        heading: "Teclas especiais que você precisa conhecer",
        body: "Além das letras e números, o teclado tem teclas com funções especiais. Conhecer essas teclas vai facilitar muito o uso do computador:",
        items: [
          { term: "Enter ↵", def: "Confirma uma ação (como enviar uma mensagem) ou pula para a próxima linha quando você está escrevendo um texto." },
          { term: "Backspace ←", def: "Apaga o caractere que está ANTES do cursor (à esquerda). É a tecla que você mais vai usar para corrigir erros." },
          { term: "Delete", def: "Apaga o caractere que está DEPOIS do cursor (à direita). Também serve para excluir arquivos selecionados." },
          { term: "Shift ⇧", def: "Segure essa tecla e pressione uma letra para digitá-la em MAIÚSCULA. Também serve para digitar os caracteres de cima das teclas de número (!, @, #, $, etc)." },
          { term: "Caps Lock", def: "Ativa ou desativa o modo maiúsculas. Quando ativado, TODAS as letras saem maiúsculas. Pressione novamente para desativar. Uma luz no teclado indica se está ativado." },
          { term: "Tab", def: "Cria um espaçamento maior no texto (recuo). Também serve para pular entre campos em formulários — muito útil quando está preenchendo cadastros." },
        ],
      },
      {
        heading: "Atalhos essenciais do teclado",
        body: "Atalhos são combinações de teclas que executam ações rapidamente, sem precisar usar o mouse. Memorize estes 4 atalhos — você vai usar todos os dias:",
        items: [
          { term: "Ctrl + C — Copiar", def: "Selecione um texto ou arquivo e pressione Ctrl+C. O item é copiado para a memória temporária (área de transferência). O original permanece no lugar." },
          { term: "Ctrl + V — Colar", def: "Depois de copiar, vá até o local desejado e pressione Ctrl+V. O item copiado será colado ali. Você pode colar várias vezes." },
          { term: "Ctrl + Z — Desfazer", def: "Cometeu um erro? Pressione Ctrl+Z para voltar atrás. Funciona na maioria dos programas. É como um botão 'voltar no tempo'. Pode ser usado várias vezes seguidas." },
          { term: "Ctrl + S — Salvar", def: "Salva o arquivo que você está editando. USE SEMPRE antes de fechar qualquer programa. Se a energia cair e você não salvou, perde tudo que fez." },
        ],
        tip: "Outros atalhos úteis: Ctrl+A (selecionar tudo), Ctrl+X (recortar — como copiar, mas remove o original), Ctrl+P (imprimir).",
      },
      {
        heading: "Criando e organizando pastas",
        body: "Pastas são como gavetas para organizar seus arquivos. Assim como você não joga todos os papéis numa pilha só, no computador é importante manter tudo organizado em pastas com nomes claros.",
        steps: [
          "Abra o Explorador de Arquivos (ícone de pasta na barra de tarefas, ou pressione a tecla Windows + E).",
          "Navegue até o local onde quer criar a pasta (por exemplo: Documentos).",
          "Clique com o botão direito do mouse em uma área vazia.",
          "Selecione 'Novo' e depois 'Pasta'.",
          "Digite o nome da pasta e pressione Enter.",
        ],
        tip: "Sugestão de organização para o curso: crie uma pasta 'Curso IFPR' dentro de 'Documentos', e dentro dela crie subpastas para cada módulo: 'Módulo 1', 'Módulo 2', 'Módulo 3'.",
      },
      {
        heading: "Mover, copiar e renomear arquivos",
        body: "Agora que você sabe criar pastas, precisa saber como gerenciar os arquivos dentro delas:",
        items: [
          { term: "Mover um arquivo", def: "Selecione o arquivo, pressione Ctrl+X (recortar), vá até a pasta de destino e pressione Ctrl+V (colar). O arquivo sai do lugar original e vai para o novo local. Você também pode arrastar com o mouse." },
          { term: "Copiar um arquivo", def: "Selecione o arquivo, pressione Ctrl+C (copiar), vá até o destino e pressione Ctrl+V (colar). O arquivo original permanece no lugar e uma cópia é criada no destino." },
          { term: "Renomear", def: "Clique uma vez no arquivo para selecioná-lo, depois pressione F2. O nome ficará editável. Digite o novo nome e pressione Enter. Cuidado para não apagar a extensão do arquivo (.docx, .pdf, .jpg)." },
        ],
      },
      {
        heading: "A Lixeira: excluir e restaurar",
        body: "Quando você deleta um arquivo, ele não desaparece imediatamente. Ele vai para a Lixeira, que funciona como uma lixeira de verdade: o lixo fica lá até você esvaziar.",
        steps: [
          "Para excluir: selecione o arquivo e pressione a tecla Delete. Ele vai para a Lixeira.",
          "Para restaurar: abra a Lixeira (ícone na Área de Trabalho), encontre o arquivo, clique com o botão direito e escolha 'Restaurar'. O arquivo volta para o local original.",
          "Para excluir permanentemente: dentro da Lixeira, clique em 'Esvaziar Lixeira'. Cuidado: depois disso não tem como recuperar!",
        ],
        warning: "Shift + Delete exclui um arquivo permanentemente, sem passar pela Lixeira. Evite usar isso a não ser que tenha certeza absoluta.",
      },
    ],
  },
  {
    id: 3,
    title: "Internet e Navegadores",
    icon: "🌐",
    sections: [
      { heading: "O que é a internet?", body: "A internet é uma rede mundial que conecta bilhões de computadores. Pense nela como uma enorme teia que liga computadores do mundo inteiro, permitindo que eles troquem informações. Quando você acessa um site, seu computador está pedindo informações para outro computador (chamado servidor) que pode estar em qualquer lugar do mundo. Isso acontece em frações de segundo!" },
      { heading: "Navegadores: sua porta de entrada", body: "Para acessar a internet, você precisa de um programa chamado navegador (browser). Ele transforma os dados da internet em páginas bonitas que você pode ler e usar. Os principais navegadores são:", items: [{ term: "Google Chrome", def: "O mais popular do mundo. Rápido, com muitas extensões disponíveis. Já vem integrado com sua conta Google." }, { term: "Microsoft Edge", def: "Vem instalado no Windows. Melhorou muito nas versões recentes. Boa opção para quem usa produtos da Microsoft." }, { term: "Mozilla Firefox", def: "Focado em privacidade. Boa alternativa ao Chrome. É gratuito e de código aberto." }], tip: "No nosso curso, vamos usar o Google Chrome, pois ele funciona muito bem com as ferramentas do Google (Docs, Sheets, Drive) que vamos aprender nos próximos módulos." },
      { heading: "Barra de endereços vs. campo de busca", body: "Na parte superior do navegador existe a barra de endereços. Ela serve para duas coisas diferentes:", items: [{ term: "Digitar um endereço (URL)", def: "Se você sabe o endereço exato do site, digite diretamente. Exemplo: www.google.com.br ou gov.br. O endereço sempre começa com 'http://' ou 'https://' (o 's' significa que é seguro)." }, { term: "Fazer uma pesquisa", def: "Se você não sabe o endereço, basta digitar o que procura. Exemplo: 'previsão do tempo Pinhais'. O navegador vai usar o Google (ou outro buscador) para encontrar resultados." }] },
      { heading: "Trabalhando com abas", body: "Abas permitem ter vários sites abertos ao mesmo tempo, como páginas de um livro. Isso é muito útil para pesquisar em vários sites sem perder o que estava fazendo.", steps: ["Para abrir uma nova aba: clique no sinal '+' ao lado das abas, ou pressione Ctrl + T.", "Para fechar uma aba: clique no 'X' na aba, ou pressione Ctrl + W.", "Para alternar entre abas: clique na aba desejada, ou use Ctrl + Tab para ir para a próxima.", "Para reabrir uma aba fechada por acidente: pressione Ctrl + Shift + T."] },
      { heading: "Favoritos e histórico", body: "Existem dois recursos importantes para não perder sites que você visitou:", items: [{ term: "Favoritos", def: "Quando encontrar um site útil, salve como favorito. Pressione Ctrl + D ou clique na estrela na barra de endereços. Organize seus favoritos em pastas (ex: 'Governo', 'Curso IFPR')." }, { term: "Histórico", def: "O navegador guarda uma lista de todos os sites que você visitou. Para acessar, pressione Ctrl + H. Útil quando você lembra de um site mas não lembra o endereço." }] },
      { heading: "Downloads: baixando arquivos", body: "Download é o ato de copiar um arquivo da internet para o seu computador. Quando você clica em um link de download, o arquivo é salvo na pasta 'Downloads' do seu computador.", steps: ["Clique no link ou botão de download no site.", "O arquivo começa a ser baixado — você verá o progresso na parte inferior do navegador.", "Quando terminar, clique no arquivo baixado para abri-lo, ou vá até a pasta 'Downloads'.", "Mova o arquivo para a pasta correta depois, para manter tudo organizado."], warning: "Cuidado com downloads de sites desconhecidos! Arquivos .exe podem conter vírus. Só baixe de sites confiáveis." },
      { heading: "Pesquisa eficiente no Google", body: "O Google é a ferramenta de busca mais usada do mundo. Existem truques para encontrar exatamente o que precisa:", items: [{ term: "Aspas \" \"", def: "Pesquise uma frase exata. Exemplo: \"como criar conta gmail\" — encontra páginas com essa frase exata." }, { term: "site:", def: "Pesquise dentro de um site específico. Exemplo: aposentadoria site:gov.br" }, { term: "filetype:", def: "Encontre um tipo de arquivo. Exemplo: manual do aluno filetype:pdf" }, { term: "Sinal de menos -", def: "Exclua uma palavra. Exemplo: receita de bolo -chocolate" }] },
    ],
  },
  {
    id: 4,
    title: "E-mail — Uso Completo",
    icon: "📧",
    sections: [
      { heading: "O que é e-mail e para que serve?", body: "E-mail (electronic mail) é uma forma de enviar e receber mensagens pela internet. Funciona como uma carta digital: você escreve, coloca o endereço do destinatário e envia. A mensagem chega em segundos. Diferente do WhatsApp, o e-mail é usado para comunicações mais formais: trabalho, cadastros em sites, comunicação com empresas e órgãos públicos, e envio de documentos." },
      { heading: "Criando sua conta Gmail", body: "O Gmail é o serviço de e-mail do Google. É gratuito e se integra com todas as ferramentas Google que vamos usar no curso.", steps: ["Abra o navegador e acesse gmail.com", "Clique em 'Criar conta'.", "Preencha seu nome e sobrenome.", "Escolha um nome de usuário (será seu endereço: seunome@gmail.com).", "Crie uma senha forte (mínimo 8 caracteres, com maiúsculas, minúsculas, números e símbolos).", "Complete as informações adicionais (telefone, data de nascimento).", "Aceite os termos e pronto!"], tip: "Anote seu e-mail e senha em um lugar seguro. Se esquecer a senha, será preciso fazer o processo de recuperação." },
      { heading: "Conhecendo a interface do Gmail", body: "Ao abrir o Gmail, você verá vários elementos na tela:", items: [{ term: "Caixa de entrada", def: "Onde chegam todos os e-mails. Os mais recentes aparecem em cima. E-mails não lidos ficam em negrito." }, { term: "Botão Escrever (+)", def: "No canto superior esquerdo. Clique para compor um novo e-mail." }, { term: "Enviados", def: "Todos os e-mails que VOCÊ enviou." }, { term: "Rascunhos", def: "E-mails que começou a escrever mas não enviou. O Gmail salva automaticamente." }, { term: "Spam", def: "E-mails suspeitos ou indesejados. Verifique de vez em quando — às vezes um e-mail válido cai aqui." }, { term: "Lixeira", def: "E-mails excluídos. Ficam aqui por 30 dias." }] },
      { heading: "Compondo e enviando e-mails", body: "Enviar um e-mail é simples, mas existem cuidados para que sua mensagem seja clara:", steps: ["Clique em 'Escrever' (ou pressione C).", "No campo 'Para', digite o e-mail do destinatário.", "No 'Assunto', escreva um resumo claro. Ex: 'Tarefa Aula 4 - Maria Silva'. NUNCA envie sem assunto!", "Escreva sua mensagem com saudação, conteúdo e despedida.", "Clique em 'Enviar' (ou Ctrl + Enter)."] },
      { heading: "Anexando arquivos", body: "Anexar é adicionar um arquivo junto com seu e-mail.", steps: ["Ao compor, clique no ícone de clipe (📎) na parte inferior.", "Navegue até o arquivo desejado e selecione.", "Aguarde o upload terminar.", "O arquivo aparecerá anexado. Agora é só enviar!"], tip: "O Gmail permite anexar até 25 MB. Para arquivos maiores, ele sugere usar o Google Drive." },
      { heading: "Respondendo e encaminhando", body: "Nem sempre você precisa criar um e-mail novo:", items: [{ term: "Responder", def: "Clique em 'Responder' (ou R) para responder diretamente a quem enviou." }, { term: "Responder a todos", def: "Se o e-mail foi para várias pessoas, responde a todo mundo." }, { term: "Encaminhar", def: "Envia o e-mail recebido para outra pessoa. Clique em 'Encaminhar' (ou F)." }] },
      { heading: "Organizando com etiquetas", body: "Etiquetas são como adesivos coloridos para organizar e-mails. Um e-mail pode ter várias etiquetas.", steps: ["Selecione um ou mais e-mails.", "Clique no ícone de etiqueta na barra superior.", "Escolha uma existente ou crie nova.", "Crie a etiqueta 'Curso IFPR' para os e-mails do curso."] },
    ],
  },
  {
    id: 5,
    title: "Segurança Digital",
    icon: "🔒",
    sections: [
      { heading: "Por que segurança digital é importante?", body: "A internet é uma ferramenta incrível, mas também é um ambiente onde existem pessoas mal-intencionadas. Golpes digitais são cada vez mais comuns. Não importa sua idade ou experiência: todo mundo pode ser alvo. A boa notícia é que, com conhecimento, você se protege da maioria das ameaças." },
      { heading: "Phishing: o golpe mais comum", body: "Phishing é quando alguém tenta enganar você para roubar seus dados (senhas, cartão, CPF). O golpista se faz passar por empresa ou pessoa confiável.", items: [{ term: "Como funciona", def: "Você recebe um e-mail, SMS ou WhatsApp que parece ser de um banco ou loja. Pede que clique em um link e insira seus dados. Mas o site é falso — uma cópia feita para roubar informações." }, { term: "Exemplo típico", def: "'Seu cartão foi bloqueado! Clique aqui para desbloquear'. Ou: 'Você ganhou um prêmio, clique para resgatar'." }], warning: "Bancos e empresas NUNCA pedem senha por e-mail, SMS ou WhatsApp. Se recebeu algo assim, é golpe." },
      { heading: "Como identificar links falsos", body: "Saber reconhecer um link falso é essencial:", items: [{ term: "Verifique a URL", def: "Passe o mouse sobre o link e veja o endereço real. O banco verdadeiro é 'www.bb.com.br'. Um falso pode ser 'www.bb-seguranca.xyz'." }, { term: "Procure o cadeado 🔒", def: "Sites seguros começam com 'https://'. Mas atenção: sites falsos também podem ter cadeado." }, { term: "Desconfie de urgência", def: "Mensagens com 'URGENTE', 'sua conta será bloqueada' são quase sempre golpe." }, { term: "Erros de português", def: "E-mails oficiais não têm erros grosseiros. Se tem erros estranhos, desconfie." }] },
      { heading: "Criando senhas fortes", body: "Sua senha é a chave da sua vida digital. Siga estas regras:", items: [{ term: "Mínimo 8 caracteres", def: "Quanto maior, melhor. Idealmente 12 ou mais." }, { term: "Misture tudo", def: "Maiúsculas (A-Z), minúsculas (a-z), números (0-9) e símbolos (!@#$%)." }, { term: "Não use dados pessoais", def: "Nada de nome, data de nascimento, CPF, '123456'." }, { term: "Use frases", def: "'Meu gato tem 3 anos!' vira 'MgT3a!'. Ou: 'CaféDaManhã#Sábado2026'." }, { term: "Não repita senhas", def: "Use uma diferente para cada site." }], tip: "Verifique se seu e-mail foi vazado em haveibeenpwned.com — é gratuito e seguro." },
      { heading: "Golpes comuns no WhatsApp", body: "Golpistas atuam muito no WhatsApp e redes sociais:", items: [{ term: "Clonagem de WhatsApp", def: "Pedem o código de verificação se passando por empresa. NUNCA compartilhe códigos!" }, { term: "Perfil falso pedindo dinheiro", def: "Criam perfil com foto de parente e pedem Pix. Sempre ligue para a pessoa antes." }, { term: "Promoções falsas", def: "Prêmios, produtos grátis, vagas incríveis. Se parece bom demais, é golpe." }, { term: "Links suspeitos em grupos", def: "Links em grupos nem sempre são confiáveis, mesmo de conhecidos." }] },
      { heading: "O que fazer se cair num golpe?", body: "Se clicou em algo suspeito ou compartilhou dados, aja rápido:", steps: ["Troque imediatamente as senhas das contas comprometidas.", "Se envolveu dados bancários, ligue para o banco e peça bloqueio.", "Faça Boletim de Ocorrência online em delegaciavirtual.sinesp.gov.br.", "Ative verificação em duas etapas (2FA) em todas as contas.", "Avise seus contatos se sua conta foi clonada."] },
      { heading: "Configurações de privacidade", body: "Proteger sua privacidade é tão importante quanto proteger senhas:", items: [{ term: "Google", def: "Acesse myaccount.google.com para controlar quais dados o Google coleta. Desative histórico de localização e pesquisa se desejar." }, { term: "Redes sociais", def: "Configure seu perfil como privado. Limite quem pode te enviar mensagens." }, { term: "Verificação em duas etapas", def: "Ative em todas as contas! Além da senha, precisará de um código do celular. Impede acesso mesmo com senha vazada." }] },
    ],
  },
];

export const MODULE1_EXERCISES: ExerciseItem[] = [
  { title: "Explore o computador", aula: 1, desc: "Ligue o computador, navegue pelas pastas usando o Explorador de Arquivos e feche tudo corretamente com Alt+F4.", level: "facil" },
  { title: "Nomeie as partes", aula: 1, desc: "Olhando para o computador na sua frente, escreva num papel o nome de 5 partes que você identifica (monitor, teclado, mouse, CPU, cabos).", level: "facil" },
  { title: "Digitação cronometrada", aula: 2, desc: "Acesse typing.com e complete o exercício de 2 minutos. Anote sua velocidade (palavras por minuto) no caderno.", level: "facil" },
  { title: "Estrutura de pastas", aula: 2, desc: "Crie a estrutura: Documentos > Curso IFPR > Módulo 1. Dentro de 'Módulo 1' crie um arquivo de texto com seu nome e salve com Ctrl+S.", level: "medio" },
  { title: "Pesquisa avançada no Google", aula: 3, desc: "Pesquise usando operadores como site: e filetype: e anote os resultados que encontrou.", level: "medio" },
  { title: "Navegação em sites governamentais", aula: 3, desc: "Acesse gov.br, meu.inss.gov.br e caixa.gov.br. Em cada site, encontre algo útil e salve como favorito.", level: "facil" },
  { title: "E-mail com anexo", aula: 4, desc: "Envie um e-mail para o professor com assunto 'Tarefa Aula 4 - [seu nome]' e anexe o arquivo de texto da atividade anterior.", level: "medio" },
  { title: "Organize sua caixa de entrada", aula: 4, desc: "No Gmail, crie a etiqueta 'Curso IFPR' e aplique em todos os e-mails do professor.", level: "medio" },
  { title: "Analise e-mails suspeitos", aula: 5, desc: "Identifique quais dos 3 e-mails enviados pelo professor são golpes e explique pelo menos 2 sinais suspeitos em cada.", level: "medio" },
  { title: "Crie senhas fortes", aula: 5, desc: "Crie 3 senhas fortes diferentes seguindo as regras aprendidas. Verifique se seu e-mail foi vazado em haveibeenpwned.com.", level: "facil" },
];
