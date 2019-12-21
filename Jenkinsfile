pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''docker --version
docker image build -t demo:1.0 .
'''
      }
    }

    stage('Publish') {
      steps {
        sh 'docker container run --publish 3000:3000 --detach --name d1 demo:1.0'
      }
    }

  }
}