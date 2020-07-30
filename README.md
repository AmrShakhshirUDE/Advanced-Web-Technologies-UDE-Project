# Material Land
This project is designed to facilitate the study process for new students in University of Duisburg-Essen by sharing experience, advices, and helpful files among students.

# Features
## Users can do the following:
1. Register & login
2. Change username, password, and personal image
3. Add posts such as; inquiries and advices
4. Upload helpful files and materials (only pdf, zip, and images)
5. Interact on posts by adding comments, like, and dislike
6. User can update his/her own posts (title, category, contents, and attachment) or remove them. 

# Try on Heroku
[Material Land](https://flaskpro-advwebtech.herokuapp.com/)

# Screenshots


# Technical architecture

# Technologies/ libraries used

# How to run the project
> Make sure that you have mongoDB installed on your PC and we highly recommend you to use visual studio code as a code editor

## To run locally
1. In the top level directory, go to `mongo.py` file

comment line15

`app.config["MONGO_URI"] = os.environ.get("MONGODB_URI")`

then uncomment line16

`app.config["MONGO_URI"] = "mongodb://localhost:27017/final"`

2. Open terminal and go to the path of *mongo.py* then type the following:
```
venv\scripts\activate
pip install -r requirements.txt
python mongo.py
```
The backend part should be running

3. Go to `client\src\contexts\urlContext.js`

comment line3

`export const UrlContext = createContext("https://first-attempt-advwebtech-ude.herokuapp.com/");`

uncomment line4

`export const UrlContext = createContext("http://localhost:3000/");`

4. Go to `client\package.json`

on line41 make sure that proxy value is: `"http://127.0.0.1:5000/"`

5. Open a new terminal and go to the path of client folder

```
npm install
npm start
```

> If `npm start` doesn't work, do the following:
```
npm install rimraf -g
rimraf node_modules
npm start -- --reset-cache
```
then repeat step number 5

## To deploy
1. In the top level directory, go to `mongo.py` file

comment line16

`app.config["MONGO_URI"] = "mongodb://localhost:27017/final"`

then uncomment line15

`app.config["MONGO_URI"] = os.environ.get("MONGODB_URI")`

2. Go to `client\src\contexts\urlContext.js`

uncomment line3

`export const UrlContext = createContext("https://first-attempt-advwebtech-ude.herokuapp.com/");`

comment line4

`export const UrlContext = createContext("http://localhost:3000/");`


3. Seperate 'client' folder from project folder to be deployed seperately


4. follow the guide [Deploy web app to Heroku](https://www.youtube.com/playlist?list=PLpSK06odCvYdSyGkWmc-AdqRc3zmiHPCc)

5. On file `package.json` make sure that proxy value is equal to the url of the deployed frontend app on heroku

# Group members
> **Baohui Deng, Tannaz Vahidi, Amr Shakhshir**
