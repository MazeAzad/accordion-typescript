import { FC, ReactElement } from "react";
import Data from "../data";
import SingleQuestion from "./singleQuestion";
const Questions:FC=():ReactElement=>{
    return(
        <section>
        {Data.map((d)=>{
            return <SingleQuestion key={d.id} {...d}/>
        })}
        </section>
    )
}
export default Questions;