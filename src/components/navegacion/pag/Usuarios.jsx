import React from 'react';

const UserForm = (props) => {

   const alerta = () => {
         alert('Usuario creado correctamente');
    }
    
    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={props.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={props.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" onChange={props.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={props.handleChange} />
                </label>
                <button type="submit" onClick={()=>alerta()}>Crear</button>
           
            </form>
        </div>
    );
}

        




export default UserForm;