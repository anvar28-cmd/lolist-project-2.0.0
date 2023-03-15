# LoLiST APP

Welcome to LoList 2. LoList will be as an add-on to the famous MOBA game called League of Legends. This site offers variety of latest content, Including champions, Items and spells. With LoList, you can plan out your builds in advance and have it customized to your individual needs. Start planning your builds and get an edge over your opponents. This updated version of project version 2 has improved security on the backend, increased functionality, and improved responsivness for mobile devices.

## Tech Stack

Client: React, HTML, CSS, SCSS, JS

Server: Node, Express, mySQL

## Features
- User Login
- Explore Champions
- Explore Items
- Item Build
- Save your build in your account
- Delete Build

## Installation
First, open your vscode or code-editor.
Then, open your terminal and follow below instructions

## Steps
### 1) Clone the repositories

```
    git clone https://github.com/shimazu28/lolist-project-2.0.0.git
    git clone https://github.com/shimazu28/lolist-project-backend-2.0.0.git
```
### 2) Install all dependencies for both repositories(server, client)
```
    npm install 

```
### 3) Install mySQL and create your username and password.
- After installation, open MySQL Workbench
- In schema area, right click on it and create new Schema and call it "lolist"
- You may close the workbench and open knexfile.js in backend
```
    module.exports = {
    
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    database: 'lolist',
    user:     'root',
    password: 'rootroot'
  },
};
```
- Make sure to put your correct user and password
- Open your code-editor and open your terminal in server repository
- Write these commands below to migrate and populate with seeds our database
- Run the server
```
npx knex migrate:latest
npx knex seed:run
node --watch server
```
### 4) Create .env in both folders(client and server)
- Open .env in client side and copy this
```
REACT_APP_BASE_URL=http://localhost:8888
```
- Open .env in server side and copy this
```
PORT=8888
SECRET_KEY=
ALLOWED_ORIGIN=http://localhost:3000
```
You may include own secret key by generating a secret key you can run this line of code in the Terminal: 
```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
```
Make sure to include the output in SECRET_KEY value
### 5) Run your react app in client repository
```
npm start
```

### 6) You may procceed to site and click to sign up link to create a new account.
After sign up, you may explore the app. Have fun!

## API Reference
#### Items
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json
#### Champions
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json
#### Spells
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/summoner.json

## Screenshots



## 🤝 Support

Give a ⭐️ if you like this project!