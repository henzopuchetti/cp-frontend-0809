import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHomeAlt size="1.5rem" color="#38aede"/>
                    <Link to="/">Inicio</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <AiOutlineFileAdd size="1.5rem" color="#38aede"/>
                    <Link to="/lista">Nova Lista</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <AiOutlineUser size="1.5rem" color="#38aede"/>
                    <Link to="/perfil">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}