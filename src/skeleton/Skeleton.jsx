/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Skeleton.css"
const Skeleton = ({ width, height, variant }) => {
    const style = {
        width,
        height
    }
    return (
        <span className={`skeleton ${variant}`} style={style}>Skeleton</span>
    )
}

export default Skeleton