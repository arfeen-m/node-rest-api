const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name : req.body.name,
        productId: req.body.productId
    };
    res.status(201).json({
        message: 'Handling POST requests to products',
        createdProduct: product
    });
});

router.get('/:productID', (req, res, next) =>{
    const id = req.params.productID;
    if(id == 'Special'){
        res.status(200).json({
            message: 'Passed Special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Passed non special ID'
        });
    }
});

router.patch('/:productID', (req, res, next) =>{

    res.status(200).json({
        message: 'Product updated!',
    });
});

router.delete('/:productID', (req, res, next) =>{

    res.status(200).json({
        message: 'deleted updated!',
    });
});

module.exports = router;