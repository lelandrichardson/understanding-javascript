# Understanding JavaScript


## Getting Started

### Install Node / NPM / NVM

You will want to have node and npm installed on your machine.

From a command line, check to see if you have node with the following command:

```bash
node --version
```

If the returned version is > 6, you are good.

If the version is less than 6, you want to use a newer version of node.

Check to see if you have `nvm` installed:

```bash
command -v nvm
```

If the above command returns a set of instructions, you have nvm installed.

Simply run:

```bash
nvm install 7 && nvm use 7
```
Which will install the latest version of node and npm, and start using it in that command
line client.  If you'd like to use this version of node by default, run:

```bash
nvm alias default 7
```

If you don't currently have nvm installed, you can install it with the following command:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

When that is done, run:

```bash
nvm install node
```


### Install dependencies

```bash
npm install
```

### Run the exercises

To run the tests once

```bash
npm run test
```

To run the tests for the exercises and do live development:

```bash
npm run watch
```
