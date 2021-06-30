/* eslint-disable */
import { useState } from 'react';
import './App.css';
import Data from './Quotes.json';
import Google from './img/Google.png';
import Twitter from './img/Twitter.png';

function App() {
  
  //Color Random
	let symbol = "0123456789ABCDEF";
	let colour = "#";
	for(let i = 0; i < 6; i++){
		colour = colour + symbol[Math.floor(Math.random() * 16)];
	}

  let symbolafter = "0123456789ABCDEF";
	let colourafter = "#";
	for(let i = 0; i < 6; i++){
		colourafter = colourafter + symbolafter[Math.floor(Math.random() * 16)];
	}

  //Cosulta JSON
  let Quotes = Data.quotes

  //Quote inicial
  let indexQuote = Math.round(Math.random()*101)
  let quote = Quotes[indexQuote].quote
  let author = Quotes[indexQuote].author

  //Quote after inicial
  let indexQuoteafeter = Math.round(Math.random()*101)
  let quoteafter = Quotes[indexQuoteafeter].quote
  let authorafter = Quotes[indexQuoteafeter].author

  // URL Twitter
  let quotecount =  quote.replace(/ /gi,"%20")
  let urltwitter = `https://twitter.com/intent/tweet?text=${quotecount}`
  let quotecountafter =  quoteafter.replace(/ /gi,"%20")
  let urltwitterafter = `https://twitter.com/intent/tweet?text=${quotecountafter}`

    // URL Twitter
    let authorcount =  author.replace(/ /gi,"%20")
    let urlgoogle = `https://www.google.com/search?q=${authorcount}`
    let authorcountafter =  authorafter.replace(/ /gi,"%20")
    let urlgoogleafter = `https://www.google.com/search?q=${authorcountafter}`

  //Variables de estado
  let flag = true
  const [randomQuote, setRandomQuote] = useState(quote)
  const [randomAuthor, setRandomAuthor] = useState(author)
  const [variable, setvariable] = useState(colour)
  const [bandera, setbandera] = useState(false)
  const [twitter] = useState(urltwitter)
  const [linktwitter] = useState([urltwitter])
  const [google] = useState(urlgoogle)
  const [linkgoogle] = useState([urlgoogle])

  //Arreglos 
  linktwitter.push(urltwitterafter)
  linkgoogle.push(urlgoogleafter)
  

  return (
    <div className="AppUp" style={{backgroundColor: variable }}>
      <div className="App" style={{color: variable }}>
        <div className="alingUp">
          <p className="quotationmark">“</p>
          <p >{randomQuote}</p>
        </div>
        <div className="author">
        {randomAuthor}
        </div>
        <div className="App-buttons" >
          <button className="Twitter" style={{backgroundColor: variable }} onClick = {() => {
            if(bandera ===  false){
              location.href= twitter
            } else {
              location.href= linktwitter[linktwitter.length - 3]
            }
          }}><img src={Twitter} alt="Twitter"></img></button>
          <button className="Google" style={{backgroundColor: variable }} onClick = {() => {
            if(bandera ===  false){
              location.href= google
            } else {
              location.href= linkgoogle[linkgoogle.length - 3]
            }
          }}><img src={Google} alt="Google"></img></button>
          <button className="change" style={{backgroundColor: variable }}  onClick={() => { 
            setRandomQuote(quoteafter)
            setRandomAuthor(authorafter)
            setvariable(colourafter )
            setbandera(flag )
          }}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
