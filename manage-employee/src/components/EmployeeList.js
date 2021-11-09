import Employee from "./Employee";
import { useContext, useState, useEffect, useRef } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, Alert } from 'react-bootstrap'
import AddForm from "./AddForm";

const EmployeeList = () => {

    const { sortedEmployees } = useContext(EmployeeContext);
    const [show, setShow] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowAlert = () => setShowAlert(true);

    /* handle show alertin belli bir süre sonra kendiliğinden kapanmasını istersek, alertten de onClose fonk kaldırılır.*/
    // const handleShowAlert = () => {
    //     setShowAlert(true);
    //     setTimeout(() => {
    //         setShowAlert(false);
    //     },2000);
    // };


    /* employees stateinde herhangi bir değişiklik oldugunda useEffect hooku yardımıyla tekrardan render edildi, modal kapattırıldı.
    employees da bir değişiklik olmaz ise useEffect çalışmaz. */
    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();

        }
    }, [sortedEmployees])

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

            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                Employee List successfully updated.
            </Alert>

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
                        sortedEmployees.map((employee) => (
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