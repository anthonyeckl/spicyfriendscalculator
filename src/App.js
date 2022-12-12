import { useEffect, useState } from 'react';
import './App.css';
import Button1 from './Components/Button1';
import ItemCard from './Components/ItemCard';

function App() {
  const products_json = require("./products.json")

  const products = [...products_json]
  const [shoppingCart, setShoppingCart] = useState(products)
  

  const [sum, setSum] = useState(0)

  useEffect(() => {
    let i = 0;
    shoppingCart.forEach( item => {
      i = (i + (item.amount * item.price))
    })
    setSum(i)
  }, [shoppingCart])

  
  
  // bsp. handler([[product[3],4]])
  const handler  = (objarr) => {
    var shoppingCartClone = [...shoppingCart]

    for (const obj of objarr) {
      shoppingCartClone[obj[0].id -1]["amount"] += obj[1]
      if(obj[0].pfand === true){
        shoppingCartClone[7]["amount"] += obj[1]
      }
    }

    setShoppingCart(shoppingCartClone)
    console.log(shoppingCart)
  }

  const addAngebot = () => {
    //addToShoppingCart([products[0],products[0],products[6],products[3]])
    handler([[products[0], 2], [products[3], 1], [products[6], 1]])

  }

  const clearCart = () => {
    var shoppingCartClone = [...shoppingCart]

    for (const item of shoppingCartClone) {
      item.amount = 0
    }
    setShoppingCart(shoppingCartClone)
  }



  return (
    <div className="App">
      <div className="grid grid-cols-3 gap-2">
        <Button1  text="Glühwein" color="bg-red-500" onC={() => {handler([[products[0], 1]])}}></Button1>
        <Button1  text="Punsch" color="bg-blue-500" onC={() => {handler([[products[1], 1]])}}></Button1>
        <Button1  text="Angebot" color="bg-green-500" onC={addAngebot}></Button1>
        <Button1  text="Quark 3" color="bg-yellow-500" onC={() => {handler([[products[2], 1]])}}></Button1>
        <Button1  text="Quark 5" color="bg-yellow-500" onC={() => {handler([[products[3], 1]])}}></Button1>
        <Button1  text="Quark 7" color="bg-yellow-500" onC={() => {handler([[products[4], 1]])}}></Button1>
        <Button1  text="Pfand Zurück" color="bg-orange-500" onC={() => {handler([[products[5], 1]])}}></Button1>
        <Button1  text="Pfand" color="bg-slate-400" onC={() => {handler([[products[7], 1]])}}></Button1>
        <Button1  text="Clear" color="bg-red-500" onC={clearCart}></Button1>
      </div>
      <div>
        {shoppingCart.map(item => {
          return item.amount > 0 ?
            <ItemCard key={item.id} item={item} onC={handler}></ItemCard>
            :
            <div key={item.id}></div>
          })
        }
      </div>
      <div className='w-max h-16'></div>
        <div className="p-1 bg-orange-300 text-3xl w-auto fixed inset-x-0 bottom-3">Gesamt: {sum} €</div>
        <p className=' text-slate-700 text-xs fixed inset-x-0 bottom-0 bg-white'>SpicyFriendsCalculator - by Anthony Eckl (anthony.eckl@freenet.de)</p>
    </div>
  );
}

export default App;
