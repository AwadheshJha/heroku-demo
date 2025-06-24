pipeline {
    agent any

    tools {
        nodejs "nodejs" // match with Global Tool name
    }

    environment {
        CI = 'true'
        BASE_URL = 'https://the-internet.herokuapp.com' // Optional for E2E
    }

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'AwadheshJha', url: 'https://github.com/AwadheshJha/heroku-demo.git', branch: 'develop'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --config baseUrl=$BASE_URL'
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Cypress test run completed'
        }
    }
}
