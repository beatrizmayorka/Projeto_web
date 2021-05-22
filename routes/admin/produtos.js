var express = require('express');
var router = express.Router();
var produtosService = require('../../services/produtosService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function (req, res, next) {

    var produtos = produtosService.getProdutos();

    var data = {
        produtos: produtos
    };

    res.render('admin/produtos/index', data);
});

router.get('/create', function (req, res, next) {

    res.render('admin/produtos/create');
});

router.post('/create', upload.single('image'), function (req, res, next) {

    var produtos = produtosService.getProdutos();

    var newId = produtos.length + 1;

    var newProduto = {};
    newProduto.name = req.body.name;
    newProduto.image = req.file.filename;
    newProduto.description = req.body.description;
    newProduto.price = req.body.price;

    produtoService.saveProduto(newProduto);

    res.redirect('/admin/produtos');
})

module.exports = router;