import React, { useState } from 'react'

export default function Profile(){

    const [loggedIn,setLoggedIn] = useState(3)
    return(
        <div>
            {
                loggedIn==1?<h1>Welcome user 1</h1>:loggedIn==2?<h1>welcome user 2</h1>:<h1>welcome user 3</h1>
            }
        </div>
    )
}