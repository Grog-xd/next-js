import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"grog, next js" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <nav className={'navbar'}>
                <A href={'/'} text={'Главная'}/>
                <A href={'/users'} text={'Пользователи'}/>
            </nav>
            <div>{children}</div>
            <style jsx>
                {`
                  .navbar{
                    background-color: orange;
                    padding: 15px;
                  }
                 
                `}
            </style>
        </>
    );
};

export default MainContainer;