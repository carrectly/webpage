def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
pipeline {
         agent any
         stages {
                 stage('build') {
                 steps {
                     def customImage = docker.build("my-image:${env.BUILD_ID}")
                     customImage.inside {
                     sh 'make test'
                    }
                 }
                 stage('test') {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
                 stage('deploy') {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
         }
    }