# AWS CFn examples with localstack
The aws-cloudformation-lesson repository covers examples of CloudFormation templates.

Do you like AWS CloudFormation? I'm not a fan and I dislike it. However, when building infrastructure as code (IaC) on AWS, using CFn is inevitable (although there are other options like CDK and Terraform).

So, I'll have ChatGPT create questions, and I'll provide the answer to that problem. Building infrastructure on AWS incurs costs. So, I will use [localstack (AWS mock)](https://localstack.cloud/). However, please note that there is a monthly fee for using localstack to mock certain AWS services.

## Prerequisites
- [Docker](https://www.docker.com/)
- [localstack](https://localstack.cloud/)

## Questions & Answers
|No.|Question|Answer|
|:---|:---|:---|
|1|Hosting a static website: Set up an S3 bucket to store HTML, CSS, and JavaScript files and configure it for static website hosting.|[WIP]|
|2|Serverless API: Create an API Gateway endpoint connected to an AWS Lambda function for handling API requests.|[WIP]|
|3|Database deployment: Provision an Amazon RDS instance, such as MySQL or PostgreSQL, with appropriate security groups and database configurations.|[WIP]|
|4|File storage solution: Create an S3 bucket with fine-grained access control for storing and managing files.|[WIP]|
|5|Event-driven processing: Set up an SNS topic to receive events and trigger a Lambda function for processing.|[WIP]|
|6|Scheduled job execution: Use CloudWatch Events to schedule and trigger a Lambda function at specific intervals.|[WIP]|
|7|Simple notification system: Configure an SNS topic to send email notifications when specific events occur.|[WIP]|
|8|Serverless image resizing: Create a Lambda function that automatically resizes and stores images uploaded to an S3 bucket.|[WIP]|
|9|Data warehousing: Provision an Amazon Redshift cluster for large-scale data storage and analysis.|[WIP]|
|10|Monitoring and logging: Set up CloudWatch Alarms and CloudWatch Logs for monitoring and logging important metrics and events.|[WIP]|

## Contributing
I'm looking for someone who can come up with the infrastructure construction (it means 'question') that should be created with CloudFormation.  

Contributions are not only related to development. For example, GitHub Star motivates me to develop!

## Special Thanks
![localstack](./docs/images/localstack-readme-banner.svg)
[LocalStack](https://localstack.cloud/) is a service that mocks AWS, covering a wide range of AWS services. It is not easy to set up an AWS infrastructure for personal development, but LocalStack has lowered the barrier for server application development.   

It has been incredibly helpful for my technical learning, and among the open-source software (OSS) I encountered in 2023, LocalStack is undoubtedly the best tool. I would like to take this opportunity to express my gratitude.

## LICENSE
[MIT LICENSE](./LICENSE)