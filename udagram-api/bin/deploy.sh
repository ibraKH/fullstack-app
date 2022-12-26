eb init udagram-ud-test --platform node.js --region us-east-1 &&
eb use udagram-ud-test-dev && DB_HOST=$DB_HOST DB_USER=$DB_USER DB_PASSWORD=$DB_PASSWORD DB_NAME=$DB_NAME TOKEN_SECRET=$TOKEN_SECRET AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY &&
eb deploy udagram-ud-test-dev