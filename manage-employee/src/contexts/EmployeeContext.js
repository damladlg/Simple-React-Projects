import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: "Thomas Hardy", email: "thomashardy@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Dominique Perrirer", email: "dominiqueperrer@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Maira Anderes", email: "mariaandres@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Fran Wilson", email: "franwilson@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" }
    ])

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;