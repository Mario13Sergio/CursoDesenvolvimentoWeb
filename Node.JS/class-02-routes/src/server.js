const express = require('express');
const app =express();
const port = 3000

app.listen(port, console.log(`Server is runing on port ${port}`));


const routes = require("./routes");
app.use(routes)