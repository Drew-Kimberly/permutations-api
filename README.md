# NodeJS Objection Permutations API
REST API for generating JSON object permutations using AWS Lambda

[![Build Status](https://travis-ci.org/Drew-Kimberly/permutations-api.svg?branch=master)](https://travis-ci.org/Drew-Kimberly/permutations-api)

# Usage
Exposes an API endpoint that accepts JSON objects via POST request.
Using Curl:
```shell script
curl --location --request POST 'https://ld5313ibp5.execute-api.us-east-1.amazonaws.com/dev/permutations' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pilot": ["Han Solo", "Lando Calrissian"],
    "copilot": ["Chewbacca", "Rey"],
    "ship": "Falcon",
    "speed": "1.5c"
}'
```

Expected response:
```json
[
  {
    "pilot": "Han Solo",
    "copilot": "Chewbacca",
    "ship": "Falcon",
    "speed": "1.5c"
  },
  {
    "pilot": "Han Solo",
    "copilot": "Rey",
    "ship": "Falcon",
    "speed": "1.5c"
  },
  {
    "pilot": "Lando Calrissian",
    "copilot": "Chewbacca",
    "ship": "Falcon",
    "speed": "1.5c"
  },
  {
    "pilot": "Lando Calrissian",
    "copilot": "Rey",
    "ship": "Falcon",
    "speed": "1.5c"
  }
]
```

## Postman
You can test this API using Postman by importing the collection located at `./postman/permutations.postman_collection.json`

# Development

## Install Serverless Framework Globally
```shell script
npm i -g serverless
```

## Install Dependencies
```shell script
npm i
```

The lambda function is located at `./src/permutations.ts`.

## Validate Types
```shell script
npm run check
```

# Deployment
Deployment is handled by TravisCI and the Serverless CLI. The serverless stack will be
deployed/updated once changes are merged into `master`.
See [Serverless config](./serverless.yml) and [TravisCI config](./.travis.yml) for configuration.
