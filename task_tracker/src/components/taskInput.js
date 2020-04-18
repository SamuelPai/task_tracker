import React from 'react'

export default function TaskInput() {
    return (
        <div>
            <form>
                <label style={{margin: "5px 0px"}}>Create a Task:</label>
                <input style={{width:"100%"}}></input>
                <input style={{padding:"5px", marginTop: "5px"}} type="submit"></input>
            </form>
            
           
        </div>
    )
}
