const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({
        msg: "Hello!"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Serving on port 5000...')
})