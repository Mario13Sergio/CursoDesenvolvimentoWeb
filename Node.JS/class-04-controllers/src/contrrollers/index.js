module.exports = 
    create(req, res) {
        const {id, name } = req.body;
        res.json({id, name});
    },
    read  (req, res) {
        const {id, name } = req.params;
        res.json({situation:`Update user de ID ${id}`});

}