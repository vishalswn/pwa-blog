import React from 'react'

export default function Member(props){
    return(
        <div>
            <button onClick={props.data}>call data function</button>
        </div>
    )
}