import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Table} from "react-bootstrap";
import './Experience.css'

function Experience() {
    return (
        <>
            <div className="experience">
                <Image src="../assets/profil.jpg" rounded/>
                <p>I like to work in team, see how some exciting,</p>
                <p>awesome thing is building from small parts.</p>
                <p>There are always new challanges, they keep my mind fresh,</p>
                <p>I always can learn something new.</p>
                <Table striped bordered hover variant="dark">
                    <tbody>
                    <tr>
                        <td>email</td>
                        <td>mobile</td>
                        <td>GitHub</td>
                        <td>HackerRank</td>
                        <td>CodeWars</td>
                    </tr>
                    <tr>
                        <td>talos.atanaz@gmail.com</td>
                        <td>+36309738761</td>
                        <td>talosati</td>
                        <td>atanaz</td>
                        <td>talosatanaz</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <p>esatobbi</p>
            </div>
        </>
    );
}

export default Experience;
