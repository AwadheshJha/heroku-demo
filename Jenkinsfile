pipeline {
    agent any

    tools {
        nodejs "NodeJS_18" // match with Global Tool name
    }

    environment {
        CI = 'true'
        BASE_URL = 'https://your-app-url.com' // Optional for E2E
    }

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'your-credentials-id', url: 'https://github.com/your/repo.git', branch: 'main'
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
