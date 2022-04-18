
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
                            echo "all clearn" '
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
                          ''' ls -la /home/info/.ssh/ ''' && \
                          '''sudo ssh  -i /home/info/.ssh/info root@34.66.206.42 ''' && \
                          docker pull ${env.REGISTRY}:${env.BUILD_ID} && \
                           if [ \$(docker ps -qf "name=<your_docker_name>") ]; then docker stop \$(docker ps -qf "name=<your_docker_name>"); fi && \
                            docker run -d -p 3000:3000 --name <your_docker_name>_${env.BUILD_ID} ${env.REGISTRY}:${env.BUILD_ID}
                          '''
                          """
                        }
                    }
                }
            }
        }
    } 