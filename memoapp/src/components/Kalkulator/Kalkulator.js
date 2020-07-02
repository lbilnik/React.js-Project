import React from 'react'
import Button from './KalkButton'
import Inputs from './inputs'
import ClearBtn from './ClearBtn'
import Header from '../Header'

class Kalkulator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      numer: "",
      calyWynik: [],
      znak: ""   
    };
  }
  
  addToNumer = val => {
    this.setState({ input: this.state.input + val })
  }
  addToZero = val => {
    if(this.state.input !== "") {
      this.setState({ input: this.state.input + val})
    }
  }
  addKropka = val => {
    if(this.state.input.indexOf(".") === -1){
      this.setState({ input: this.state.input + val});
    }
  }
  clearInput = () => {
    this.setState({ input: ""});
  }
  add = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ input: ""})
    this.setState({ numer: "plus"})
    this.setState({ znak: "+"})
  }

  minus  = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ input: ""})
    this.setState({ numer: "minus"})
    this.setState({ znak: "-"})
  }

  mnozenie  = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ input: ""})
    this.setState({ numer: "mnozenie"})
    this.setState({ znak: "*"})
  }

  dzielenie = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ input: ""})
    this.setState({ numer: "dzielenie"})
    this.setState({ znak: ":"})
  }
  procent = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ input: ""})
    this.setState({ numer: "procent"})
    this.setState({ znak: "%"})
  }

  log = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ input: ""})
    this.setState({ numer: "log"})
    this.setState({ znak: "log"})
  }

  kwadrat = () => {
    this.setState({ previousNumber: this.state.input})
    this.setState({ numer: "sqrt"})
    this.setState({ znak: "sqrt"})
  }

  wynik = () => {
    this.state.currentNumber = this.state.input;
    
    const inputCurrentNumber = this.state.currentNumber
    const inputPreviousNumber = this.state.previousNumber
  
    /*plus----------------------------------------------------------- */
    if(this.state.numer === "plus") {
      this.setState({input: parseFloat(this.state.previousNumber) +
    parseFloat(this.state.currentNumber)
      })
     
      const inputWynik = parseFloat(this.state.previousNumber) +
      parseFloat(this.state.currentNumber)
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${inputCurrentNumber} ${this.state.znak} ${inputPreviousNumber} = ${inputWynik}`)     
      return {calyWynik}
    })

    }
    /*minus----------------------------------------------------------- */
    else if(this.state.numer === "minus") {
      this.setState({input: parseFloat(this.state.previousNumber) -
        parseFloat(this.state.currentNumber)
      })
      const inputWynik = parseFloat(this.state.previousNumber) -
      parseFloat(this.state.currentNumber)
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${inputCurrentNumber} ${this.state.znak} ${inputPreviousNumber} = ${inputWynik}`)       
      return {calyWynik}
    })
    }
    /*mnozenie----------------------------------------------------------- */
    else if(this.state.numer === "mnozenie") {
      this.setState({input: parseFloat(this.state.previousNumber) *
        parseFloat(this.state.currentNumber)
      })
      const inputWynik = parseFloat(this.state.previousNumber) *
      parseFloat(this.state.currentNumber)
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${inputCurrentNumber} ${this.state.znak} ${inputPreviousNumber} = ${inputWynik}`)       
      return {calyWynik}
    })
    }
    /*dzielenie----------------------------------------------------------- */
    else if(this.state.numer === "dzielenie") {
      this.setState({input: parseFloat(this.state.previousNumber) /
        parseFloat(this.state.currentNumber)
      })
      const inputWynik = parseFloat(this.state.previousNumber) /
      parseFloat(this.state.currentNumber)
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${inputCurrentNumber} ${this.state.znak} ${inputPreviousNumber} = ${inputWynik}`)       
      return {calyWynik}
    })
    }
    /*procent----------------------------------------------------------- */
    else if(this.state.numer === "procent") {
      this.setState({input: parseFloat(this.state.previousNumber) / 100 *
        parseFloat(this.state.currentNumber)
      })
      const inputWynik = parseFloat(this.state.previousNumber) / 100 *
      parseFloat(this.state.currentNumber)
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${inputPreviousNumber} ${this.state.znak} x ${ inputCurrentNumber} = ${inputWynik}`)       
      return {calyWynik}
    })
    }
    /*log -----------------------------------------------------------*/
    else if(this.state.numer === "log") {
      this.setState({input: Math.log(inputPreviousNumber) / Math.LN10
        
      })
      const inputWynik = Math.log(inputPreviousNumber) / Math.LN10
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${this.state.znak}( ${inputPreviousNumber} ) = ${inputWynik}`)       
      return {calyWynik}
    })
    }
    /*sqrt -----------------------------------------------------------*/
    else if(this.state.numer === "sqrt") {
      this.setState({input: Math.sqrt(this.state.previousNumber) 
      })
      const inputWynik = Math.sqrt(this.state.previousNumber)  
      this.setState(state => {const calyWynik = state.calyWynik.concat(`${this.state.znak} (${inputPreviousNumber}) = ${inputWynik}`)       
      return {calyWynik}
    })
    this.setState({ input: ""})
    }
  }

  arrayReset = () => {
    this.setState({calyWynik: []})
  }

  render () {
    return (
      <div className="container">               
          <Header />
            <div className="spacer"></div>
            
          <div className="kalk">
              <div className="kalk-wrapper">
                <div className="row">
                  <Inputs>{this.state.input}</Inputs>
                </div>
                <div className="row">
                  <Button handleClick={this.addToNumer}>7</Button>
                  <Button handleClick={this.addToNumer}>8</Button>
                  <Button handleClick={this.addToNumer}>9</Button>
                  <Button handleClick={this.dzielenie}>/</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToNumer}>4</Button>
                  <Button handleClick={this.addToNumer}>5</Button>
                  <Button handleClick={this.addToNumer}>6</Button>
                  <Button handleClick={this.mnozenie}>*</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToNumer}>1</Button>
                  <Button handleClick={this.addToNumer}>2</Button>
                  <Button handleClick={this.addToNumer}>3</Button>
                  <Button handleClick={this.add}>+</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addKropka}>.</Button>
                  <Button handleClick={this.addToZero}>0</Button>
                  <Button handleClick={this.clearInput}>C</Button>
                  <Button handleClick={this.minus}>-</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.procent}>%</Button>
                  <Button handleClick={this.log}>log</Button>
                  <Button handleClick={this.kwadrat}>sqrt</Button>
                  <Button handleClick={this.wynik}>=</Button>
                </div>
                <div className="row">
                  <ClearBtn handleClear={this.clearInput}>Clear</ClearBtn>
                </div>
              </div>   
          </div>

                <div className="wynikBox">
                    <h2>Wyniki:</h2>
                    <div className="wynikBox2">{this.state.calyWynik.map(item => (<li id="wynikListItem" key={item}>{item}</li>))}</div>
                    <button className="resetBTN"  onClick={() => this.arrayReset()}>Reset</button>           
                </div>          
      </div>
    )
  }  
}

export default Kalkulator
