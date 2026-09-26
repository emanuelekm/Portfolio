// Dados dos projetos e tecnologias do portfólio.
// A estrutura é reutilizável: para adicionar um projeto, basta incluir um novo objeto em "projects".

const projects = [
  {
    index: "01",
    title: "Automação de Ordens de Serviço",
    shortDescription: "Automação + IA",
    description: "Automação desenvolvida com n8n para processar ordens de serviço, utilizar Inteligência Artificial na geração e validação de respostas e organizar os resultados de forma automatizada.",
    objective: "Automatizar o tratamento e a validação de ordens de serviço, reduzindo tarefas manuais e organizando o fluxo de atendimento.",
    tech: ["n8n", "IA", "GPT", "Google Sheets", "JavaScript", "APIs"],
    features: ["Processamento de ordens de serviço", "Geração de respostas com IA", "Validação automática das respostas", "Organização dos resultados em planilha"],
    link: "https://github.com/emanuelekm/Automacao_N8N.git",
    demo: null,
    image: "assets/automacao.png",
    // Ordem fixa da galeria: visão geral → entrada → processamento → IA → validação → resultados → saída.
    gallery: [
      "assets/project_n8n/Worflow N8N.png",                         // 01 — fluxo completo
      "assets/project_n8n/planilha de dados  - google sheets.png",  // 02 — dados de entrada
      "assets/project_n8n/Get rows in sheet.png",                   // 03 — leitura da planilha
      "assets/project_n8n/IA Agent.png",                            // 04 — agente de IA
      "assets/project_n8n/Code in JavaScript.png",                  // 05 — processamento em JavaScript
      "assets/project_n8n/if.png",                                 // 06 — decisão do fluxo
      "assets/project_n8n/Validacao.png",                          // 07 — validação
      "assets/project_n8n/Complet code.png",                       // 08 — código completo
      "assets/project_n8n/Mensagem gerada pela IA.png",             // 09 — resposta gerada
      "assets/project_n8n/Resposta FALSO.png",                     // 10 — resultado rejeitado
      "assets/project_n8n/Resultado da demonstracao.png",          // 11 — resultado da execução
      "assets/project_n8n/Mensagem gerada e enviada por email.png"  // 12 — envio final
    ],
  },
  {
    index: "02",
    title: "Dashboard de Análise de Defeitos de Embalagens",
    shortDescription: "Dados + BI",
    description: "Dashboard desenvolvido em Power BI para análise de resultados, identificação de níveis de defeitos e acompanhamento de indicadores relacionados a processos de pesquisa e desenvolvimento.",
    objective: "Transformar resultados de inspeções em indicadores visuais que facilitem a análise de qualidade e o acompanhamento de processos.",
    tech: ["Power BI", "DAX", "Power Query", "SQL", "Azure Database"],
    features: ["Análise de resultados", "Identificação de níveis de defeitos", "Indicadores de qualidade", "Acompanhamento de dados de P&D"],
    link: "https://github.com/emanuelekm/packaging_quality_analytics.git",
    demo: null,
    image: "assets/powerbi.png",
    // Ordem fixa da galeria: visão principal do dashboard.
    // Novas capturas podem ser adicionadas ao final desta lista sem depender da ordem da pasta.
    gallery: [
      "assets/powerbi.png" // 01 — visão principal do dashboard
    ],
  },
  {
  index: "03",
  title: "Sistema de Gerenciamento de Bibliotecas",
  shortDescription: "Sistema Desktop",
  description: "Sistema desenvolvido em C# com Windows Forms e MySQL para automatizar o gerenciamento de uma biblioteca, permitindo o controle de usuários, empréstimos, devoluções e informações dos livros.",
  objective: "Desenvolver uma aplicação completa para praticar programação orientada a objetos, integração com banco de dados, controle de acesso e desenvolvimento de sistemas desktop.",
  tech: ["C#", "Windows Forms", "MySQL"],
  features: [
    "Cadastro e gerenciamento de livros",
    "Controle de usuários",
    "Controle de empréstimos e devoluções",
    "Perfis de Administrador e Leitor",
    "Gerenciamento de sessões",
    "Geração de relatórios em PDF"
  ],
  link: "https://github.com/emanuelekm/GerenciamentoBiblioteca.git",
  demo: null,
  image: "assets/gerenciamento.png",
  // Ordem fixa da galeria: acesso → tela principal → gerenciamento → banco → identidade do sistema.
  gallery: [
    "assets/project_biblioteca/login.png",          // 01 — login
    "assets/project_biblioteca/inicio-admin.png",   // 02 — painel inicial do administrador
    "assets/project_biblioteca/alterar-acervo.png", // 03 — gerenciamento do acervo
    "assets/project_biblioteca/banco-relacao.png",  // 04 — relação do banco de dados
    "assets/project_biblioteca/librarium-logo.png", // 05 — Librarium
    "assets/project_biblioteca/logo-card.png"       // 06 — identidade visual
  ],
},
];

const technologies = [
  { name: "C#", icon: "csharp" },
  { name: "Python", icon: "python" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "C/C++", icon: "cpp" },
  { name: "MySQL", icon: "mysql" },
  { name: "Power BI", icon: "powerbi" },
  { name: "GitHub", icon: "github" },
  { name: "JavaScript", icon: "javascript" },
  { name: "SQL", icon: "sql" },
  { name: "n8n", icon: "n8n" },
  { name: "VS Code", icon: "vscode" },
];
