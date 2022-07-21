 import Link from "next/link";
import MainLayout from "../../components/MainLayout";


const Index = ({users}) => {

    return (
        <MainLayout keywords={"users"}>
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
        </MainLayout>
    );
};

export default Index;


export async function getStaticProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return{
        props:{users}
    }
}
