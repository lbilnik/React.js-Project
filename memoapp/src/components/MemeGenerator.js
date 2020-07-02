import React from 'react'
import Header from './Header'
class MemeGenerator extends React.Component {
    state = {
                topText: "",
                bottomText: "",
                randomImg: "http://i.imgflip.com/1bij.jpg",
                allMemeImgs: []

            }
            //this.hangeChandler = this.hangeChandler.bind(this)
            //this.randomImages = this.randomImages.bind(this)
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs: memes})
        })
}

    hangeChandler = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    randomImages = (event) => {
            event.preventDefault()
            const randNum = Math.floor(Math.random() *  this.state.allMemeImgs.length)
            const randMemImg = this.state.allMemeImgs[randNum].url

            this.setState({randomImg: randMemImg})
    }
    render(){
        return(
        <div>               
            <Header />
            <div className="meme">

                <form className="meme-form" onSubmit={this.randomImages}>
                    <input 
                        type="text" 
                        value={this.state.topText} 
                        name="topText" 
                        onChange={this.hangeChandler} 
                        placeholder="Text na górze obrazka"
                    />    
                    <input 
                        type="text" 
                        value={this.state.bottomText} 
                        name="bottomText" 
                        onChange={this.hangeChandler} 
                        placeholder="Text na dole obrazka"
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        </div>
        )
    }
}

export default MemeGenerator