import React, {Component} from 'react'

import Header from './Header'
import MemeGenerator from './MemeGenerator'
import MemoryGame from './MemoryGame/MemoryGame'

class App extends Component {
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div>               
            <Header />
            <MemoryGame />
            </div>
        )
    }
}

export default App