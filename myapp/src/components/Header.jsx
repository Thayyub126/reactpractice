import React from 'react'

const Header = (props) => {
    return (
        <div>
            <p>  {props.name}</p>
            {props.age}
        </div>

    )
}

export default Header