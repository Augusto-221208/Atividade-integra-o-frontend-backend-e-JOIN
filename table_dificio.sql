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
INSERT INTO clientes (nome, email, data_nascimento)
VALUES 
('Marcos Coelho', 'marcos@example.com', '2000-05-15'),
('Ana Souza', 'ana@example.com', '1998-10-15'),
('Carlos Lima', 'carlos@example.com', '1995-05-20');
INSERT INTO agendamentos (id_cliente, servico, preco, data_agendamento, horario)
VALUES
(1, 'Corte degradê', 50.00, '2026-07-01', '14:00:00'),
(2, 'cabelo', 30.00, '2026-07-02', '10:00:00'),
(3, 'barba', 100.00, '2026-07-03', '16:00:00');