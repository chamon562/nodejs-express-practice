# nodejs-express-practice
## Rest Api info
- Example of a Rest API is like you search for something and you get a list of results back from the service your requesting from. 
- An API is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the api on the server and allows client to talk to it.
- Rest determines how the api looks like. Rest stands for Representational state transfer.
- It is a set of rules that developers follow when 
they create their api's.
- Nowadays almost all api's are rest api's.
## CRUD 
- Crud is an achronym that stands for:
    - Create aka HTTP POST method
    - Read aka HTTP GET method
    - Update aka HTTP PUT method
    - Delete aka HTTP DELETE METHOD
- Examples of crud.
    - whenever having a data base of users need to be able to create user account GET or READ profile details. 
    - UPDATE the profile details. 
    - OR DELETE and account if the user no longer wants it.
## url to download node
https://nodejs.org/en/[https://nodejs.org/en/]
- Use node to create server side javascript applications.
## Initial Node
- In terminal npm init or npm init -y if the user doesnt wants to automatically have the package.json built.
## install Express and info
- npm install express
- Express is a web framework for Node.js. This will help us create different routes for api.
- testing endpoints on postman
## using import instead 
- before had to do const express = require("express")
- now by adding "type": "module: in package.json it allows to be able to use import
    ```json
     "name": "express-restapi",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "type": "module",
    ```
# Fix node_modules not to show in git
1. How it started. I created a github repo and started adding node packages I believe which an article on stack overflow said " the node_modules directory is already tracked as part of the repository, the .gitignore rule will not apply to it. You need to untrack the directory from git using:"
    ```zsh 
    git rm -r --cached node_modules
    git commit -m "removing node_modules"
    ```
"After this, the .gitignore rule will ignore the directory away.

Note that this will remove the directory node_modules from your other repos once you pull the changes in. Only the original repo where you made that commit will still have the node_modules folder there."
- i git add . and check the git status and saw that node_modules was no longer there. 