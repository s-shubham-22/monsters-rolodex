import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shubham',
        }
    }

    changeName = () => {
        this.setState({
            name: 'Kalpit',
        })
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>Hello {this.state.name}</p>
                    <button type='button' onClick={this.changeName}>
                        Change Name
                    </button>
                </header>
            </div>
        )
    }
}

export default App
