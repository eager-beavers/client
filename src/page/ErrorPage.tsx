import React from 'react';

const ErrorPage = (props) => {

    const {errorCode = 404} = props;

    return (
        <p>Error Code {errorCode}</p>
    )
}

export default ErrorPage;