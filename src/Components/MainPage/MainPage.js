import React from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit="">
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
