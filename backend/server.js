const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.get('/', (req, res)=>{
    res.json([
        {
            name: 'Muhajir',
            age: 20
        },
        {
            name: 'Adi',
            age: 20
        },
        {
            name: 'Indah',
            age: 20
        },
        {
            name: 'Umi',
            age: 20
        },
        {
            name: 'Awal',
            age: 20
        }
    ])
})

app.listen(3000, ()=>{
    console.log('listening port 3000');
});