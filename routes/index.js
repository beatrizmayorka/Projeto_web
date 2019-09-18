var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');
var noticiasService = require('../services/noticiasService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();
  var projects = projectsService.getProjects();
  var noticias = noticiasService.getNoticias();

  res.render('index', { title: 'Blog', posts: posts, projects: projects, noticias: noticias});
});


  router.get('/posts/:postId', function(req, res, next) {
    var postId = req.params.postId;
    var posts = postsService.getPosts();
    var post = posts.filter((post) => post.id == postId) [0];

    res.render('post', { title: post.title, post: post });

  });


  router.get('/project', function(req, res, next) {
    var projects = projectsService.getProjects();
  
    res.render('projects', { title: 'Projeto', projects: projects });
  });
  
    router.get('/project/:projectId', function(req, res, next) {
      var projectId = req.params.projectId;
      var projects = projectsService.getProjects();
      var project = projects.filter((project) => project.id == projectId) [0];
  
      res.render('project', { title: project.title, project: project });
  
    });

    router.get('/noticias', function(req, res, next) {
      var noticias = noticiasService.getNoticias();
    
      res.render('noticias', { title: 'Notícias', noticias: noticias });
    });
    
      router.get('/noticia/:noticiaId', function(req, res, next) {
        var noticiaId = req.params.noticiaId;
        var noticias = noticiasService.getNoticias();
        var noticia = noticias.filter((noticia) => noticia.id == noticiaId) [0];
    
        res.render('noticia', { title: noticia.title, noticia: noticia });
    
      });

module.exports = router;
