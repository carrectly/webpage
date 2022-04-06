def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
pipeline {
         agent any
         stages {
                 stage(build) {
                 steps {
                     sh 'docker build  Dockerfile.build . '
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