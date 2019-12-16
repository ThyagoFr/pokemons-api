const mongoose = require("mongoose")
const Pokemon = mongoose.model("Pokemon")

module.exports = {
    // GET ALL
    async index(req, res) {
        const { page = 1 } = req.query
        await Pokemon.paginate({}, { page, limit: 10 }, (error, pokemons) => {
            if (error) return res.status(500).json({ "message": "There is a problem finding the pokemons" })
            if (pokemons === 0) return res.status(404).json({ "message": "Empty list" })
            return res.status(200).json(pokemons)

        })
    },

    // GET IF NAME
    async show_name(req, res) {
        const name_search = req.params.name.charAt(0).toUpperCase() + req.params.name.substring(1)
        await Pokemon.find({ name: name_search }, (error, pokemon) => {
            if (error) return res.status(500).json({ "message": "There is a problem finding the pokemon" })
            if (pokemon === 0) return res.status(404).json({ "message": "Pokemon not finded" })
            return res.status(200).json(pokemon)
        })
    },

    // GET IF TYPE
    async show_type(req, res) {
        const type_search = req.params.type.charAt(0).toUpperCase() + req.params.type.substring(1)
        Pokemon.find({ type: type_search }, (error, pokemons) => {
            if (error) return res.status(500).json({ "message": "There is a problem finding the pokemon" })
            if (pokemons.length === 0) return res.status(404).json({ "message": "Pokemons not finded" })
            return res.status(200).json(pokemons)
        })
    },
    
    // POST
    async store(req, res) {
        req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1)
        req.body.type = req.body.type.charAt(0).toUpperCase() + req.body.type.substring(1)
        await Pokemon.create(req.body, (error, pokemon) => {
            if (error) return res.status(500).json({ "message": "There is a problem creating the instance" })
            return res.status(200).json({ "message": "Pokemons created with sucess", "data": pokemon })
        })
    },

    // PUT
    async update(req, res) {
        await Pokemon.findOneAndUpdate(req.params.id, req.body, { new: true }, (error, pokemon) => {
            if (error) return res.status(500).json({ "message": "There is a problem updating the instance" })
            if (pokemons.length === 0) return res.status(404).json({ "message": "Pokemons not finded" })
            return res.status(200).json(pokemons)
        })
    },

    // DELETE
    async destroy(req, res) {
        await Pokemon.findOneAndDelete(req.params.id, (error, pokemon) => {
            if (error) return res.status(500).json({ "message": "There is a problem updating the instance" })
            if (pokemons.length === 0) return res.status(404).json({ "message": "Pokemons not finded" })
            return res.status(200).json(pokemons)
        })
    }
}