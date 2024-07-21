const express = require('express')
const app = express()
const port = 3000

app.get('/menu', (req, res) => {
    const newItems=req.query.newItems;
  res.send(`Menu: Small Lemonade, Medium Lemonade, Large Lemonade,${newItems}`)
})

app.post('/order', (req, res) => {
    const size=req.query.size;
    res.send(`Order Received! ${size}`)
  })

app.put('/order', (req, res) => {
    const size=req.query.size;
    res.send(`Order updated: ${size}`)
  })

app.delete('/order',(req,res)=>{
  res.send('Order has been deleted.')
})  

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})