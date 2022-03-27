import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../comoponents/PageDefault";

function CadastroCategoria (){
    const [categorias, setCategorias] = useState(["teste"])
    
    const valoresIniciais = {
        nome:'Categoria Inicial',
        descricao:'Descrição Inicial',
        cor:'#000'
    }
    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor) {
        setValues({
            ...values,
        })
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name}</h1>
            
            <form onSubmit={function handleSubmit(infoDoEvento){
                infoDoEvento.preventDefault();
                setValues([
                    ...categorias, 
                    values
                ]);
                
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            value={values.nome}
                            onChange= {(function trasInfoDoEvento(infoDoEvento){
                                
                            } )}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            onChange= {(function trasInfoDoEvento(infoDoEvento){
                                
                            } )}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            onChange= {(function trasInfoDoEvento(infoDoEvento){
                                
                            } )}
                        />
                    </label>
                </div>
               
                
                <button >
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                   return(
                    <li key={`${indice}`}> 
                        {categoria}
                    </li>
                   )
                }) }
            </ul>


           
            <Link to="/">
                Ir para Home
            </Link>

        </PageDefault>
    )
}
export default CadastroCategoria