import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import { michis } from './datosMichis' //Original
import Scroll from '../components/Scroll'

class App extends React.Component {

    //Hook de Mounting
    constructor(){
        super();
        this.state = {
            users : [],
            searchField : ''
        }
        console.log("constructor mounting -- Sin michis :c");
    }

    /**
     * Aqui vamos a hacer fetch para obtener a los usuarios (michis)
     */
    componentDidMount(){
        //this.setState({users : michis}); //Original

        //el settimeout namas es para ver como se pinta cuando no hay usuarios cargados
        //setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({users : users}));
        //}, 1000);
        console.log("componentDidMount mounting -- Obteniendo michis");
        console.log("Esto causa que se actualice es estado tons se volvera a llamar a render pero de Update");
    }

    /**
     * Funcion que actualiza la lista de usuarios segun la busqueda
     * @param {} event 
     */
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value}); //Actualizamos a searchfield 
    }

    render(){

        console.log("render mounting -- pintando michis!");

        const filteredUsers = this.state.users.filter(users => {
            return users.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        //Pa cuando no se han cargado los michis
        if(this.state.users.length === 0)
            return <h1>Cargando Michis :3</h1>

        return (
        <div>
            <h1>Michifriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList users={filteredUsers}/>
            </Scroll>
        </div>
        );
    }
}

export default App;