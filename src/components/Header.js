import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamy</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth />
            </div>
            <Link to="/" className="item">Streamy</Link>
            <Link to="/stream/new">New</Link>
            <Link to="/stream/edit">Edit</Link>
            <Link to="/stream/delete">Delete</Link>
            <Link to="/stream/show">Show</Link>
        </div>
    );
}
export default Header;
