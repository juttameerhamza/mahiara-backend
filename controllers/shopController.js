exports.getIndex = (req, res) => {
    res.render('index');
}

exports.getlogin = (req, res) => {
    res.render('login', {
        title: 'Login',
        path: '/',
    });
}

exports.getSignup = (req, res) => {
    res.render('signup', {
        title: 'Sign Up',
        path: '/'
    });
}

exports.getProduct = (req, res) => {
    res.render('product', {
        title: 'Sign Up',
        path: '/'
    });
}

exports.getCollection = (req, res) => {
    res.render('collection', {
        title: 'Sign Up',
        path: '/'
    });
}