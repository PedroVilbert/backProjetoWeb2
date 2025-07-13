const fs = require('fs');
const path = require('path');

const produtosPath = path.join(__dirname, '..', 'data', 'produtos.json');

// console.log('Caminho do arquivo:', produtosPath);
// console.log('Arquivo existe?', fs.existsSync(produtosPath));

const lerProdutos = () => {
  try {
    const data = fs.readFileSync(produtosPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler produtos:', err);
    return [];
  }
};

const listarProdutos = (req, res) => {
  const produtos = lerProdutos();
  console.log('Produtos carregados:', produtos);
  res.json(produtos);
};

module.exports = {
  lerProdutos,
  listarProdutos,
};
