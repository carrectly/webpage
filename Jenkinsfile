
pipeline {
         agent any

         environment{
             dockerImage =''
             registry ='pavlohortovenko20/carrectlyweb'
             registryCredential ='carrectlyweb'
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
                        dockerImage=docker.build registry
                      }
                    }
                 }
                 stage('push image to hub') {
                 steps {
                     script{
                          docker.withRegistry( 'https://hub.docker.com/', registryCredential ) {
                          dockerImage.push()
                        }
                    }
                }
            }
        }
    }