import conexao from "./connection.js";

export async function ListarProdutos() {
    let sql = `select * from tb_produto
              inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria`;

    let [resp] = await conexao.query(sql)

    return resp
}

export async function Cadastro(produto){
    let sql = `insert into tb_produto (id_categoria, nm_marca, nm_produto, ds_estoque, nr_preco, nr_garantia)
    values (?, ?, ?, ?, ?, ?)`

    let [info]= await conexao.query(sql,[
        
     produto.idcategoria,
     produto.marca,
     produto.nome,
     produto.estoque,
     produto.preço,
     produto.garantia
    ]);

    produto.id = info.insertId

    return produto;
}





