const express = require('express');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const app = express();
const port = 3000;

const folderPath = path.join(__dirname, 'text-files');

// Create text file with current timestamp
app.post('/create-file', (req, res) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const fileName = `${timestamp}.txt`;
  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, timestamp, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating file');
    }
    res.send('File created successfully');
  });
});

// Retrieve all text files in the folder
app.get('/get-files', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading files');
    }
    res.json({ files });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
