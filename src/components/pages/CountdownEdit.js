import React from 'react';

function CountdownEdit(props) {
    return (
        <div>
            <p>Edit {props.match.params.id}</p>
        </div>
    );
}

export default CountdownEdit;
