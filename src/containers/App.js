import { useState, useEffect } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

function App(){
    const [users, setUsers] = useState([])
    const [searchField, setSearchFiedl] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
        }, 500);
    }, []);

    const onSearchChange = (event) => setSearchFiedl(event.target.value);
    const filteredUsers = users.filter(user => {return user.name.toLowerCase().includes(searchField.toLowerCase())})

    return (users.length === 0) ? <h1>Cargando Michis :3</h1> : (
        <div>
            <h1>Michifriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList users={filteredUsers}/>
            </Scroll>
        </div>
    );
}

export default App;