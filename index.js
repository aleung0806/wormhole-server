const app = require("./app");
const http = require("http");

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, './.env') });

const server = http.createServer(app);
const port = process.env.PORT || 3001;


server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
