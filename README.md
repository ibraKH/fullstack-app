## Hosting FullStack app in aws
### Udacity project

##### in this project we will host both frontend and backend to aws 
## Tech used : 
- Nodejs
- TypeScript
- Express
- Angular

### [Documentation](https://github.com/ibraKH/fullstack-app/tree/main/docs)

### To start this project :
- $ git clone https://github.com/ibraKH/fullstack-app.git
- $ cd fullstack-app
- frontend :
    - cd udagram-frontend
    - npm install
    - npm run start
- backend :
    - cd udagram-api
    - npm install 
    - add [.env](#env) file 
    - npm run start
#### Note:
Split terminal for frontend and backend

### testing :
- $ cd udagram-frontend
- $ npm run test

# Env :
- PORT
- POSTGRES_HOST
- POSTGRES_PORT
- POSTGRES_DB
- POSTGRES_USERNAM
- POSTGRES_PASSWORD
- URL
- JWT_SECRET
- AWS_REGION
- AWS_PROFILE
- AWS_BUCKET


#### Frontend endpoint :
http://fullstack-test-ud.s3-website-us-east-1.amazonaws.com/home
#### backend api : 
http://udagram-ud-test-dev.us-east-1.elasticbeanstalk.com/