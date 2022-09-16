const { response } = require('express')

const userGet = (req, res) => {
    res.json({
        msg: 'get - api'
    });
}

const userPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'post - api',
        body
    });
}
const userPut = (req, res) => {
    res.json({
        msg: 'put - api'
    });
}
const userDelete = (req, res) => {
    res.json({
        msg: 'delete - api'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}