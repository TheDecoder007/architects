import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function ModalTom() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <>

            <Modal show={show} onHide={handleClose}>

<Modal.Header closeButton>
<Modal.Title>Thomas F. Hibbard's Resume</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>
  <h5>Experience</h5>
  Hibbard & Rosa Architects, L.L.C. 1996 - Present Middletown,
  CT Principal Seb J. Passanesi, P.C. 1992-1996 Middletown, CT
  Project Manager, Vice President
  <h5>Education</h5>
  Catholic University of America Washington D.C. B.S.
  Architecture 1981
  <h5>Memberships</h5>
  American Institute of Architects (AIA) International Code
  Council (ICC) GSA Registered Vendor
  <h5>Licenses</h5>
  State of Connecticut
  <h5>Military Experience</h5>
  U.S. Navy 1982-1986 U.S. Navy Reserves 1986-2004 Commander
  <h5>Clients</h5>- Town of East Haven, CT - City of Middletown,
  CT - Town of Suffield, CT - State of Connecticut; Department
  of Public Works - Town of Windsor Locks, CT - City of New
  London, CT - Town of Bloomfield, CT - City of Waterbury, CT -
  Town of Stratford, CT - Town of Portland, CT - Middletown
  Housing Authority - Alderhouse Residential Communities, Inc. -
  The Connection, Inc. - Town of Cromwell, CT - City of Meriden,
  CT - City of Enfield, CT - City of Norwalk, CT - Town of West
  Hartford, CT - Town of Oxford, CT - Chase Enterprises, Inc. -
  DBS, Inc. - South Fire District, Middletown, CT - ASML
  Lithography Division
</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
  Close
</Button>
</Modal.Footer>
</Modal>
</>
)
    }

    export default ModalTom;
