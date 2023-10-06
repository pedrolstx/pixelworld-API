import { Router } from "express";
import { AlterarProduto, CadastrarProduto, Categorias, DeletarProduto, ListarProduto,  } from "../repository/pixelworldRepository.js";

const endpoints = Router();

endpoints.get('/listar', async (req, resp) => {
    try {
        let dados = await ListarProduto();
        resp.send(dados);

    } 
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
})

endpoints.get('/listar/categoria', async (req, resp) => {
    try{
        let dados = await Categorias()
        resp.send(dados);
    }

    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };

})

endpoints.post('/produto', async (req,resp) => {
    try {
        let produtos = req.body;
        let dados = await CadastrarProduto(produtos);
        resp.send(dados);
    } 
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.delete('/deletar/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let r = await DeletarProduto(id);
        resp.send()
    }

    catch (err){
        resp.status(500).send ({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.put('/alterar/:id', async (req,resp) =>{
    try {
        let id = req.params.id;
        let produto = req.body;
        let r = await AlterarProduto(id, produto );
        resp.send();
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})


export default endpoints;