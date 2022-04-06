def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
pipeline {
         agent any
         stages {
                 stage(build) {
                 steps {
                     sh 'docker build("${DOCKER_IMAGE_BRANCH}:${env.BUILD_ID}") '
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