import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router';

const AboutPage = () => {

let {id, name} = useParams()

    return (
        <div>
            <Menu />
            <h1>This is the about page.</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default AboutPage;