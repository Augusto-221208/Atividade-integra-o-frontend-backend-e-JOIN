import Fastify from 'fastify';
import cors from '@fastify/cors';
import pkg from 'pg'

const { Pool } = pkg;

const fastify = Fastify()
await fastify.register(cors)

//conexão com postgres
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'loja',
    password: '1234',
    port: 5432,
})

fastify.get ('/compras', async (request, reply) => {
    try {
        const res = await pool.query('SELECT pessoa,item,preco FROM compras');
        return res.rows;
    } catch (error) {
        console.error(error);
        return reply.status(500).send('Erro ao buscar compras');
    }
});

fastify.listen({ port: 3000, host: 'localhost' },
console.log('Server running on http://localhost:3000'))

const fastify = require('fastify')({logger: true})
const {client} = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'estoque_db',
    password: '54321',
    port: 5432,
})
client.connect()

fastify.get('/estoque', async (request, reply) => {
    origin: '*'
})

fastify.get('/estoque', async (request, reply) => {

    const resultado= await client.query(`
    SELECT
    produto.id,
    produto.nome_produto,
    produto.preco_custo,
    produto.preco_venda,
    estoque.quantidade
    FROM produto
    INNER JOIN categoria 
    ON produto.categoria_id = categoria.id

    `)
    const produtos = resultado.rows.map(produto => {
        const lucro = produto.preco_venda - produto.preco_custo
        return {
            ...produto,
            lucro
        }
    })
    return produtos
})

fastify.listen({ port: 3000}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server rodando em ${address}`)
});

const { pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:'barbearia',
    password: '1234',
    port: 5432,
});
module.exports = { pool };
const express = require('express');
const cors = express('cors');
const pool = express('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/estoque', async (request, reply) => {

    try {

        const resultado = await client.query(`
        SELECT
        cliente.nome AS nome_cliente,
        TO_char(cliente.data_nascimento, 'DD/MM/YYYY') AS data_nascimento,
        agendamento.servico,
        agendamento.preco,
        estoque.quantidade,
        TO_char(agendamento.data_agendamento, 'DD/MM/YYYY') AS data_agendamento,
        TO_char(agendamento.horario_agendamento, 'HH24:MI') AS horario_agendamento
        FROM cliente
        INNER JOIN agendamento
        ON cliente.id = agendamento.cliente_id`);
        res.json(resultado.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro do servidor' });
    }
})
