import React from "react";

function Message() {
    const name = "Tejas";
    let isName = true;

    function changeName() {
        isName = !isName;
    }

    return <React.Fragment>
        <h1>Hello {name ? name : 'World'}</h1>
        </React.Fragment>
}

export default Message;