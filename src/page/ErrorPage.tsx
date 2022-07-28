import React from 'react';

const ErrorPage = (props: { errorCode?: 404 | undefined; }) => {

    const {errorCode} = props;

    return (
        <p>Error Code {errorCode}</p>
    )
}

export default ErrorPage;