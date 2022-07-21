import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";


export default function User({user}){
    const {query} = useRouter()

    return(
        <MainLayout keywords={user.name}>
            <h1>Пользователь c id {query.id}</h1>
            <div>{user.name}</div>
        </MainLayout>
    )
}



export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return{
        props:{user}
    }
}
