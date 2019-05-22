const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Headling GET function'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Headling POST function test'
    });
});
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Votre id = ' + id 
    });
});
router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'updated product ' + id 
    });
});
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'deleted product ' + id 
    });
});

module.exports = router;