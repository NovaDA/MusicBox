import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { Context } from '../../Context/context';

const About = () => {

    return (
        <>
       
          <table style={{ border: "none", width: "80vw", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>

        </>
    );

};

    export default About;