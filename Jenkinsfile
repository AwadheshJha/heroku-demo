pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    tools {
        nodejs "nodejs" // Ensure this matches NodeJS name in Jenkins
    }

    environment {
        CI = 'true'
        BASE_URL = 'https://the-internet.herokuapp.com'
        CYPRESS_CACHE_FOLDER = './cypress-cache'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Remove credentialsId if repo is public
                git url: 'https://github.com/AwadheshJha/heroku-demo.git', branch: 'develop'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'  // Optional: confirm NodeJS version
                sh 'npm ci'   // Use npm ci for clean install
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --config baseUrl=$BASE_URL'
            }
        }

        stage('Run postman Tests') {
            steps {
                sh 'newman run collection.json --reporters cli'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit 'cypress/results/*.xml'
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
                archiveArtifacts artifacts: 'newman-report/*.html', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Cypress test run completed'
        }
    }
}
