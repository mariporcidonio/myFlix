import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000',
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {

    //chave: pode variar (nome, descrição)
    setValues({
      ...values,
      [chave]: valor, //nome: valor
    })
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
      }}>

        <div>
          <label>Nome da categoria
            <input
              type="text"
              value={values.nome}
              onChange={function funcaoHandler(infosDoEvento) {
                setValue('nome', infosDoEvento.target.value)
                //setNomeDaCategoria(infosDoEvento.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>Descrição
            <textarea
              type="text"
              value={values.descricao}
              onChange={function funcaoHandler(infosDoEvento) {
                //setNomeDaCategoria(infosDoEvento.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>Cor
            <input
              type="color"
              value={values.cor}
              onChange={function funcaoHandler(infosDoEvento) {
                //setNomeDaCategoria(infosDoEvento.target.value);
              }}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;