import { Router } from "express";
import { Cadastro, DeletarProduto, EditarProduto, ListarProdutos } from "../repository/pixelworldRepository.js";

const endpoints = Router();

endpoints.get('/produtos', async (req, resp) => {
    try {
        let dados = await ListarProdutos();
        resp.send(dados);

    } 
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
})

endpoints.post('/produto', async (req,resp) => {
    try {
        let produtos = req.body;
        let dados = await Cadastro(produtos);
        resp.send(dados);
    } 
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.put('/alterarproduto:id', async (req,resp) =>{
    try {
        let id = req.params.id;
        let produtos = req.body;
        let r = await EditarProduto(id, produtos);
        resp.send();

    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.delete('/deletarproduto/:id', async (req,resp) =>{
    try {
        let id = req.params.id;
        let produtos = req.body;
        let r = await DeletarProduto(id, produtos);
        resp.send()
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'});
    }
})

export default endpoints;