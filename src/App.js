import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

const App = () => {
    console.log('Rendered')

    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users))
    }, [])

    useEffect(() => {
        //

        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        })

        newFilteredMonsters.map((monster) => {
            return (
                <div key={monster.id}>
                    <h1>{monster.name}</h1>
                </div>
            )
        })

        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    return (
        <div className='App'>
            <h1 className='app-title'>Monster Rolodex</h1>

            <SearchBox
                className={'monsters-search-box'}
                placeholder={'Search Mosters'}
                onChangeHandler={onSearchChange}
            />

            <CardList monsters={filteredMonsters} />
        </div>
    )
}

// class App extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             monsters: [],
//             searchField: '',
//         }
//     }

//     componentDidMount() {
//
//     }

//

//

//     render() {
//         const { monsters, searchField } = this.state
//         const { onSearchChange } = this

//
//     }
// }

export default App
