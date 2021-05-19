const express =  require('express');
const app = express();

app.use((req, res) => {
    res.json({message: "Lorem ispum dat message"})
})

module.exports = app;