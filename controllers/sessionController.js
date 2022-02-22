const session = require("express-session")

exports.set_session = (req, res) => {
    res.send('set session')
}

exports.get_session = (req, res) => {
    console.log(req.session)
    console.log(req.session.id)
    console.log(req.session.cookie)
    res.send('get session')
}

exports.delete_session = (req, res) => {
    //destroy session
    req.session.destroy(err => {
        if (err) {
            console.log(err)
            res.send('error')
        } else {
            console.log(`session deleted ${req.session}`)
            res.send('session deleted')
        }
    }
)}

