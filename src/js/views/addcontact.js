import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const contact = {
            name,
            email,
            address,
            phone
        }
        actions.createContact(contact)
        navigate("/")
        actions.getAllContacts()
    }

    return (
        <div className="container ">
        <div className="form">
            <h1 className="title">Añadir un nuevo contacto</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label htmlFor="exampleInputName" className="form-label"> Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter full name" onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Enter phone" onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Enter address" onChange={(event) => { setAddress(event.target.value) }} />
                </div>
                <button type="submit" className="save btn btn-custom-violet">guardar</button>

            </form>
            <Link to="/">
                <span className="mb-0 fs-3">ir atras a contactos</span>
            </Link>
        </div>
        </div>
    );
};