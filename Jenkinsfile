
pipeline {
         agent any

         environment{
             dockerImage =''
             registry ='pavlohortovenko20/carrectlyweb'
         }

         stages {
                 stage('Checout') {
                 steps {
                     checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/gortovenko/carrectly.git']]])
                    }
                 } 
                 stage('Build Docker image') {
                 steps {
                     script {
                        dockerImage =docker.build registry
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