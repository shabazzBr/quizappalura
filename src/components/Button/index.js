import styled from "styled-components"
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color:rgb(29,15,255);
  background: linear-gradient(90deg, rgba(29,15,255,1) 0%, rgba(255,0,129,1) 30%, rgba(2,2,115,1) 69%);
  color: #FFFF;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }






`;

// export default function Button(props){
//     return(
//         <>

//             <ButtonBase disabled={props.disabled}>{props.children}</ButtonBase>
//         </>
//     )
// }


Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
  };


  export default Button;