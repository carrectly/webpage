def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
pipeline {
         agent any
         stages {
                 stage(build) {
                 steps {
                     sh 'npm i'
                     sh 'docker build -f Dockerfile.build . -t project-build:${DOCKER_IMAGE_BRANCH}'
                    }
                 }
                 stage(test) {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
                 stage(deploy) {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
         }
    }