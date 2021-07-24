import React, { useEffect, useState, Component } from "react"
import './Users.css'
import { motion } from 'framer-motion'
function useUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(datos => {
                setUsers(datos)
            })
    }, [])

    return users
}

export default function Users() {
    const [searchTerm, setSearchTerm] = useState('')
    const users = useUsers()
    return (
        <motion.div class="card"
            initial={{ x: "200vw" }}
            animate={{ x: "0", transition: { duration: 1, ease: "easeInOut" } }}>
            <div class="card" align="center">
                <h4 class="card-header"><b>Trabajo Final React</b></h4>
                <div class="grid-container">
                    <div class="grid-item">
                        <div class="card bg-light mb-3">
                            <div class="card-header"><b>Alumno</b></div>
                            <div class="card-body">
                                <p class="card-text">Mario Andreé Parreño Aguilera</p>
                                <p class="card-text">Séptimo Semestre</p>
                                <p class="card-text">Ingeniería Web</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div class="card bg-light mb-3">
                            <div class="card-header"><b>React js</b></div>
                            <div class="card-body">
                                <p class="card-text">Lectura de un archivo Json</p>
                                <p class="card-text">Filtro por nombre y usuario</p>
                                <p class="card-text">Uso de animaciones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 class="card-header"><b>Lista de Usuarios</b></h5>
            <div class="card-header ">
                <input type="search" class="form-control rounded" placeholder="Filtrar por nombre o usuario..."
                    onChange={event => { setSearchTerm(event.target.value) }} />
            </div>
            <div class="card-body">
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Nombre de Usuario</th>
                            <th scope="col">Email</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
                    <motion.tbody
                        initial={{ y: "200vw" }}
                        animate={{ y: "0", transition: { duration: 1, ease: "easeInOut" } }}>
                        {users.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                || val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map(val => (
                            <motion.tr key={val.id}
                                initial={{ y: "200vw" }}
                                animate={{ y: "0"}}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td>{val.address.city} , {val.address.street}</td>
                                <td>{val.phone}</td>
                            </motion.tr>
                        ))}
                    </motion.tbody>
                </table>
                <h6 class="card-header"><a href="https://jsonplaceholder.typicode.com/users" target="_blank" style={{textDecoration: 'none', color:'black'}}>
                    <b>Link Json</b></a></h6>
            </div>
        </motion.div>
    )
}