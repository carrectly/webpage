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

pipeline {
  agent any
  stages {
      stage("Clone git repository") {
          steps {
              sh "git clone ${GIT_COMMIT_HASH} -b main && cd carrectly-fe && npm i  "
          }
      }
  }
}
