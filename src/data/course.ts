export interface Module {
  id: number | string;
  name: string;
  hours: string;
  lessons: number | null;
  color: string;
  icon: string;
  description: string;
}

export interface Lesson {
  aula: number;
  module: number;
  hours: string;
  title: string;
  content: string;
  activity: string;
  objective: string;
  resources: string;
}

export interface ScheduleItem {
  date: string;
  day: string;
  activity: string;
  module: string;
  hours: string;
}

export interface Exercise {
  aula: number;
  name: string;
  desc: string;
  result: string;
  level: "facil" | "medio" | "dificil";
}

export const MODULE_COLORS: Record<number, string> = {
  1: "#1B5E20",
  2: "#1565C0",
  3: "#6A1B9A",
};

export const MODULE_BG: Record<number, string> = {
  1: "#E8F5E9",
  2: "#E3F2FD",
  3: "#F3E5F5",
};

export const LEVEL_MAP: Record<
  string,
  { label: string; bg: string; color: string }
> = {
  facil: { label: "Fácil", bg: "#E8F5E9", color: "#1B5E20" },
  medio: { label: "Médio", bg: "#FFF8E1", color: "#F57F17" },
  dificil: { label: "Difícil", bg: "#FFEBEE", color: "#C62828" },
};

export const MODULES: Module[] = [
  {
    id: 1,
    name: "Informática Básica, Internet e Segurança Cibernética",
    hours: "20h",
    lessons: 5,
    color: "#1B5E20",
    icon: "🖥️",
    description:
      "Fundamentos do computador, navegação na internet, e-mail e segurança digital.",
  },
  {
    id: 2,
    name: "Edição de Textos, Apresentações e Armazenamento em Nuvem",
    hours: "30h",
    lessons: 8,
    color: "#1565C0",
    icon: "📝",
    description:
      "Google Docs, Slides, Drive e trabalho colaborativo na nuvem.",
  },
  {
    id: 3,
    name: "Edição de Planilhas Eletrônicas e Formulários",
    hours: "30h",
    lessons: 6,
    color: "#6A1B9A",
    icon: "📊",
    description:
      "Google Sheets, fórmulas, formatação de dados e Google Forms.",
  },
  {
    id: "bonus",
    name: "Plataforma Educativa Digital",
    hours: "20h",
    lessons: null,
    color: "#E65100",
    icon: "🚀",
    description:
      "Plataforma desenvolvida pela equipe de extensionistas (PUCPR – ADS).",
  },
];

export const LESSONS: Lesson[] = [
  { aula: 1, module: 1, hours: "4h", title: "Conhecendo o Computador", content: "Hardware: monitor, teclado, mouse, CPU, HD | Software: SO, aplicativos | Área de trabalho e ícones | Ligar/desligar/reiniciar corretamente | Janelas: minimizar, maximizar, fechar", activity: "Explorar área de trabalho livremente | Abrir/fechar 3 programas diferentes | Praticar minimizar e maximizar janelas | Quiz rápido: nomeando partes do PC", objective: "Familiarizar o participante com o ambiente do computador sem medo", resources: "PC, projetor" },
  { aula: 2, module: 1, hours: "4h", title: "Digitação e Organização de Arquivos", content: "Posição correta das mãos no teclado | Teclas especiais: Enter, Backspace, Delete, Shift, Caps Lock | Atalhos: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S | Criar e renomear pastas | Mover e copiar arquivos | Lixeira: excluir e restaurar", activity: "Exercício de digitação (site: keybr.com ou typing.com) | Criar estrutura de pastas: 'Meus Documentos > Curso > Módulo 1' | Salvar arquivo de texto na pasta criada | Desafio: digitar 3 frases sem olhar o teclado", objective: "Desenvolver habilidade de digitação e organização básica de arquivos", resources: "PC, projetor, site typing.com" },
  { aula: 3, module: 1, hours: "4h", title: "Internet e Navegadores", content: "O que é a internet (explicação simples) | Navegadores: Chrome, Firefox, Edge | Barra de endereços vs. campo de busca | Abas: abrir, fechar, navegar entre abas | Favoritos e histórico | Downloads e uploads de arquivos | Pesquisa eficiente no Google (aspas, site:, -palavra)", activity: "Acessar 3 sites institucionais (INSS, Caixa, Prefeitura) | Baixar um PDF e salvar na pasta do curso | Criar favorito de um site útil | Desafio: encontrar informação específica usando filtros de pesquisa", objective: "Capacitar o participante a navegar com autonomia e eficiência na internet", resources: "PC, internet, projetor" },
  { aula: 4, module: 1, hours: "4h", title: "E-mail — Uso Completo", content: "Criar conta Gmail (para quem não tem) | Interface do Gmail: caixa de entrada, enviados, rascunhos | Compor e enviar e-mail simples | Anexar arquivos (PDF, foto, documento) | Responder e encaminhar e-mails | Organizar com etiquetas e pastas | Spam: identificar e marcar", activity: "Enviar e-mail para o professor com assunto correto + arquivo anexado | Responder o e-mail de retorno do professor | Criar uma etiqueta chamada 'Curso IFPR' | Organizar 3 e-mails na etiqueta criada", objective: "Dominar o uso do e-mail com anexos e organização básica", resources: "PC, internet, Gmail" },
  { aula: 5, module: 1, hours: "4h", title: "Segurança Digital", content: "O que é phishing: exemplos reais | Links falsos: como identificar URL suspeita | Senhas fortes: regras e gerenciadores | Privacidade nas redes sociais | Golpes comuns no WhatsApp e e-mail | O que fazer se cair num golpe | Configurações de privacidade do Google", activity: "Análise de e-mails suspeitos (imagens de exemplos reais) | Criar senha forte seguindo as regras | Verificar se seu e-mail foi vazado (haveibeenpwned.com) | Debate: quem já recebeu golpe? Como foi?", objective: "Capacitar o participante a usar a internet com segurança e consciência", resources: "PC, internet, projetor" },
  { aula: 6, module: 2, hours: "3h", title: "Introdução ao Google Docs", content: "Acessar Google Docs pelo Drive | Criar e nomear documento | Digitação e navegação no documento | Formatação: fonte, tamanho, cor de texto | Negrito, itálico, sublinhado (atalhos) | Salvar automático na nuvem", activity: "Criar documento 'Apresentação Pessoal' com nome, função e expectativas do curso | Aplicar formatação: título em negrito tamanho 16, corpo tamanho 12 | Mudar cor do título para azul | Verificar onde o arquivo foi salvo no Drive", objective: "Criar e formatar documentos básicos no Google Docs com autonomia", resources: "PC, internet, Google Docs" },
  { aula: 7, module: 2, hours: "3h", title: "Formatação Avançada no Docs", content: "Alinhamento: esquerda, centro, direita, justificado | Espaçamento entre linhas e parágrafos | Listas numeradas e com marcadores | Inserção de tabela (ex: tabela de horários) | Inserção de imagem | Verificação ortográfica (F7) | Cabeçalho e rodapé", activity: "Criar documento 'Ata de Reunião' usando tabela, lista e cabeçalho | Inserir imagem no documento | Corrigir erros ortográficos propositais | Exercício: formatar texto seguindo padrão ABNT simplificado", objective: "Produzir documentos formatados profissionalmente no Google Docs", resources: "PC, internet, Google Docs" },
  { aula: 8, module: 2, hours: "3h", title: "Colaboração em Tempo Real", content: "Compartilhar documento: visualizar / comentar / editar | Diferença entre link público e acesso restrito | Comentários e sugestões no Docs | Edição simultânea (ver cursor dos outros) | Histórico de versões: recuperar versão anterior | Propriedade do documento vs. editor", activity: "Exercício em duplas: um cria documento, outro edita simultaneamente | Adicionar comentário em trecho específico do parceiro | Aceitar/rejeitar sugestão | Verificar histórico de versões e restaurar versão anterior", objective: "Trabalhar de forma colaborativa em documentos compartilhados", resources: "PC, internet, Google Docs" },
  { aula: 9, module: 2, hours: "3h", title: "Google Drive — Armazenamento em Nuvem", content: "O que é a nuvem e por que usar | Interface do Google Drive | Criar, renomear e organizar pastas | Upload: arrastar arquivos para o Drive | Download: baixar arquivo do Drive | Compartilhar pasta com link | Gerenciar permissões: quem pode ver/editar | Acesso pelo celular", activity: "Criar estrutura de pastas no Drive: 'Curso IFPR > Módulo 1, 2, 3' | Fazer upload dos arquivos das aulas anteriores | Compartilhar uma pasta com o professor via link | Acessar o Drive pelo celular (demonstração)", objective: "Usar o Google Drive para armazenar, organizar e compartilhar arquivos com segurança", resources: "PC, internet, Google Drive, celular" },
  { aula: 10, module: 2, hours: "3h", title: "Introdução ao Google Slides", content: "O que são apresentações e para que servem | Criar apresentação no Google Slides | Layouts disponíveis e como escolher | Inserir e formatar texto nos slides | Adicionar imagens (upload e pesquisa) | Alterar tema e cores da apresentação | Notas do apresentador", activity: "Criar apresentação de 4 slides: capa + 3 slides de conteúdo | Escolher tema e personalizar cores | Inserir pelo menos 2 imagens | Escrever notas de apresentador no primeiro slide", objective: "Criar apresentações básicas e visualmente organizadas no Google Slides", resources: "PC, internet, Google Slides" },
  { aula: 11, module: 2, hours: "3h", title: "Apresentações Eletrônicas Avançadas", content: "Animações: entrada de texto e imagens | Transições entre slides | Modo apresentador: tela cheia, avançar slides | Exportar como PDF | Exportar como PPTX (compatível com PowerPoint) | Compartilhar apresentação: link e incorporar | Boas práticas: regra do 6x6, contraste, legibilidade", activity: "Adicionar animações nos slides da aula anterior | Configurar transições diferentes em cada slide | Praticar modo apresentador (cada aluno apresenta 1 slide) | Exportar apresentação em PDF e enviar por e-mail para o professor", objective: "Produzir apresentações profissionais com animações e exportação adequada", resources: "PC, internet, Google Slides, projetor" },
  { aula: 12, module: 2, hours: "3h", title: "Projeto Prático — Módulo 2", content: "Integração: Docs + Slides + Drive | Revisão geral do módulo | Trabalho individual: tema livre | Compartilhamento no Drive | Apresentação breve (2 minutos cada)", activity: "Criar documento de texto sobre tema do cotidiano | Criar apresentação de 5 slides sobre o mesmo tema | Salvar tudo numa pasta no Drive | Compartilhar pasta com o professor | Apresentar brevemente para a turma", objective: "Consolidar habilidades do Módulo 2 com entrega prática integrada", resources: "PC, internet, Google Workspace, projetor" },
  { aula: 13, module: 2, hours: "3h", title: "Revisão e Feedback — Módulo 2", content: "Revisão dos pontos com mais dúvidas | Exercícios dirigidos individuais | Dicas de produtividade no Google Workspace | Aplicação do formulário de avaliação | Depoimentos e feedback da turma", activity: "Exercícios personalizados por nível | Responder formulário Google Forms de avaliação do módulo | Registrar depoimento em vídeo ou áudio | Tirar dúvidas individuais", objective: "Consolidar aprendizado e coletar feedback para ajuste das próximas aulas", resources: "PC, internet, Google Forms, celular" },
  { aula: 14, module: 3, hours: "3h", title: "Introdução ao Google Sheets", content: "O que é uma planilha e para que serve | Interface: células, linhas, colunas, abas | Selecionar, mesclar e redimensionar células | Inserção de dados: texto, número, data | Preenchimento automático (séries) | Formatação: cor, negrito, bordas | Congelar linhas e colunas", activity: "Criar planilha 'Lista de Participantes' com nome, faixa etária e módulo | Aplicar formatação: cabeçalho colorido, bordas nas células | Usar preenchimento automático para sequência de números | Congelar a linha de cabeçalho", objective: "Familiarizar o participante com a interface e recursos básicos do Google Sheets", resources: "PC, internet, Google Sheets" },
  { aula: 15, module: 3, hours: "3h", title: "Fórmulas Básicas", content: "Conceito de fórmula: começa com '=' | SOMA: =SOMA(A1:A10) | Subtração, multiplicação e divisão | MÉDIA: =MÉDIA(A1:A10) | MÁXIMO e MÍNIMO | AutoSoma (atalho) | Referência de células: absoluta ($A$1) vs. relativa (A1) | Copiar fórmula para outras células", activity: "Exercício: planilha de controle de gastos pessoais com categorias | Calcular total de gastos com SOMA | Calcular média e maior gasto com MÉDIA e MÁXIMO | Desafio: calcular quanto sobra do salário (subtração)", objective: "Aplicar fórmulas matemáticas básicas para resolver problemas cotidianos", resources: "PC, internet, Google Sheets" },
  { aula: 16, module: 3, hours: "3h", title: "Formatação e Organização de Dados", content: "Formatação condicional (células que mudam de cor) | Filtros: filtrar por valor, texto ou condição | Ordenar dados (A-Z, Z-A, maior para menor) | Inserir e excluir linhas/colunas | Ocultar e exibir colunas | Validação de dados: lista suspensa simples | Comentários nas células", activity: "Aplicar formatação condicional: valores acima da média ficam verdes | Criar filtro na planilha de participantes | Ordenar lista por nome (A-Z) | Criar lista suspensa de seleção (Sim/Não)", objective: "Organizar e visualizar dados de forma eficiente usando filtros e formatação", resources: "PC, internet, Google Sheets" },
  { aula: 17, module: 3, hours: "3h", title: "Colaboração e Exportação", content: "Edição colaborativa no Sheets | Proteger intervalo de células | Exportar como XLSX (Excel) | Exportar como PDF | Exportar como CSV | Importar arquivo CSV para o Sheets | Histórico de versões no Sheets", activity: "Exercício em duplas: preencher planilha compartilhada simultaneamente | Exportar planilha em XLSX e CSV | Importar CSV de lista de alunos fictícios | Verificar histórico de versões", objective: "Trabalhar de forma colaborativa e exportar planilhas em diferentes formatos", resources: "PC, internet, Google Sheets" },
  { aula: 18, module: 3, hours: "3h", title: "Introdução ao Google Forms", content: "O que é um formulário e quando usar | Criar formulário do zero | Tipos de perguntas: resposta curta, parágrafo, múltipla escolha, caixas de seleção, lista suspensa, escala linear, data e hora | Tornar perguntas obrigatórias | Adicionar seções", activity: "Criar formulário 'Avaliação do Curso' com pelo menos 6 perguntas de tipos diferentes | Testar o formulário respondendo | Ver as respostas na aba 'Respostas' | Compartilhar link do formulário", objective: "Criar formulários funcionais para coleta de dados e avaliação", resources: "PC, internet, Google Forms" },
  { aula: 19, module: 3, hours: "3h", title: "Formulários Avançados e Integração", content: "Personalizar tema e imagem do formulário | Validação de campos | Atribuir pontuação (quizzes) | Criar quiz com gabarito automático | Exportar respostas para planilha | Análise automática: gráficos do Forms | Link de compartilhamento e QR Code", activity: "Transformar o formulário em quiz com pontuação | Configurar gabarito em 3 perguntas | Exportar respostas para o Sheets | Criar análise básica com SOMA e MÉDIA | Gerar QR Code do formulário", objective: "Usar recursos avançados do Forms integrado ao Sheets para análise de dados", resources: "PC, internet, Google Forms, Google Sheets" },
  { aula: 20, module: 3, hours: "3h", title: "Projeto Prático — Módulo 3", content: "Integração: Sheets + Forms + Drive | Revisão geral do módulo | Trabalho individual ou dupla | Apresentação dos resultados", activity: "Criar planilha de controle (tema livre: finanças, tarefas, agenda) | Usar pelo menos 3 fórmulas diferentes | Criar formulário vinculado à planilha | Salvar tudo no Drive e compartilhar", objective: "Integrar planilhas e formulários numa entrega prática completa", resources: "PC, internet, Google Workspace" },
  { aula: 21, module: 3, hours: "3h", title: "Encerramento e Avaliação Final", content: "Revisão geral dos 3 módulos | Dúvidas finais | Apresentação da plataforma educativa | Formulário de avaliação final | Depoimentos | Entrega de certificados", activity: "Responder avaliação final (Google Forms) | Gravar depoimento de 1 minuto | Explorar a plataforma educativa | Cerimônia de encerramento e certificados", objective: "Encerrar o curso com avaliação completa, coleta de feedback e celebração", resources: "PC, internet, projetor, celular" },
];

export const SCHEDULE: ScheduleItem[] = [
  { date: "Abr/Mai 2026", day: "Pré-curso", activity: "Desenvolvimento da plataforma educativa", module: "Plataforma digital (20h)", hours: "20h" },
  { date: "Abr/Mai 2026", day: "Pré-curso", activity: "Produção de material didático e slides", module: "Todos os módulos", hours: "–" },
  { date: "11/04/2026", day: "Sábado", activity: "Diagnóstico + Aula 1: Conhecendo o PC", module: "Módulo 1 · Aula 1", hours: "4h" },
  { date: "13/04/2026", day: "Segunda", activity: "Aula 2: Digitação e Arquivos", module: "Módulo 1 · Aula 2", hours: "3h" },
  { date: "18/04/2026", day: "Sábado", activity: "Aula 3: Internet e Navegadores", module: "Módulo 1 · Aula 3", hours: "4h" },
  { date: "25/04/2026", day: "Sábado", activity: "Aula 5: Segurança Digital", module: "Módulo 1 · Aula 5", hours: "4h" },
  { date: "27/04/2026", day: "Segunda", activity: "Aula 4: E-mail Completo", module: "Módulo 1 · Aula 4", hours: "3h" },
  { date: "09/05/2026", day: "Sábado", activity: "Aula 6: Google Docs — Introdução", module: "Módulo 2 · Aula 6", hours: "4h" },
  { date: "11/05/2026", day: "Segunda", activity: "Aula 7: Formatação Avançada Docs", module: "Módulo 2 · Aula 7", hours: "3h" },
  { date: "16/05/2026", day: "Sábado", activity: "Aula 8: Colaboração em Tempo Real", module: "Módulo 2 · Aula 8", hours: "4h" },
  { date: "18/05/2026", day: "Segunda", activity: "Aula 9: Google Drive — Nuvem", module: "Módulo 2 · Aula 9", hours: "3h" },
  { date: "23/05/2026", day: "Sábado", activity: "Aula 10: Google Slides", module: "Módulo 2 · Aula 10", hours: "4h" },
  { date: "25/05/2026", day: "Segunda", activity: "Aula 11: Apresentações Avançadas", module: "Módulo 2 · Aula 11", hours: "3h" },
  { date: "30/05/2026", day: "Sábado", activity: "Aula 12: Projeto Prático — Módulo 2", module: "Módulo 2 · Aula 12", hours: "4h" },
  { date: "01/06/2026", day: "Segunda", activity: "Aula 13: Revisão + Feedback Módulo 2", module: "Módulo 2 · Aula 13", hours: "3h" },
  { date: "13/06/2026", day: "Sábado", activity: "Aula 14: Google Sheets — Introdução", module: "Módulo 3 · Aula 14", hours: "4h" },
  { date: "15/06/2026", day: "Segunda", activity: "Aula 15: Fórmulas Básicas", module: "Módulo 3 · Aula 15", hours: "3h" },
  { date: "20/06/2026", day: "Sábado", activity: "Aula 16: Formatação e Filtros", module: "Módulo 3 · Aula 16", hours: "4h" },
  { date: "22/06/2026", day: "Segunda", activity: "Aula 17: Colaboração e Exportação", module: "Módulo 3 · Aula 17", hours: "3h" },
  { date: "27/06/2026", day: "Sábado", activity: "Aula 18: Google Forms — Introdução", module: "Módulo 3 · Aula 18", hours: "4h" },
  { date: "29/06/2026", day: "Segunda", activity: "Aula 19: Forms Avançado + Integração", module: "Módulo 3 · Aula 19", hours: "3h" },
  { date: "11/07/2026", day: "Sábado", activity: "Aula 20: Projeto Prático — Módulo 3", module: "Módulo 3 · Aula 20", hours: "4h" },
  { date: "13/07/2026", day: "Segunda", activity: "Aula 21: Encerramento + Certificados", module: "Encerramento", hours: "3h" },
];

export const EXERCISES: Exercise[] = [
  { aula: 1, name: "Explore o PC", desc: "Ligue o computador, clique duas vezes no ícone 'Meu Computador', navegue pelas pastas e feche tudo corretamente com Alt+F4", result: "Aluno consegue navegar e fechar programas sem ajuda", level: "facil" },
  { aula: 1, name: "Nomeie as partes", desc: "Olhando para o computador, escreva num papel o nome de 5 partes que você identifica", result: "Identificação correta de: monitor, teclado, mouse, CPU, cabo", level: "facil" },
  { aula: 2, name: "Digitação cronometrada", desc: "Acesse typing.com e complete o exercício de 2 minutos. Anote sua velocidade (WPM) no caderno", result: "Velocidade registrada para comparar no final do curso", level: "facil" },
  { aula: 2, name: "Estrutura de pastas", desc: "Crie a estrutura: Documentos > Curso IFPR > Módulo 1. Dentro de 'Módulo 1' crie um arquivo de texto com seu nome", result: "Estrutura de pastas correta e arquivo criado", level: "medio" },
  { aula: 3, name: "Pesquisa avançada", desc: "Pesquise usando operadores como site: e filetype: e anote o que encontrou", result: "Aluno aprende a usar operadores de pesquisa", level: "medio" },
  { aula: 3, name: "Acesse sites oficiais", desc: "Acesse gov.br, meu.inss.gov.br e caixa.gov.br. Para cada um, anote o que encontrou de útil", result: "Aluno navega em sites governamentais com autonomia", level: "facil" },
  { aula: 4, name: "E-mail com anexo", desc: "Envie um e-mail para o professor com assunto 'Tarefa Aula 4 - [seu nome]' e anexe o arquivo de texto criado na Aula 2", result: "E-mail recebido pelo professor com assunto correto e anexo funcionando", level: "medio" },
  { aula: 4, name: "Organize sua caixa", desc: "Crie uma etiqueta 'Curso IFPR' no Gmail e mova para ela todos os e-mails do professor", result: "Etiqueta criada e e-mails organizados", level: "medio" },
  { aula: 5, name: "Analise o e-mail suspeito", desc: "Identifique quais dos 3 e-mails enviados pelo professor são golpes e explique por quê", result: "Identificação correta dos sinais: URL falsa, urgência, erros, remetente suspeito", level: "medio" },
  { aula: 5, name: "Verifique seu e-mail", desc: "Acesse haveibeenpwned.com e verifique se seu e-mail foi vazado", result: "Consciência sobre vazamentos de dados", level: "facil" },
  { aula: 6, name: "Apresentação pessoal", desc: "No Google Docs, escreva 3 parágrafos: quem você é, por que veio ao curso e o que espera aprender. Formate conforme especificado", result: "Documento formatado conforme especificado, salvo no Drive", level: "facil" },
  { aula: 7, name: "Ata de reunião", desc: "Crie uma ata de reunião fictícia usando: cabeçalho com data, tabela de participantes, lista de tópicos, seção de decisões", result: "Documento com todos os elementos, formatado profissionalmente", level: "medio" },
  { aula: 8, name: "Edição simultânea", desc: "Em dupla: Aluno A cria documento, Aluno B edita ao mesmo tempo. Depois troquem os papéis", result: "Ambos conseguem editar e ver mudanças em tempo real", level: "medio" },
  { aula: 9, name: "Drive organizado", desc: "Crie no Drive pasta 'Curso IFPR 2026' com subpastas para cada módulo. Mova arquivos e compartilhe com o professor", result: "Estrutura criada, arquivos organizados, pasta compartilhada", level: "medio" },
  { aula: 10, name: "Minha apresentação", desc: "Crie Google Slides com 5 slides sobre 'Meu bairro / minha comunidade' com pelo menos 3 imagens", result: "Apresentação de 5 slides com imagens e formatação", level: "medio" },
  { aula: 11, name: "Anima sua apresentação", desc: "Na apresentação anterior, adicione transições, animações e notas do apresentador. Exporte em PDF", result: "Apresentação com animações, transições e PDF gerado", level: "medio" },
  { aula: 12, name: "Projeto integrado M2", desc: "Escolha um tema. Crie 1 documento de texto + 1 apresentação de 5 slides. Salve tudo no Drive", result: "Entrega completa: Docs + Slides + Drive organizado", level: "dificil" },
  { aula: 14, name: "Lista de participantes", desc: "Crie planilha com Nome, Idade, Bairro, Turno, Módulo. Preencha com 10 pessoas fictícias e formate", result: "Planilha formatada com 10 linhas e cabeçalho colorido", level: "facil" },
  { aula: 15, name: "Controle de gastos", desc: "Crie planilha com Categoria, Valor, Mês. Use SOMA, MÁXIMO, MÍNIMO, MÉDIA e subtração", result: "Planilha com 5 fórmulas funcionando corretamente", level: "medio" },
  { aula: 16, name: "Formatação condicional", desc: "Aplique formatação condicional para gastos acima de R$200 (vermelho) e abaixo de R$50 (verde). Crie filtro por mês", result: "Formatação aplicada e filtro funcionando", level: "medio" },
  { aula: 17, name: "Exportação múltipla", desc: "Exporte a planilha de gastos em XLSX, PDF e CSV. Salve os 3 no Drive", result: "3 arquivos criados e salvos no Drive", level: "facil" },
  { aula: 18, name: "Formulário de avaliação", desc: "Crie Google Forms com 5 perguntas de tipos diferentes sobre a comunidade", result: "Formulário com 5 perguntas e link gerado", level: "medio" },
  { aula: 19, name: "Quiz do curso", desc: "Crie quiz sobre Módulo 1 com 5 perguntas. Configure gabarito. Exporte respostas para Sheets com média", result: "Quiz funcionando com pontuação automática e média calculada", level: "dificil" },
  { aula: 20, name: "Projeto final M3", desc: "Crie planilha de presença com fórmula de % + formulário vinculado. Salve no Drive e apresente", result: "Planilha + formulário integrados com fórmulas funcionando", level: "dificil" },
];
