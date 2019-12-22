pipeline {
  agent {
    docker {
      image 'node:alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        mail(subject: 'Successfully Ran The Code', body: 'All Tests Passed', from: 'royabhishek967@gmail.com', to: 'abhirocks12345@hotmail.com')
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm build'
      }
    }

  }
  environment {
    CI = 'true'
  }
}