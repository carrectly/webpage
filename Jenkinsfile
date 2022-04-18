
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
                        sh '
                            if [ \$(docker ps -qf "name=<your_docker_name>") ]; then docker stop \$(docker ps -qf "name=<your_docker_name>"); fi && \
                            docker rmi $(docker images -qf)
                            '
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
                        sshagent(['ssh_key']) {
                          sh 'sudo ssh  -i /home/info/.ssh/info root@34.66.206.42 ${dockerRun}'
                        }
                    }
                }
            }
        }
    } 