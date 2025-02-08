import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const Label = styled.h3`
    font-weight: 400;
    margin-top: 15px;
    font-size: 22px;
`;
const Input = styled.input`
    margin-top: 5px;
    border-radius: 5px;
    padding: 5px;
`;

export default () => 
{
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter.status);
    return (
        <>
            <Label>
                Find contacts by name
            </Label>
            <Input type="text" value={filter !== '' ? filter : ''} onInput={(e) => dispatch(setFilter(e.target.value))}/>
        </>
    );
}