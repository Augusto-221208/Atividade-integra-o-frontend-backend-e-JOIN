import { useEffect, useState } from 'react'

function App() {
  const [compras, setCompras] = useState([])
  const [estoque, setEstoque] = useState([])

  useEffect(() => {
    // Atividade 1 - /compras
    fetch('http://localhost:3000/compras')
      .then(res => res.json())
      .then(data => {
        console.log('Compras:', data)
        setCompras(data)
      })
      .catch(err => console.error('Erro ao buscar compras:', err))

    // Atividade 2 - /estoque
    fetch('http://localhost:3000/estoque')
      .then(res => res.json())
      .then(data => {
        console.log('Estoque:', data)
        setEstoque(data)
      })
      .catch(err => console.error('Erro ao buscar estoque:', err))
  }, [])

  return (
    <div>
      <h1>Compras</h1>
      <ul>
        {compras.map((c, i) => (
          <li key={i}>
            {c.pessoa} — {c.item} — R$ {c.preco}
          </li>
        ))}
      </ul>

      <h1>Estoque</h1>
      <ul>
        {estoque.map((p, i) => (
          <li key={i}>
            <strong>{p.nome_produto}</strong> — {p.nome_categoria} — Lucro: R$ {Number(p.lucro).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App