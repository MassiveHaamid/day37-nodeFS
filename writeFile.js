const fs = require('fs');

const content = '\nAbove has details of the session with their respective timestamps';

fs.writeFile('./date-time.txt', content, {flag: 'w+'}, err => {
    if (err) console.log(err);
    console.log('content written successfully!');
});