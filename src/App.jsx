import { useState,useEffect } from 'react'
import './App.css'
import './reset.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import color from "./util/colors.js"
import Button from './components/Button'


// function App() {
 
// const getRandomElement=arr =>{
//   const random = Math.floor(Math.random()*arr.length)
//   return arr[random]
// }
// let randomUser= getRandomElement(quotes)
// let randomColor=getRandomElement(color)

// const [userRandom, setUserRandom] = useState(randomUser)
// const [colorRandom, setColorRandom] = useState(randomColor) 

// const randomAll=()=>{
//   let randomUser= getRandomElement(quotes)
//   let randomColor=getRandomElement(color)
//   setUserRandom(randomUser)
//   setColorRandom(randomColor)
// }

// console.log(quotes)
// console.log(color)



//   return (
//    <div style={{backgroundColor:`${colorRandom}`}} className="App">
//       <div  className="container">
//       <QuoteBox user={userRandom} color={colorRandom}/>
//       <Button  color={colorRandom} random={randomAll}/>
//       </div>
//     </div>
  
//   )
// }

// export default App


function App() {
  
  const [avatar, setAvatar] = useState();

  const newPerson=()=> {

  }


  return (
    

      <div className='profile-card'>
        <figure className='profile-card__img'>
          <img src ="../person.jpeg" alt='...'></img>
        </figure>

        <div className="profile-card__desc">
          <h1>#nombre</h1>
          <h2>Full stack developer</h2>
          
          <span>Country: New York</span>
          
        </div>
      
      <div className="profile-card__info">
        <div>
          <div>850</div>
          <div>Followers</div>
        </div>
        <div>
          <div>50</div>
          <div>References</div>
        </div>
        <div>
          <div>105</div>
          <div>Works</div>
        </div>
      </div>
      <div className="profile-card__social">
        <a href="#" className='facebook '>
        <iconify-icon inline icon="tabler:brand-facebook" width="40"></iconify-icon>
        </a>
        <a href="#" className='twitter'>
        <iconify-icon inline icon="uil:twitter-alt" width="40"></iconify-icon>
        </a>
        <a href="#" className='instagram'>
        <iconify-icon inline icon="akar-icons:instagram-fill" width="40"></iconify-icon>
        </a>
        
        <a href="#" className='github'>
        <iconify-icon inline icon="radix-icons:github-logo" width="40"></iconify-icon>
        </a>
        <a href="#" className='whatsapp efectºNMHIII 25EEEE0S45Ç´+ MUL+`´O,' style={{"--clr":"#43d854"}}>
        <iconify-icon icon="akar-icons:whatsapp-fill" width="40 "></iconify-icon>
        </a>
      </div>

      <div className="profile-card__actions">
        <button className='button-blue'>Send Message</button>
        <button className='button-orange'>Follow Me</button>
      </div>
      </div>
      
  )
}
export default App