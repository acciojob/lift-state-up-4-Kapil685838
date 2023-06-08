import React from 'react'

function ChildComponent({ cartItems, onRemove }) {
    return (
        <div className='child'>
            <h2>Child Component</h2>
            {cartItems && cartItems.map((item) => {
                return (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => { onRemove(item.id) }}>Remove</button>
                    </li>
                )
            })}
        </div>
    )
}

export default ChildComponent
