const express = require('express');
const app = express();
const port = 5000;
const morgan = require('morgan');
const cors = require('cors')
const router = require('./Router')


//Morgan middleware
app.use(express.json());// body-parser
app.use(cors());
app.use(morgan('dev'));


//Router
app.use('/emailTask', router)



app.listen(port, () => {
  console.log(`Server is running on --------------->> ${port}`)

})


