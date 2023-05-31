const index = (req, res) => {
    res.send('Products.index')
}

const form = (req, res) => {
    res.send('Product.form')
}

const show = (req, res) => {
    res.send('Product.show')
}

const create = (req, res) => {
    res.send('Product.create')
}

const update = (req, res) => {
    res.send('Product.update')
}

const remove = (req, res) => {
    res.send("Product.remove")
}

module.exports = { index, form, show, create, update, remove }