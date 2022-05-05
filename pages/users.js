import {useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";


const Users = ({users}) => {
    // const [users, setUsers]= useState([
    //     {id:1, name:'dima'},
    //     {id:2, name:'pasha'},
    //
    // ])

    return (
        <MainContainer keywords={"users"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user=>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

// запрос с сервера для нескольких элементов

export async function getStaticProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return{
        props:{users}
    }
}