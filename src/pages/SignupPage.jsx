import React from 'react';

function Signup() {
    return(
    <form action="/login" method="POST">
        <label for="username">Username:</label>
            <input type="text" id="username" name="username" />
            <br />
            <br />
        <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br />
            <br />
        <input type="submit" />
    </form>

    )

}

export default Signup;