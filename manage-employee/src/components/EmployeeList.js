import { useState } from "react";
import Employee from "./Employee";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: "Thomas Hardy", email: "thomashardy@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: 2, name: "Dominique Perrirer", email: "dominiqueperrer@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: 3, name: "Maira Anderes", email: "mariaandres@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: 4, name: "Fran Wilson", email: "franwilson@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" }
    ])

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody> <Employee employees={employees} /></tbody>
        </table>
    )
}

export default EmployeeList;