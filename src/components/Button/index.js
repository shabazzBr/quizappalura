import styled from "styled-components"
import PropTypes from 'prop-types';
const ButtonBase = styled.button`
    width: 100px;
    height: 35px;
    color: #FFFF;
    background-color: #341de7;
    border-radius:${({ theme }) =>{ theme.colors.borderRadius }};
    border:1px solid ${({ theme })=>{ theme.colors.primary }};
    transition: .3s;
   cursor: pointer;
    outline:0;
    &:hover{
        background-color:#341de7;
    }
    &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }

`;

export default function Button(props){
    return(
        <>

            <ButtonBase disabled={props.disabled}>{props.children}</ButtonBase>
        
        </>
    )
}


Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
  };