import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";


export default function User({user}){
    // я не понял как работает useRouter и как он подцепляет данные (7 минута если че)
    const {query} = useRouter()

    return(
        <MainContainer keywords={user.name}>
            <h1>Пользователь c id {query.id}</h1>
            <div>{user.name}</div>
        </MainContainer>
    )
}

// запрос с сервера для отдельного элемента

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return{
        props:{user}
    }
}