# Material Land
This project is designed to facilitate the study process for new students in University of Duisburg-Essen by sharing experience, advices, and helpful files among students.
> Project for the course: Advanced web technologies, International studies in engineering, Master of computer engineering, University of Duisburg-Essen

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
![logo](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/1.Logo.png)
![LandingPage](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/2.LandingPage.png)
![Footer](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/3.Footer.png)
![Register](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/4.Register.png)
![Login](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/5.LoginPage.png)
![ProfilePage](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/6.UserPage.png)
![Updata personal data](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/7.Change-update%20userData.png)
![AddPost](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/8.AddPost.png)
![ShowPost](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/9.ShowPosts.png)
![OwnPosts](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/10.Review%20own%20posts.png)
![modify posts](https://github.com/AmrShakhshirUDE/testdeployUDE/blob/master/ProjectImages/11.Update-%20remove%20own%20posts.png)


# Technical architecture
The application consists of two main parts:
* Backend: responsible for server-side web application logic, consists of a server, an application, and a database.
* Frontend: the part that users interact with it.

# Technologies/ libraries used
## Backend technologies
* Flask
* MongoDB for database
## Frontend technologies
* React
* Bootstrap
## Connecting frontend to backend
* Axios
* Postman: to test connectivity especially for 'POST' method
## Deploy technologies
* Gunicorn as a web server gateway interface "WSGI"
* mLab as a cloud database service
* Github
* Heroku

# How to run the project
> Make sure that you have mongoDB installed on your PC and we highly recommend you to use visual studio code as a code editor

## To run locally
1. In the top level directory, go to `mongo.py` file

comment line.15

`app.config["MONGO_URI"] = os.environ.get("MONGODB_URI")`

then uncomment line.16

`app.config["MONGO_URI"] = "mongodb://localhost:27017/final"`

2. Open terminal and go to the path of *mongo.py* then type the following:
```
venv\scripts\activate
pip install -r requirements.txt
python mongo.py
```
The backend part should be running

3. Go to `client\src\contexts\urlContext.js`

comment line.3

`export const UrlContext = createContext("https://first-attempt-advwebtech-ude.herokuapp.com/");`

uncomment line.4

`export const UrlContext = createContext("http://localhost:3000/");`

4. Go to `client\package.json`

on line.41 make sure that proxy value is: `"http://127.0.0.1:5000/"`

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

comment line.16

`app.config["MONGO_URI"] = "mongodb://localhost:27017/final"`

then uncomment line.15

`app.config["MONGO_URI"] = os.environ.get("MONGODB_URI")`

2. Go to `client\src\contexts\urlContext.js`

uncomment line.3

`export const UrlContext = createContext("https://first-attempt-advwebtech-ude.herokuapp.com/");`

comment line.4

`export const UrlContext = createContext("http://localhost:3000/");`


3. Seperate 'client' folder from project folder to be deployed seperately


4. follow the guide [Deploy web app to Heroku](https://www.youtube.com/playlist?list=PLpSK06odCvYdSyGkWmc-AdqRc3zmiHPCc)

5. On file `package.json` make sure that proxy value is equal to the url of the deployed frontend app on heroku

# Group members
> **Baohui Deng, Tannaz Vahidi, Amr Shakhshir**
