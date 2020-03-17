const Product = require('../models/product.model');


exports.test = function (req, res) { 
    res.send ('Привет от тестового контроллера!'); 
};


exports.product_create = function (req, res ,next) {
    console.log('req2222222222222222222222222',req.body)
    let product = new Product(
        {
            text: req.body.text,
            completed: req.body.completed
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res,next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res,next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res,next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};