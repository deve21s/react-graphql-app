import React from "react";
import { graphql } from "react-apollo";
import { getWordQuery } from "../query/query";



function GlossaryDetails(props) {
    let display =  () => {
        let {word} = props.data 
        if(word){
            return (<div>
                <h2 className="list">{word.details}</h2>
            </div>)
        }else {
            return (
                <h1>NO Book selected</h1>
            )
        }
    }
    
  return (
    <div>
      <ul>
        {display()}
      </ul>
    </div>
  );
}

export default graphql(getWordQuery,
    {
        options: props => {
            return{
                variables:{
                    id: props.wordid.selected
                }
            }
        }
    })(GlossaryDetails);
