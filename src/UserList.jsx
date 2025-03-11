import React, {useEffect, useState} from "react";
import axios from "axios";

const UserList = () =>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    }, [])

    return(
        <div className="container" style={{display: "flex",flexDirection: 'column' , justifyContent: 'center', alignContent: 'center', height: '100vh', fontFamily: 'Quicksand'}}>
            <h2>Users:</h2>
            <table border="1" style={{ width: "100%"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;