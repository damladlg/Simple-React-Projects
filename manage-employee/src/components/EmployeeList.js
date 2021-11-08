import Employee from "./Employee";
import { useContext, useState, useEffect, useRef } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from 'react-bootstrap'
import AddForm from "./AddForm";

const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* employees stateinde herhangi bir değişiklik oldugunda useEffect hooku yardımıyla tekrardan render edildi, modal kapattırıldı.
    employees da bir değişiklik olmaz ise useEffect çalışmaz. */
    useEffect(() => {
        return () => {
            handleClose();
        }
    }, [employees])

    /* herhangi bir dom elemanına referans vererek current özelliğine bir özellik verebiliriz. useRefi ayıran özelliği sürekli render etmez */
    const myRef = useRef(null);

    const onButtonClickWithRef = () => {
        myRef.current.focus();
    }

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
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
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee}></Employee>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

            <input ref={myRef} type="text"></input>
            <button onClick={onButtonClickWithRef}>Focus input with useReef </button>
        </>
    )
}

export default EmployeeList;