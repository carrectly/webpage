
pipeline {
         agent any

         stages {
                 stage('Checout') {
                 steps {
                     checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/gortovenko/carrectly.git']]])
                    }
                 }
                 environment{
                    dockerImage ='' 
                 } 
                 stage('Build Docker image') {
                 steps {
                     script {
                       dockerImage = docker.build registery
                      }
                    }
                 }
                 stage('deploy') {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
            }
        }