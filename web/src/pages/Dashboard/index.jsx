import { useContext } from 'react'
import './styles.scss'
import { UserContext } from '../../contexts/userContext'

export function Dashboard() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div className="Dashboard">
            Dashboard

            {
                user &&
                <>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <img src={user.avatar_url}   />
                </>
            }
        </div>
    )
}