import { useContext, useEffect } from 'react'
import './styles.scss'
import { AuthContext } from '../../contexts/auth';
import { Header } from '../../components/Header';

export function Dashboard() {

    const { userState } = useContext(AuthContext);

    useEffect(() => {
        console.log(userState)
    }, []);

    return (
        <div className="Dashboard">

            <Header></Header>

            Dashboard

            {
                userState &&
                <>
                    <p>{userState.username}</p>
                    <p>{userState.email}</p>
                    <img src={userState.avatar_url}   />
                </>
            }
        </div>
    )
}