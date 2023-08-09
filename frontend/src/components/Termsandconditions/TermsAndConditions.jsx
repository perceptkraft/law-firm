import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{ marginLeft: '20%', marginTop: '15%' }}>
      <div className='container'>
        <div className='Row'>
          <div className='col-6 g-2'>
            <Alert show={show} variant="success">
              <Alert.Heading>My Alert</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                  Close me
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertDismissible;