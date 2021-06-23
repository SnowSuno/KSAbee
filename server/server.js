const express = require('express');
const app = express();
const api = require('./routes/index');
// const cors = require('cors');
//
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,
// };
//
// app.use(cors(corsOptions));
app.use('/api', api);

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));