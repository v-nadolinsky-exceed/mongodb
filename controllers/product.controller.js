const Product = require('../models/product.model');


exports.test = function (req, res) { 
    res.send ('Привет от тестового контроллера!'); 
};


exports.product_create = function (req, res ,next) {
    let product = new Product(
        {
            // _id: req.body._id,
            text: req.body.text,
            completed: req.body.completed
        }
    );
    product.save(function (err ,val) {
        if (err) {
            return next(err)
        }
        res.send(val)
    })
};

exports.product_details = function (req, res,next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_all = function (req , res) {
    Product.find({}).then(function (product) {
    res.send(product);
    });
   }

exports.product_update = function (req, res,next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_update_all = function (req, res,next) {
    // Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
    //     if (err) return next(err);
    //     res.send('Product udpated.');
    // });
    Product.updateMany({}, {"$set":{"completed": req.body.completed}} , (err, value) => {
        if(err) return next(err)
        res.send(value)
    });
};

exports.product_delete = function (req, res,next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};