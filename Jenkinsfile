def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
def GIT_COMMIT_HASH = "https://github.com/gortovenko/carrectly.git"

pipeline { 
    options {
        buildDiscarder(
            logRotator(
                artifactDaysToKeepStr: "",
                artifactNumToKeepStr: "",
                daysToKeepStr: "",
                numToKeepStr: "10"
            )
        )
        disableConcurrentBuilds()
    }

    agent any

    stages {

        stage("Git download code")
            steps {
                sh "git clone https://github.com/gortovenko/carrectly.git && cd carrecly && npm i "
            }
        stage("Prepare build image") {
            steps {
                sh "docker build -f Dockerfile.build . -t project-build:${DOCKER_IMAGE_BRANCH}"
            }
        }

        stage("Build project") {
            agent {
                docker {
                    image "project-build:${DOCKER_IMAGE_BRANCH}"
                    args "-v ${PWD}:/usr/src/app -w /usr/src/app"
                    reuseNode true
                    label "build-image"
                }
            }
            steps {
                sh "docker"
                sh "docker run -p 3000:3000 ${DOCKER_IMAGE_BRANCH}"
            }
        }

}