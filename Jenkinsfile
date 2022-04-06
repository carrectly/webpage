def DOCKER_IMAGE_BRANCH = "pavlohortovenko20/carrectlyweb"
pipeline {
         agent any
         stages {
                 stage('build') {
                 steps {
                     echo "------- start building ---------"
                     sh " docker.build -t test-version . "
                     echo "---------it's okay--------------"
                    }
                 }
                 stage('test') {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
                 stage('deploy') {
                 steps {
                     echo 'Hi, itisgood. Starting to build the App.'
                    }
                 }
         }
    }