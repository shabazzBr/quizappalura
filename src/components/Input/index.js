import React from "react";
import styled from "styled-components";


const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size:14px;
    border:1px solid rgb(20,150,235);
    color:${({ theme }) => { theme.colors.contrasText }};
    background-color:${({ theme }) => { theme.colors.mainBg }};
    border-radius:${({ theme }) => { theme.colors.borderRadius }};
    outline:0;
    margin-bottom:25px;

`;

export default function Input({ onChange, placeholder, ...props }) {
    return (
        <>
            <InputBase onChange={onChange} placeholder={placeholder}

                {...props}

            />

        </>
    )
}

// Input.defaultProps = {
//     value:'',
// };

// Input.PropTypes = {
//     onChange:PropTypes.func.string.isRequired,
//     placeholder:PropTypes.string.isRequired,
//     name:PropTypes.string.isRequired,
//     value:PropTypes.string.isRequired
// }