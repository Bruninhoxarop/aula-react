import Header from '../Header';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Form() {
    const [estados, setEstados] = useState([]);
    useEffect(()=>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    return (
        <div>
            <Header title="React Form" />
            <form>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome"/>
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade"/>
                        </label>
                    </div>
                    
                    <div>
                        <label>UF:
                            <select name="cmbUF" id="cmbUF">
                                <option value="0">Selecione uma opção</option>
                                {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                                {/* estado.sigla é o valor referido para cada uf na api do ibge, isso está mapeando o estados */}
                                {/* criando um "estado" e ele terá uma chave e valor estado.sigla e trará o estado nas opções */}
                                {/* lembrar a denisson de criar um campo com cidade e criar outro campo para trazer um lugar daquela cidade */}
                            </select>
                        </label>
                    </div>
                    <input type="submit" id='Salvar'/>
                </fieldset>
            </form>
            {/* ------------------------------------------------------ */}
            <h1>Roteamento</h1>
            <Link to="/"><button>Acessar página inicial</button></Link>
            {/* ------------------------------------------------------ */}
        </div>
    )
}

export default Form;