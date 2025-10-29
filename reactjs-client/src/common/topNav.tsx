import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
export class TopNav extends Component {
    render() {
        return (
            <Navbar bg="dark">
                <div className="text-white" href="#">Products</div>
            </Navbar>
        )
    }
}