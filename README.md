# Express-REST-quickstart

![](https://img.shields.io/github/checks-status/chicobaptista/express-rest-quickstart/develop)
![](https://img.shields.io/github/last-commit/chicobaptista/express-rest-quickstart?logo=github)
![](https://img.shields.io/github/license/chicobaptista/express-rest-quickstart)

This is a quickstart ExpressJS project containing my preferred configurations and tools for API development, including linting, git hooks, ci/cd and testing frameworks, to be used as a launchpad for different Express applications.

## Built with

-   Main frameworks and languages
    -   NodeJS
    -   ExpressJS
    -   Typescript
-   Git
    -   Husky
    -   Conventional Commits
    -   Commitzen
-   Linting and Code style
    -   Prettier
    -   Eslint
-   Testing
    -   Mocha
    -   Chai
    -   Newman
-   CI/CD
    -   Github actions

## Getting started

-   Install dependencies with `yarn`
-   Run the development server with `yarn run serve`

---

## Express, NodeJS, Typescript and NPM/YARN

As an Express project, this project is based on NodeJS/Typescript, and uses Yarn as a package manager.

## Git and commit style guides

This project uses conventional commits and commitzen to generate consistent commit messages and husky commit-msg hook and commitlint to enforce them.

## Code style and linting

This project leverages ES-Lint and Prettier to check and format code into the specified guidelines, and also uses lint-staged and a husky pre-commit hook to enforce linting rules.

## Testing

This project also tries to approach software development from a Test-Driven perspective. As such, automated unit, integration and e2e testing is incorporated into the development workflow from the very beginning. Husky pre-push hooks and github CI actions run unit and e2e testing respectively to ensure that all code integrated into the develop and main branches is functioning and covered by automated tests.

### Unit testing

THis project uses Mocha as a Testrunner and Chai as a test library, as well as sinon-chai for mocking dependencies as needed

### Integration and e2e testing

An Mocha github workflow script is run on all pull-requests into the main and develop branches.

---

## License

This project is under the MIT License

## Contact
