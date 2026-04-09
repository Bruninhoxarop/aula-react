import Header from '../Header';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Form() {

    const [campos, setCampos] = useState({
        txtNome: '',
        txtIdade: 0,
        cmbUF: '0'
    });
    //estado para verificar os campos do formulário

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
    //função que salva os dados dos campos do formulário dentro de 'campos' e depois atualiza o estado

    function handleFormSubmit(event) {
        event.preventDefault();
        axios.post('https://orange-rotary-phone-q764p64wrj9v3xgrg-3001.app.github.dev/cadastro', campos).then(response => {
            alert(response.data.dados.length + ' Cadastros!');
        })
    }
    //função que do axios que envia os dados do formulário para a api do back-end pelo link COM '/cadastro', 
    // pois é o caminho para salvar na memória da api, e dps envia um alerta de enviado
    //axios irá usar um post para mandar os dados para a api do back-end

    const [estados, setEstados] = useState([]);
    useEffect(()=>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);
    //useEffect para fazer a requisição do axios para a api do ibge para trazer os estados e salvar no estado

    return (
        <div>
            <Header title="React Form" />
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade" onChange={handleInputChange}/>
                        </label>
                    </div>
                    
                    <div>
                        <label>UF:
                            <select name="cmbUF" id="cmbUF" onChange={handleInputChange}>
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