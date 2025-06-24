pipeline {
    agent any

    tools {
        nodejs "nodejs" // Ensure this matches NodeJS name in Jenkins
    }

    environment {
        CI = 'true'
        BASE_URL = 'https://the-internet.herokuapp.com'
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
                sh 'npm install'  // Change to npm install if package-lock.json is missing
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
