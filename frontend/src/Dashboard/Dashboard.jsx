import React from 'react'
import Table from "react-bootstrap/Table";

const Dashboard = () => {
    return (<>
        <div>
            <h3 className='text-center mt-5'>Contact Details</h3>
        </div>
        <div class="container text-center mt-5">
            <div class="row">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SrNo.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile</th>
                            <th>EMail</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    </>
    )
}

export default Dashboard;