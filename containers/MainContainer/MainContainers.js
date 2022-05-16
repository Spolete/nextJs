import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'NextJs, SEO optimization' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <Navbar/>
            <div>{children}</div>
        </>
    );
};

export default MainContainer;