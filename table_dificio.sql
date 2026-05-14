CREATE TABLE clientes(
    id serial primary key,
    nome VARCHAR(255),
    email VARCHAR(255),
    data_nascimento DATE
);
CREATE TABLE agendamentos(
    id serial primary key,
    id_cliente INT,
    servico VARCHAR(50),
    preco DECIMAL(10,2),
    data_agendamento DATE,
    horario TIME,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);