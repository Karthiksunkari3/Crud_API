import express from 'express';
import bodyParsar from 'body-parser';

import users from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParsar.json());

app.use('/users',users);

app.get('/',(req,res)=>{
    console.log("[TEST]!");
    res.send('hello form home page');

});

app.listen(PORT,()=> console.log(`server running on port : http://localhost:${PORT}`));
