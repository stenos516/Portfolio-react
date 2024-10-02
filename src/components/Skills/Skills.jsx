import React from 'react'
import './Skills.css'
import atom from '../../assets/atom.png'
import js from '../../assets/js.png'
import html from '../../assets/html.png'
import css from '../../assets/css.jpg'
import github from '../../assets/github.png'
import mongo from '../../assets/mongo.png'
import mysql from '../../assets/mysql.png'
import php from '../../assets/php.png'



const Skills = () => {
  return (
    <div className='skills'>
        <h1>React</h1>
        <img src={atom} alt></img>
        <h1>Javascript</h1>
        <img src={js} alt></img>
        <h1>Html5</h1>
        <img src={html} alt=''></img>
        <h1>Css</h1>
        <img src={css} alt=''></img>
        <div className='skills2'>
          <h1>Mysql</h1>
          <img src={mysql} alt=''></img>
          <h1>MongoDB</h1>
          <img src={mongo} alt=''></img>
          <h1>Github</h1>
          <img src={github} alt></img>
          <h1>Php</h1>
          <img src={php} alt=''></img>
        </div>
      
    </div>
  )
}

export default Skills
