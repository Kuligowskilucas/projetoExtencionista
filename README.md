# Qualificação em Tecnologias na Educação

Site do projeto de extensão do IFPR Câmpus Pinhais — Comunidade Graciosa, 2026.

## Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

O site roda em `http://localhost:3000`.

## Deploy na Vercel

1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detecta automaticamente que é um projeto Next.js
4. Clique em "Deploy"

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz com metadata
│   ├── page.tsx            # Página inicial (hero + módulos)
│   ├── page.module.css
│   ├── globals.css         # CSS global + variáveis
│   ├── aulas/
│   │   ├── page.tsx        # Plano de aulas com filtro por módulo
│   │   └── page.module.css
│   ├── cronograma/
│   │   ├── page.tsx        # Timeline visual do cronograma
│   │   └── page.module.css
│   └── exercicios/
│       ├── page.tsx        # Banco de exercícios com filtros
│       └── page.module.css
├── components/
│   ├── Nav.tsx             # Navegação sticky
│   ├── Nav.module.css
│   ├── LessonCard.tsx      # Card expansível de aula
│   └── LessonCard.module.css
└── data/
    └── course.ts           # Todos os dados do curso (tipados)
```

## Próximos passos

- [ ] Sistema de tarefas interativas
- [ ] Autenticação de alunos
- [ ] Progresso individual
- [ ] Feedback dos instrutores
