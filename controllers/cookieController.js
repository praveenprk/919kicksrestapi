exports.set_cookie =  (req, res) => {
    res.cookie('username', 'praveen47')
    res.cookie('cart', [{
        pid: 1,
        qty: 2
    },
    {
        pid: 2,
        qty: 3
    }])
    res.send('cookie set')
    console.log(req.cookie)
}

exports.get_cookie =  (req, res) => {
    console.log(req.cookies)
    res.send('get cookie')
}

exports.delete_cookie =  (req, res) => {
    res.clearCookie('username')
    res.clearCookie('cart')
    res.send('cookie delete')
    console.log(req.cookies)
}