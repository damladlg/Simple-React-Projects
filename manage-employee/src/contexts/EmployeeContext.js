import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: "Thomas Hardy", email: "thomashardy@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Dominique Perrirer", email: "dominiqueperrer@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Maira Anderes", email: "mariaandres@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Fran Wilson", email: "franwilson@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" }
    ])

    useEffect(() => {
        const emploees = localStorage.getItem('employees')
        setEmployees(JSON.parse(emploees))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    })

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;