import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ol>
                    <Link to="/">Home</Link>
                    <Link to="/all-orders">All Orders</Link>
                    <Link to="/payments-due">Payments Due</Link>
                    <Link to="/payments-made">Payments Made</Link>
                </ol>
            </div>
        )
    }
}