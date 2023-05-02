import React from 'react'
import Atropos from 'atropos/react'

const AtroposWrapper = ({children,...props}) => {
    return(
    <div>
        <Atropos activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        rotateXMax={70}
        rotateYMax={70}
        {...props}>
            {children}
        </Atropos>
    </div>
    )
}

export default AtroposWrapper