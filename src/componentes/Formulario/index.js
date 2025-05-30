import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'

const Formulario = (props) => {

    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label= "Nome" placeholder= "Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}></CampoTexto>
                <CampoTexto obrigatorio={true} label= "Cargo" placeholder= "Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}></CampoTexto>
                <CampoTexto label= "Imagem" placeholder= "Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}></CampoTexto>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario