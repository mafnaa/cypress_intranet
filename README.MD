# Cypress Typescript Example With Commands Explanation

‿︵‿︵‿︵‿ヽ(°□° )ノ︵‿︵‿︵‿︵



## Preparation

NodeJs is needed for Cypress initial installation [NodeJs Download](https://nodejs.org/en/download/)

If you are a Windows 98 user, try to find comfortable command line tool like [Commander](https://cmder.net/)

## How to run existing project

Open project folder and run

```bash
npm install
npm run cypress
```

## How to Set up project from scratch

####!!! Make sure that NodeJs is available in env variables path or by using command:

```bash
node ---version
```

###Create folder for project
```bash
cd "yo projects folder"
mkdir cypress_typescript_example
```
###Initialize NodeJs Project
```bash
npm init
```
init command will initialize a project and create the package. json file. There are a few questions asked by NPM each time the “init” command.

###Install Cypress and TypeScript language
```bash
npm install cypress typescript
```

### Create in project root typescript configuration file: "tsconfig.json"

### Add custom Cypress commands to tsconfig.json

```json
"scripts": {
    "cypress": "cypress run",
    "cypress-open": "cypress open"
}

```

### Create in project root Cypress configuration file: "cypress.json"

### Run first cypress to verify yo project and create test samples

```bash
npm run cypress-open
```

## Useful links to understand basics
[Why to Adopt Cypress ?](https://www.thoughtworks.com/radar/tools/cypress)

[Oh no, Protractor is Deprecated ?](https://github.com/angular/protractor/issues/5502)

[Inside Cypress. Cypress Bundled tools](https://docs.cypress.io/guides/references/bundled-tools#Mocha)

[Understanding tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#:~:text=The%20tsconfig.,compiler%20flags%20enabled%20by%20default)

[Cypress project structure](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure)

[How to Configure Cypress](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure)

[Cypress Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)

## License
Donate beer to Mr. Allex