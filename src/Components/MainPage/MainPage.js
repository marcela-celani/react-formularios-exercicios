import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm'

function MainPage() {

  const {form, handleInput, clearFields} = useForm({nome:'', modulos:'', tecnologias:'', responsavel:''})

  const enviarCadastro = (e) => {
    e.preventDefault()
    console.log(form)
    alert('Curso cadastrado com sucesso!')
    clearFields()
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          value={form.nome}
          onChange={handleInput}
          type='text'
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          value={form.modulos}
          onChange={handleInput}
          type='number'
          min={2}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          value={form.tecnologias}
          onChange={handleInput}
          type='text'
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          value={form.responsavel}
          onChange={handleInput}
          minLength='8'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
