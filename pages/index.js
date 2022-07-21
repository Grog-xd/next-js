import MainLayout from "../components/MainLayout";
import Image from "next/image";


const Index = () => {



    return (
        <>
            <MainLayout keywords={"main page"}>
                <h1>Главная страница</h1>
                <Image src='/logo.png' width={300} height={150} placeholder="blur" blurDataURL='/logo.png'/>
            </MainLayout>
        </>

    );
};

export default Index;
