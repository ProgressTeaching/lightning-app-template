# ProgressTeaching App

## How to get set up / follow this doc

1. Read the project specs first - this will tell you what you need to deliver
2. Look through the Mock API Documentation and map the appropiate API to your design. In most cases, the project spec should have this as part of the specification, however, this may not always happen.
3. Set up a Auth0 account (instructions below)
4. Set up and start the application

```
Please note: Please keep all changes in a private github repo.
```

## ProgressTeaching Mock APIs Docs

The Mock API documentation will give you example payloads / endpoints for all of the APIs that we have available on our platform.
You should use this to build the application specified. Any missing APIs, please notify your project lead.

https://documenter.getpostman.com/view/26047329/2s93CPprYo

## Setting up your local environment

### Set up a personal Auth0 account

1. Register an account on https://auth0.com/signup
2. Click Create Application (choose regular web application)
3. Once application has been created - use the application Domain, Client ID and Client Secret to populate the `.env.local` file in the next step
4. Add the following to `Allowed Callback URLs`

```
http://localhost:3000/api/auth/callback
```

If you want to read the official Auth0 docs, visit this link: https://auth0.com/docs/quickstart/webapp/nextjs/01-login

### Install packages and run application

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
