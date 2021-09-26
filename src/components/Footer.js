import React from 'react'
import styled from 'styled-components';

const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: linear-gradient(90deg, #503047 0%, #1e0d0a 100%);
    color: white;
`

const Footer = () => {
    return (
        <Copyright>
            <p>Copyright 2021</p>
        </Copyright>
    )
}

export default Footer