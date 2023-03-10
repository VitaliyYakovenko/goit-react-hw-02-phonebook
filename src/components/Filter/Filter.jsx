import React from "react";
import { nanoid } from 'nanoid'


export default function Filter({value, onChange}) {
    const InputIdFilter = nanoid();

    return (
        <>
         <label htmlFor={InputIdFilter}>Find contacts by name</label>
                <input
                onChange={onChange}
                type="text"
                name="filter"     
                value={value}
                id={InputIdFilter}
                >
            </input>
        </>    
  )   
}