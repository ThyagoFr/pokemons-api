const express = require("express")
const routes = express.Router()
const PokemonController = require("../controllers/PokemonController")

// Retorna todos os Pokemons cadastrados
routes.get("/pokemons",PokemonController.index)

// Busca Pokemon pelo nome
routes.get("/pokemon/name/:name",PokemonController.show_name)

// Busca Pokemons pelo tipo
routes.get("/pokemons/type/:type",PokemonController.show_type)

// Cadastra Pokemon na Pokedex
routes.post("/pokemon",PokemonController.store)

// Atualiza dados de Pokemon
routes.put("/pokemon/:id",PokemonController.update)

// Deleta Pokemon da Pokedex
routes.delete("/pokemon/:id",PokemonController.destroy)

module.exports = routes