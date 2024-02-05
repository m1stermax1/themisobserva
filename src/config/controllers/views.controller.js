

const home = async (req, res) => {

    res.render('home', { status: 200, css: '/css/main.css'});
}

export default {
    home
}