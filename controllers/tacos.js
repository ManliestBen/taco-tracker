const Taco = require ('../models/taco')

module.exports = {
  index,
  create,
  delete: deleteTaco,
  show,
  update
}

function index(req, res) {
  Taco.find({})
  .then((tacos) => {
    res.render('index', {tacos})
  })
}

function create(req, res) {
  req.body.tasty = !!req.body.tasty
  Taco.create(req.body)
  .then(() => {
    res.redirect('/tacos')
  })
}

function deleteTaco(req, res) {
  Taco.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/tacos')
  })
}

function show(req, res) {
  Taco.findById(req.params.id)
  .then((taco) => {
    res.render('show', {taco})
  })
}

function update(req, res) {
  req.body.tasty = !!req.body.tasty
  Taco.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((taco) => {
    res.redirect(`/tacos`)
  })
}