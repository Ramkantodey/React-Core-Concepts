import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './actor'
import singers from './Singers'
import BookStore from './BookStore'

function App() {


  const actors = ['sakib', 'Raj', 'Jasim', 'Ruble']

  const books = [
    { id: 1, name: 'physics', price: 100 },
    { id: 2, name: 'Bangla', price: 150 },
    { id: 3, name: 'english', price: 120 },
    { id: 4, name: 'math', price: 190 },
  ]

  const singers = [
    { id: 1, name: 'Dr. Mahafuzur', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 58 },
    { id: 4, name: 'Prithom', age: 28 },
  ]
  return (
    <>

      <BookStore books={books}></BookStore>

      {/* 
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}


      <Actor name={"Bappa Raz"}></Actor>
      {actors.map(actor => <Actor name={actor}></Actor>)}
      {/*
      
      
      <h1>Vite + React</h1>
      <Todo
        task='Learn React'
        isDone={true}></Todo>
      <Todo task='Core Concepts'
        isDone={false}></Todo>
      <Todo task='Try JSX'
        isDone={true}></Todo> */}



      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score={85}></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12, }
  return <h3>I am {person.name} With age: {age + money}</h3>
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  // const { grade, price } = props
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',
    backgroundColor: 'green',
  }
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
