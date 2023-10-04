import conexao from "./connection.js";

export async function Listar() {
    let sql = `select * from tb_produto
              inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria`;

    let [resp] = await conexao.query(sql)

    return resp
}

export async function Buscarcategorias(){
    let comando = `select * from tb_categoria`
    let [resp] = await conexao.query(comando)
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

export async function Editar (id, produtos){

    let sql = `update tb_produto set 
    id_categoria = ?,
    nm_marca = ?,
    nm_produto = ?,
    ds_estoque = ?,
    nr_preco = ?,
    nr_garantia = ?
    where id_produto = ?`

    let [info] = await conexao.query(sql, [

        produtos.categoria,
        produtos.marca,
        produtos.produto,
        produtos.estoque,
        produtos.preco,
        produtos.garantia,
        id
    ]);

    let linha = info.affectedRows;
    return linha;
}

export async function Deletar(id){
    let sql = `delete from tb_produto where id_produto = ?`

    let [info] = await conexao.query(sql, [id])

    let linha = info.affectedRow;
    return linha;
}