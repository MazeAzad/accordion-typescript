import { ReactElement,FC ,useState } from "react";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai";
import styled from "styled-components";
interface Questions{
    id:number,
    title:string,
    info:string
}
const Wrapper =styled.section`
    font-family:monospace;
    padding:20px 5px 20px 0;
    .single
    {
        height: 100px;
    }
    .question
    {
        display: flex;
        justify-content: space-between;
    }
    .icons
    {
        height: fit-content;
        margin-top:12px;
        display: flex;
        gap:5px;
        font-size: 1.2rem;
        color:purple;
    }
    .info 
    {
        height: 0;
        overflow-y:hidden;
    }
    .show 
    {
        height: 60px;
    }
`;
const SingleQuestion:FC<Questions>=({id,title,info}):ReactElement=>{
    const [show,setShow]=useState<boolean>(false);
    return(
        <Wrapper>
            <div className="single">
                <div className="question">
                    <p className="title">  {title}</p>
                    <div className="icons">
                        <AiOutlinePlusCircle className="plus-icon" onClick={()=>{setShow(true)}}/>
                        <AiOutlineMinusCircle className="minus-icon" onClick={()=>{setShow(false)}}/>
                    </div>
                </div>
                <div className={`${show? "info show":"info"}`}>
                    {info}
                </div>
            </div>
        </Wrapper>
    )
}
export default SingleQuestion;