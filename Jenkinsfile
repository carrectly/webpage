
pipeline {
         agent any

         environment{
             dockerImage =''
             registry ='pavlohortovenko20/carrectlyweb'
             registryCredential ='dockerhub_cred'
             dockerRun ='docker run -p 3000:3000 -d --name web-carrectly pavlohortovenko20/carrectlyweb:latest'
             dockerClean =' docker container prune'
             dockerCleanImg = 'docker rmi ${dockercl}'
             dockercl = 'docker images -q'
         }
         stages {
                 stage('Checout') {
                 steps {
                     checkout([$class: 'GitSCM', branches: [[name: '*/pipeline']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/carrectly/webpage.git']]])
                    }
                 } 
                 stage('remove older images') {
                 steps {
                     script{
                        sh 'if [ \$(docker images) ]; then docker rmi $(docker images -aq); fi && \
                            docker rmi $(docker images -aq)'
                            }
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
                        sshagent(['ssh_cred']) {
                          sh """
                          
                          'sudo ssh  root@34.66.206.42 '
                         
                          """
                        }
                    }
                }
            }
        }
    } 