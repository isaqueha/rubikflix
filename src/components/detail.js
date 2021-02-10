import { Button } from '@material-ui/core';
import React, { } from "react";
import {
    useHistory
} from "react-router-dom";

const Detail = () => {
    let history = useHistory();

    const handleBackButton = () => {
        history.push('/')
    }

    return (
        <>
            <span>OTHER PAGE</span>
            <Button onClick={handleBackButton}>Back</Button>
        </>
    );
}

export default Detail;
