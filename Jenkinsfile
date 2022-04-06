def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
def GIT_COMMIT_HASH = "https://github.com/gortovenko/carrectly.git"

pipeline {
  environment {
    imagename = "pavlohortovenko20/adminpage"
  }

    stage('Install NPM packages') {
      steps {
        sh "cd ./carrectly-fe && npm i" 

      }
    }
    stage('Building image') {
      steps{
       sh "docker build -f Dockerfile.build . -t project-build:${DOCKER_IMAGE_BRANCH}"
      }
    }
    /*stage('Push Docker image') {
      steps{
       sh "docker tag -f Dockerfile.build . -t project-build:${DOCKER_IMAGE_BRANCH}"
      }
    }
    stage('Push Docker image') {
      steps{
       sh "docker tag -f Dockerfile.build . -t project-build:${DOCKER_IMAGE_BRANCH}"
      }
    }
    */