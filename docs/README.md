### AWS required services :
- RDS - for hosting Database
- Elastic Beanstalk - for hosting backend
- S3 - for hosting frontend
- IAM - to create users for cli

### Required Dependencies :
- Node & npm
- AWS cli

### Circleci :
Before using CircleCi create [package.json](#pipeline)
Main Jobs :
- installing and building and deploying for both the backend and frontend
- AWS configuration

## Pipeline : 
- Frotend :
    - install
    - build
    - deploy
- Backend :
    - install
    - build
    - deploy