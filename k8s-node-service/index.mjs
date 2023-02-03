import express from 'express';
import os from 'os';

const app = express();
const port = 3000 ;

app.get("/",(req,res) => {
    const message=`Hello World, I am pod ${os.hostname()}`
    res.send(message)

});


app.listen(port, () => {
    console.log(`web server is listing at port ${port}`)
    console.log(os.hostname())
});