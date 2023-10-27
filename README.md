# React Website Deployment to AWS S3

This React website project is designed to automatically deploy your web application to an AWS S3 bucket when changes are pushed to the master branch. It's a convenient way to keep your website up-to-date and accessible to your audience.

## Project Overview

- **Technology Stack:** This project is built using React, and it connects to a Firebase server for dynamic data storage and retrieval.

- **Deployment Automation:** We use GitHub Actions to automate the deployment process. When changes are pushed to the `master` branch, the workflow deploys the built application to an AWS S3 bucket.

## GitHub Actions Workflow (main.yml)

The deployment workflow is defined in `.github/workflows/main.yml`. It is triggered on every push to the `master` branch and performs the following steps:

1. **Set up Environment:** The workflow runs on an Ubuntu-based runner.

2. **Configure AWS Credentials:** It configures AWS credentials using GitHub secrets for secure access to your S3 bucket.

3. **Build React App:** The React application is built by installing dependencies and running the build script.

4. **Deploy to S3:** The deployment step syncs the contents of the `./build/` directory to the specified S3 bucket. The `--delete` option ensures that any removed files are deleted from the S3 bucket.

## How to Use

To set up and use this project for automatic deployment, follow these steps:

1. Clone this repository to your local machine.

2. Customize your React web application as needed.

3. Create an S3 bucket on AWS that you want to use for hosting your website.

4. Set up AWS IAM credentials with permissions to access the S3 bucket. Store these credentials as GitHub secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`.

5. Push changes to the `master` branch to trigger the automatic deployment workflow.

The GitHub Actions workflow will take care of building and deploying your website to the specified S3 bucket.

For more specific details on how to set up and use this project, please refer to the documentation within the code files.

## Questions or Collaboration

If you have questions or would like to collaborate, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: Your LinkedIn Profile
