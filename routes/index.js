var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');
var produtosService = require('../services/produtosService');

/* GET home page. */
router.get('/', function (req, res, next) {
  var posts = postsService.getPosts();
  var projects = projectsService.getProjects();
  var produtos = produtosService.getProdutos();

  res.render('index', { title: 'BLOG', posts: posts, projects: projects, produtos: produtos });
});

router.get('/posts/:postId', function (req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post });

});


router.get('/projects', function (req, res, next) {
  var projects = projectsService.getProjects();

  res.render('projects', { title: 'Projetos', projects: projects });
});

router.get('/project/:projectId', function (req, res, next) {
  var projectId = req.params.projectId;

  var projects = projectsService.getProjects();

  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('project', { title: project.title, project: project });
});

router.get('/produtos', function (req, res, next) {
  var produtos = produtosService.getProdutos();

  res.render('produtos', { title: 'Produtos', produtos: produtos });
});

router.get('/produto/:produtoId', function (req, res, next) {
  var produtoId = req.params.produtoId;

  var produtos = produtosService.getProdutos();

  var produto = produtos.filter((produto) => produto.id == produtoId)[0];

  res.render('produto', { title: produto.title, produto: produto });
});

module.exports = router;