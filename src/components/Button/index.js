import styled from "styled-components"
import PropTypes from 'prop-types';

const Button = styled.button`
  background: rgb(20,150,235);
  background: linear-gradient(90deg, rgba(20,150,235,1) 0%, rgba(238,10,245,1) 50%, rgba(255,252,0,1) 100%);
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