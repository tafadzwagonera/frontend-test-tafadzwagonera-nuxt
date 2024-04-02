## Table of Contents
- [Installation](#installation)
- [How to Run](#how-to-run)

# Installation

1. Install Node.js version `>= v20.10.0`. If you don't have node.js `>= v20.10.0` readily installed you can install NVM as per the following [instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating). Once NVM is installed you can follow the instructions below to install a compatible Node.js version. You can check the available versions using `nvm ls-remote` and choose a version from the list.

```bash
$ nvm use 20.10.0
$ nvm alias default 20.10.0
# You'll need to restart your `bash` session with `source ~/.bashrc` for each window (tabs referencing the old session will need to closed) or by closing and starting a new Terminal application.
```

2. Now that you've the correct Node.js version install you can `git clone` the repository.

```bash
$ git clone git@github.com:tafadzwagonera/frontend-test-tafadzwagonera-nuxt.git
```

3. Install dependencies.

```bash
$ cd ~/path/to/frontend-test-tafadzwagonera 
$ pwd # Verify that you're in `/path/to/frontend-test-tafadzwagonera-nuxt` directory.
$ npm i
```

## How To Run

To run the application, use the following commands

```bash
$ pwd # Verify that you're in `/path/to/frontend-test-tafadzwagonera` directory otherwise `cd ~/path/to/frontend-test-tafadzwagonera`
$ npm run dev
```