import React, { useEffect } from 'react'

const Articles = (props) => {
    useEffect(() => {
        props.setSideToggle(false);
    })
    return (
        <div>
            Articles
        </div>
    )
}

export default Articles;
