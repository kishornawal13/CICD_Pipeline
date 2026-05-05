const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Deployed via GitHub Actions to AWS Elastic Beanstalk. Now changes done to check CI/CD deployment.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

