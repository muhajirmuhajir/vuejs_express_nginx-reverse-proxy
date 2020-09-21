const app = require('express')()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

app.get('/',async (req,res)=>{
    var api = await axios.get('http://backend:3000')

    if(api.status == 200){
        return res.json(api.data)
    }else{
        res.send('cannot resolve backend')
    }
})

app.listen(7000,()=>{
    console.log('service listening on port 7000');
})