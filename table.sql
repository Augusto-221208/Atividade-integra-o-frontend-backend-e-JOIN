CREATE TABLE CLIENTE(
    id serial primary key,
    nome VARCHAR(255)
);

CREATE TANLE PEDIDO(
    id serial primary key,
    item VARCHAR(255),
    valor DECIMAL(10,2),
    id_cliente INTEGER REFERENCES CLIENTE(id) ON DELETE CASCADE
);
INSERT INTO CLIENTE (nome) VALUES ('vitor'),('Eric'),('Ale');
INSERT INTO PEDIDO (item,valor,id_cliente) VALUES ('mouse',89.99,1);
INSERT INTO PEDIDO (item,valor,id_cliente) VALUES ('caneca',27.75,2);
INSERT INTO PEDIDO (item,valor,id_cliente) VALUES ('ps5',1000.00,1);

SELECT
    c.nome,
    p.item,
    p.valor as preco

FROM
    CLIENTE c
INNER JOIN
    PEDIDO p ON c.id = p.id_cliente;