import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
export default function Home() {

    const [users, setUsers] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        axios
            .get("http://localhost:8080/users")
            .then((result) => {
                setUsers(result.data)
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            })
    }

    const deleteUser = (id) => {
        axios
            .delete(`http://localhost:8080/user/${id}`)
            .then(() => {
                loadUsers()
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            })

    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mx-2"
                                to={`/viewuser/${user.id}`}>View</Link>
                                <Link className="btn btn-info mx-2"
                                to={`/edituser/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2"
                                onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
