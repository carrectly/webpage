def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
pipeline {
         agent any
         stages {
                 stage('Checout') {
                 steps {
                     checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/gortovenko/carrectly.git']]])
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