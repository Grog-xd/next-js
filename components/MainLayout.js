import Link from "./Link";
import Head from "next/head";

const MainLayout = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"grog,nextjs," + keywords} />
                <meta name='description' content={'test project on next js'}/>
                <title>Главная страница</title>
            </Head>
            <nav className={'navbar'}>
                <Link href={'/'}>Главная</Link>
                <Link href={'/users'}>Пользователи</Link>
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

export default MainLayout;
