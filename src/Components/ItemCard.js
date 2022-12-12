import React from 'react'

function ItemCard(props) {
  return (
    <div className='flex text-xl p-1 m-1 bg-slate-300 justify-between'>
        <p className="font-bold text-lg my-auto">{props.item.name}</p>
        <p className='my-auto'>{props.item.amount} x {props.item.price}</p>
        <p className='my-auto'>= {props.item.amount * props.item.price}€</p>
        <button onClick={() => props.onC([[props.item, -1]])} className="bg-red-600 px-6 py-4 text-white">-</button>
    </div>
  )
}

export default ItemCard