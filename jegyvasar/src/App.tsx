import { createContext, useEffect, useState } from "react"
import { getTickets } from "./services/ticketServices"
import TicketCard from "./components/TicketCard"
import Cart from "./components/Cart"

export type Ticket = {
    nev : string,
    kategoria : string
    ar : number
}

type CartContextType =  {
  addToCart: (t:Ticket) => void, 
  inCart: Ticket[]
}

export const CartContext = 
createContext<CartContextType>({
  addToCart:()=>{},
  inCart: []
})


const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])

  const [inCart, setInCart] = useState<Ticket[]>([])

    useEffect(() => {
    getTickets().then (data => {
      setTickets(data)
    })
  }, [])

 const addToCart = (ticket:Ticket) => {
    setInCart(prev => [...prev, ticket])
  }

  return (
    <CartContext.Provider value={{addToCart: addToCart, inCart: inCart}}>
    <header>
    <h1 id="cimsor">Jegybolt</h1>
    </header>
    <main>
      <section className='ticketsWrapper'>
        {tickets.map(ticket => <TicketCard {...ticket} />)}
      </section>
      <section>
        <Cart/>
      </section>
    </main>
    </CartContext.Provider>
  )
}

export default App