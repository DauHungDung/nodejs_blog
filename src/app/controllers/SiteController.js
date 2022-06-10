class SiteController {

    //[GET] /news
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.send('Search ne`');
    }
}

module.exports = new SiteController;