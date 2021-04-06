import React, {useState} from "react";
import { graphql } from "react-apollo";
import { getWordsQuery } from "../query/query";
import GlossaryDetails from "./GlossaryDetails";



function Glossary({ data }) {
    const [selected, setselected] = useState('')
    let display =  () => {
        if(data.loading){
            return (<div>Loding pls wait</div>)
        }else {
            return data.words.map((word) => {
                return(<li key={word._id} onClick={(e) => {setselected({selected : word._id})}}>{word.title}</li>)
            })
        }
    }
    console.log(selected)
  return (
    <div>
      <ul className="ullist">
          <div className="left list">
          {display()}
          </div>
      </ul>
      <div className="right">
      <GlossaryDetails wordid={selected} />
      </div>
    </div>
  );
}

export default graphql(getWordsQuery)(Glossary);
