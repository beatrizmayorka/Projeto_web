var express = require('express');
var router = express.Router();
var testimonialsService = require('../../services/testimonialsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next) {

    var testimonials = testimonialsService.getTestimonials();

    var data = {
        testimonials: testimonials
    };

    res.render('admin/testimonials/index', data);
});

router.get('/create', function(req, res, next){

    res.render('admin/testimonials/create');
});

router.post('/create', upload.single('image'), function(req, res, next){

    var testimonials = testimonialsService.getTestimonials();

    var newId = testimonials.length + 1;

    var newTestimony = {};
    newTestimony.id = newId;
    newTestimony.name = req.body.name;
    newTestimony.image = req.file.filename;
    newTestimony.company = req.body.company;
    newTestimony.title = req.body.title;
    newTestimony.testimony = req.body.testimony;

    testimonialsService.saveTestimony(newTestimony);

    res.redirect('/admin/testimonials');
})

module.exports = router;