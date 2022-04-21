
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
             dockercd = 'if [ \$(docker ps)]; then docker stop $(docker ps -aq); fi &&\
                               docker run -d -p 3000:3000 ${env.REGISTRY}:${env.BUILD_ID}'
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
                        sh 'if [ $(docker images) ]; then docker rmi $(docker images -aq); fi && \
                            docker images' 
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
                            sh '''
                            for pavlohortovenko to 34.66.206.42 
                            do 
                            sudo ssh  -o StrictHostKeyChecking=no -i /home/pavlohortovenko/.ssh/gcp pavlohortovenko@34.66.206.42
                            """ 
                            if [ $(docker ps -aq) ]  
                            then
                             docker stop "$(docker ps -aq)"
                            else
                             docker pull pavlohortovenko20/carrectlyweb:latest && docker run -d -p 3000:3000 pavlohortovenko20/carrectlyweb:latest 
                            fi
                            """
                            done 
                            '''
                    }
                }
            }
        }
    