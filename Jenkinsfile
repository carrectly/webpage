
pipeline {
         agent any

         environment{
             dockerImage =''
             registry ='pavlohortovenko20/carrectlyweb'
             registryCredential ='dockerhub_cred'
             dockerRun ='docker run -p 3000:3000 -d --name web-carrectly pavlohortovenko20/carrectlyweb:latest'
             dockerClean =' docker stop $(docker ps -aq)'
             dockerCleanImg = 'docker container rm $(docker container ls -aq) && docker rmi $(docker images -aq) '
         }

         stages {
                 stage('Checout') {
                 steps {
                     checkout([$class: 'GitSCM', branches: [[name: '*/pipeline']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/carrectly/webpage.git']]])
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
                stage ('stop ald container'){
                steps{
                    script{
                        sshagent(['ssh_key']){
                           sh 'sudo ssh  -i /home/info/.ssh/info root@34.66.206.42 ${dockerClean} logout'
                            }
                        }
                    }
                }
                 stage ('image build and Push') {
                 steps {
                    script{
                        /*docker.image('pavlohortovenko20/carrectlyweb:latest').withRun(' -p 3000:3000') */
                        sshagent(['ssh_key']) {
                          sh 'sudo ssh  -i /home/info/.ssh/info root@34.66.206.42 ${dockerRun}'
                        }
                    }
                }
            }
        }
    } 