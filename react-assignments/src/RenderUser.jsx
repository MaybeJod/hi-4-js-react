import React from "react"

function RenderUser({user}) {

    return (
        <article>
            <h2>Hello {user.name}!</h2>
            <p>You are {user.info["age"]} years old</p>
            <p>You live in {user.info["city"]}</p>
            <p>You work as a {user.info["job"]}</p>
            <p>Your hobbies are {user.info["hobbies"].map((hobbies) => (
                <li key={hobbies}>{hobbies}</li>
            )
            )}</p>
        </article>
    )
}

export default RenderUser