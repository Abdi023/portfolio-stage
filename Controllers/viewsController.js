
exports.getIndex = async(req, res) => {

    res.status(200).render('home', {
        title: 'index Home page'
    })
}

exports.aboutMe = async(req, res) => {

    res.status(200).render('about', {
        title: 'about me'
    })
}

exports.portfolio = async(req, res) => {

    res.status(200).render('portfolio', {
        title: 'dit zijn mijn projecten'
    })
}


exports.contact = async(req, res) => {

    res.status(200).render('form', {
        title: 'Contact me'
    })
}