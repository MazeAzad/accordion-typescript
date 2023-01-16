import React ,{FC ,ReactElement} from "react";
import styled from "styled-components";
const Wrapper=styled.div`
    .title h3 
    {
        font-size: 2rem;
        margin:0;
    }
`;
const Title:FC =():ReactElement=>{
    return(
        <Wrapper>
            <div className="title">
                <h3>Question and Answers About Login</h3>
            </div>
        </Wrapper>
    )
}
export default Title;