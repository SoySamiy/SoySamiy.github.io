import React from 'react'; 
import User from './Users/Users.js';
export default function Dashboard() {
    return (
        <>
        <h3>Dashboard</h3>
        <div className="container"> 
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                    <User/>
                </div>
            </div>
        </div>
        </>
    )
}