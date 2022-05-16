import {useRouter} from "next/router";
import MainContainer from "../../containers/MainContainer/MainContainers";

export default function ({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <h1>Пользователь с id {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user},
    }
}
