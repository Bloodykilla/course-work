const express = require('express');
const app = express();
const PORT = 5000;
const pool = require('./db');
const router = require('./routes/index');
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use(express.json());
app.use('/api', router);

app.use(errorHandler)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
        pool.connect()
            .then(() => console.log(`database connected!`))
            .catch(e => console.log(e))

        
    } catch(e) {
        console.log(e)
    }
}

start()

