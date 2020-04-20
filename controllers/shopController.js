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