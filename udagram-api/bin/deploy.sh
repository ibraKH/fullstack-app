eb init udagram-ud --platform node.js --region us-east-1 &&
eb use udagram-ud && DB_HOST=$DB_HOST DB_USER=$DB_USER DB_PASSWORD=$DB_PASSWORD DB_NAME=$DB_NAME TOKEN_SECRET=$TOKEN_SECRET &&
eb deploy udagram-ud