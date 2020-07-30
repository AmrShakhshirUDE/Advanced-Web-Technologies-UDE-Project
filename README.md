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
## To run locally
1. Make sure that you have mongoDB installed on your PC
2. In the top level directory, go to *mongo.py* file

comment line15

`app.config["MONGO_URI"] = os.environ.get("MONGODB_URI")`

then uncomment line16

`app.config["MONGO_URI"] = "mongodb://localhost:27017/final"`

3. Open terminal and go to the path of *mongo.py* then type the following:
```
python3 -m venv venv
venv\scripts\activate
pip install -r requirements.txt
python mongo.py
```
The backend part should be running

4. Go to *client\src\contexts\urlContext.js*

comment line3

`export const UrlContext = createContext("https://first-attempt-advwebtech-ude.herokuapp.com/");`

uncomment line4

`export const UrlContext = createContext("http://localhost:3000/");`

5. Go to *client\package.json*

on line41 make sure that proxy value is: `"http://127.0.0.1:5000/"`

6. Open a new terminal and go to the path of client folder

```
npm install
npm start
```

If `npm start` doesn't work, do the following:
```
npm install rimraf -g
rimraf node_modules
npm start -- --reset-cache
```
then repeat step number 6

# Group members
> **Baohui Deng, Tannaz Vahidi, Amr Shakhshir**
