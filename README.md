# Express TypeScript Boilerplate

An Express Boilerplate using **TypeScript**, **ES Modules**, and **Prisma ORM** for PostgreSQL.

## Installation

Clone this boilerplate with git:

```bash
git clone https://github.com/farhanmn/express-ts-boilerplate.git
cd express-ts-boilerplate

# Rename the .env.example file to .env
# Then adjust the environment variables accordingly

npm install
```

## Folder Structure
```
.
├── /prisma
│   └── schema.prisma         # Prisma schema definition
├── /src
│   ├── /controllers
│   │   └── user.controller.ts
│   ├── /middlewares
│   ├── /routes
│   │   ├── index.ts          # Root route
│   │   └── user.routes.ts    # User-related endpoints
│   ├── /services      
│   ├── /types                # Object types
│   ├── /utils
│   ├── app.ts                # Express app initialization
│   └── index.ts              # Main entry point
├── .env.sample               # Environment variables
├── .gitignore
├── tsconfig.json             # TypeScript configuration
├── package.json
└── README.md
```

## Environment Variable

`DB_URL`

## Tech Stack
- [Express.js](https://expressjs.com/) – Fast, unopinionated, minimalist web framework for Node.js
- TypeScript – Strongly typed JavaScript
- [Prisma ORM](https://www.prisma.io/) – Modern ORM for Node.js and TypeScript
- PostgreSQL – Open source relational database
- ts-node-dev – TypeScript execution and reload during development
- dotenv – Environment variable loader


## Script

- `npm start` - Start the compiled project from dist
- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development server using ts-node-dev

## Authors

- [@farhanmn](https://github.com/farhanmn)
