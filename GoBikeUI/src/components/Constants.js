// Constants.js
const prod = {
    API_URL: 'http://gobike.us-east-2.elasticbeanstalk.com' //uses port 5000
};

const dev = {
    API_URL: 'http://localhost:7070'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;