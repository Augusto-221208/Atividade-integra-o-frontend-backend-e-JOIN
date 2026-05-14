CREATE TABLE produto(
    id serial primary key,
    nome_produto VARCHAR(255),
    preco_custo DECIMAL(10,2),
    preco_venda DECIMAL(10,2),
    id_cliente INTEGER,

FOREIGN KEY (id_categoria) 
REFERENCES categoria(id)
);
INSERT INTO categoria (nome_categoria) VALUES ('perifericos'),('hardware'),('monitores');
INSERT INTO produto (nome_produto, preco_custo, preco_venda, id_categoria) 
VALUES 
('mouse gamer', 50.00, 120.00, 1),
('teclado mecanico', 100.00, 220.00, 1),
('placa de video', 1200.00, 1800.00, 2),
('processador', 900.00, 1400.00, 2),
('monitor', 700.00, 1100.00, 3);
