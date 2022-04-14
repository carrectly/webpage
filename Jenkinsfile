
pipeline {
         agent any

         environment{
             dockerImage =''
             registry ='pavlohortovenko20/carrectlyweb'
             registryCredential ='dockerhub_cred'
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
                          docker.withRegistry( '', registryCredential ) {
                          dockerImage.push()
                          }
                        }
                    }
                }
                 stage ('image build and Push') {
                 steps {
                    script{
                        def dockerRun = 'docker run -p 3000:3000 -d -name web-carrectly pavlohortovenko20/carrectlyweb:latest'
                        /*docker.image('pavlohortovenko20/carrectlyweb:latest').withRun(' -p 3000:3000') */
                        sshagent(['ssh_key']) {
                          sh 'sudo chmod 755 /home/info/.ssh/info && sudo chown ${USER} /home/info/.ssh/info && ssh -i /home/info/.ssh/info info@34.66.206.42 ${dockerRun}'
                        }
                    }
                }
            }
        }
    } 