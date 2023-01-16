import { ReactElement ,FC } from 'react'
import './App.css'
import Title from './components/title';
import Questions from './components/questions';
import styled from 'styled-components';
const Wrapper=styled.main`
  display: grid;
  place-items:center;
  height: 800px;
  .container 
  {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 800px;
    column-gap: 20px;
    background-color: aliceblue;
  }

`;
const App:FC =():ReactElement=>{
  return (

    <Wrapper>
      <section className="container">
        <Title/>
        <Questions/>
      </section>
    </Wrapper>
  )
}
 
 

export default App;
