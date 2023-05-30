const express = require('express')
const app = express()

// GET / HTTP/1.1
app.get('/', (req, res) => {
    res.send('Home Page! GET...')
})

// POST / HTTP/1.1
app.post('/', (req, res) => {
    res.send('Home Page! POST...')
})

// GET /products/2-price-desc
app.get('/products/all', (req, res) => {
    res.send(`
        GET Products: ${req.get('Page')}, ${req.get('Sort')},     ${req.get('Order')}
    `)
})

// GET /products/8719-small-red HTTP/1.1
app.get('/products/:id-:size-:color', (req, res) => {
    res.send(`
    GET Products: ${req.params.id}, ${req.params.size}, ${req.params.color}
    `)
})

// GET /products/8719 HTTP/1.1
app.get('/products/:id', (req, res) => {
    res.send(`
    GET Products: ${req.params.id}
    `)
})

app.listen(3000)
