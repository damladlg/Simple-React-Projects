import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    /* const [employees, setEmployees] = useState([
         { id: uuidv4(), name: "Thomas Hardy", email: "thomashardy@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
         { id: uuidv4(), name: "Dominique Perrirer", email: "dominiqueperrer@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
         { id: uuidv4(), name: "Maira Anderes", email: "mariaandres@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
         { id: uuidv4(), name: "Fran Wilson", email: "franwilson@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" }
     ])*/

    const reducer = (employees, action) => {
        switch (action.type) {
            case 'add_employee':
                return [...employees, {
                    id: uuidv4(),
                    name: action.employee.name,
                    email: action.employee.email,
                    address: action.employee.address,
                    phone: action.employee.phone,
                }]
            case 'remove_employee':
                return employees.filter(employee => employee.id !== action.id)
            case 'update_employee':
                return employees.map((employee) => (employee.id === action.id ? action.updatedEmployee : employee))

            default:
                return employees;
        }
    }

    const [employees, dispatch] = useReducer(reducer, [
        { id: uuidv4(), name: "Thomas Hardy", email: "thomashardy@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Dominique Perrirer", email: "dominiqueperrer@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Maira Anderes", email: "mariaandres@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" },
        { id: uuidv4(), name: "Fran Wilson", email: "franwilson@gmail.com", address: "89 Chrisaroscıro Rd, Portaland, USA", phone: "(171) 643 722" }
    ],
        //rest api veya localstrogeden belli verileri alıyorsak burada tanımlanan bir 
        // fonksiyon ile verileri direkt alabiliriz.
        () => {
            const employees = localStorage.getItem('employees')
            return employees ? JSON.parse(employees) : [];
        })

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    })

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));

    /*const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
    }*/

    /*const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }*/

    /*const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }*/

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, dispatch }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;