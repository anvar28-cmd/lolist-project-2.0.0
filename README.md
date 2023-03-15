# LoLiST APP

Welcome to LoList 2. LoList is an add-on to the famous MOBA game called League of Legends. This site offers variety of latest content, Including champions, Items and spells. With LoList, you can plan out your builds in advance and have it customized to your individual needs. Start planning your builds and get an edge over your opponents. This updated version of project version 2 has improved security on the backend, increased functionality, and improved responsivness for mobile devices.

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
![Sign up example](https://user-images.githubusercontent.com/48660175/225451292-b4af3acb-6c96-414b-a87c-e25e880d92ff.PNG)
After sign up, you may explore the app. Have fun!

## API Reference
#### Items
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json
#### Champions
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json
#### Spells
http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/summoner.json

## Screenshots
![login page](https://user-images.githubusercontent.com/48660175/225451398-a72ce5bd-adf1-4a3c-a160-676d99a396fb.PNG)
![Sign up example](https://user-images.githubusercontent.com/48660175/225451292-b4af3acb-6c96-414b-a87c-e25e880d92ff.PNG)
![3](https://user-images.githubusercontent.com/48660175/225451493-cefdad1f-fc72-4b79-90f6-a4bf6fbb0a9f.PNG)
![2](https://user-images.githubusercontent.com/48660175/225451502-1a964df0-2e82-436a-8cd4-d8c46b1e5cff.PNG)
![4](https://user-images.githubusercontent.com/48660175/225451508-a641733c-867b-4125-b4ef-58d13a0a1ea7.PNG)

## 🤝 Support

Give a ⭐️ if you like this project!
