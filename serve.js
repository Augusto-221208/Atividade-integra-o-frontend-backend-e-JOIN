import Fastify from 'fastify';
import cors from '@fastify/cors';
import pkg from 'pg'

const { Pool } = pkg;

const fastify = Fastify()

//habilitar cors
await fastify.register(cors)

//conexão com postgres
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'loja',
    password: '1234',
    port: 5432,
})

//endpoint GET/compras
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