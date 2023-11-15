import React from "react";

function Table(props){
    return(
        <div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th className="p-3">id</th>
                        <th className="p-3">Car</th>
                        <th className="p-3">Color</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.car}</td>
                            <td>{user.color}</td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;