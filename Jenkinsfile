pipeline {
  environment {
    jenkins_home = "/var/jenkins_home"
    imagename = "pavlohortovenko20/adminpage"
    docker_branch = "pavlohortovenko20/carrectlyweb"
  }

    stage('Install NPM packages') {
      steps {
        sh "cd ./carrectly-fe && npm i" 

      }
    }
    stage('Building image') {
      steps{
       sh "docker build -f Dockerfile.build . -t project-build:${docker_branch}"
      }
    }