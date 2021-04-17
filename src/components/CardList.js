import React from 'react'
import Card from './Card'

// const Cards = michis.map((michi, i) => {
//     return <Card key={michi.id} id={michi.id} name={michi.name} email={michi.email} />
// })

const CardList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
                })
            }
        </div>
    );
}

export default CardList;