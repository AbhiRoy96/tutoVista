pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install --production'
      }
    }

    stage('Publish') {
      steps {
        sh 'node server.js'
      }
    }

  }
}