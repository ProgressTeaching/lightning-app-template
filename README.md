# ProgressTeaching App

## Getting Started

### Setting up auth0

1. Register an account on https://auth0.com/signup
2. Click Create Application (choose regular web application)
3. Once application has been created - use the application Domain, Client ID and Client Secret to populate the `.env.local` file in the next step
4. Add the following to `Allowed Callback URLs`

```
http://localhost:3000/api/auth/callback
```

### Install packages and run application

First, create an environment file:

```bash
cp .env.local.example .env.local
```

Install packages

```bash
npm install
```

That it.

Run:

```
npm run dev
```

## CLI

### Running tests

Run once:

```bash
npm test
```

Watch:

```bash
npm test:watch
```

Run CI:

```bash
npm run test:ci
```

### Prettier Check

```bash
npx prettier --check .
```

### Prettier fix

```bash
npx prettier --write .
```
