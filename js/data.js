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
    link: "https://github.com/emanuelekm/Automacao_N8N",
    demo: null,
    image: "assets/project-automation.svg",
  },
  {
    index: "02",
    title: "Dashboard de Análise de Defeitos de Embalagens",
    shortDescription: "Dados + BI",
    description: "Dashboard desenvolvido em Power BI para análise de resultados, identificação de níveis de defeitos e acompanhamento de indicadores relacionados a processos de pesquisa e desenvolvimento.",
    objective: "Transformar resultados de inspeções em indicadores visuais que facilitem a análise de qualidade e o acompanhamento de processos.",
    tech: ["Power BI", "DAX", "Power Query", "SQL", "Azure Database"],
    features: ["Análise de resultados", "Identificação de níveis de defeitos", "Indicadores de qualidade", "Acompanhamento de dados de P&D"],
    link: null,
    demo: null,
    image: "assets/project-bi.svg",
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
  link: null,
  demo: null,
  image: "assets/project-portfolio.svg",
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
