const express = require('express')
const app = express()

// GET /products/2-price-desc
app.get('/products/all', (req, res) => {
    res.send(`
        GET Products: ${req.get('page')}, ${req.get('sort')},     ${req.get('order')}
    `)
})

// GET /products/8719-small-red HTTP/1.1
app.get('/products/:id-:size-:color', (req, res) => {
    res.send(`
    GET Products: ${req.get('id')}, ${req.get('size')}, ${req.get('color')}
    `)
})

// GET /products/8719 HTTP/1.1
app.get('/products/:id', (req, res) => {
    res.send(`
    GET Products: ${req.get('id')}
    `)
})

app.listen(3000)
