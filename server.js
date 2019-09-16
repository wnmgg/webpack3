let express = require('express');
let app = express();

app.get('/api/user',(req,res)=>{
    res.json({name:'tmmd'});
});

app.listen(3008);