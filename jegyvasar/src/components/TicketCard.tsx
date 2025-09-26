import { useContext, useState } from "react"
import { CartContext, type Ticket } from "../App"
import AddToCartBtn from "./AddToCartBtn"

const TicketCard = (props: Ticket) => {
    const [count, setCount] = useState(0)

    const ctx = useContext(CartContext)

    const increase = () => {
      setCount(prev => prev + 1)
      ctx.addToCart(props)
    }
    const decrease = () => {setCount(prev => prev - 1)}

  return (
    <div className="ticketCard">
        <h1 className="kategoria">{props.kategoria}</h1>
        <h3 className="nev">{props.nev}</h3>
        <h2 className="ar">{props.ar}Ft</h2>
        <AddToCartBtn
          count={count}
          increase={increase}
          decrease={decrease}
        />
    </div>
  )
}

export default TicketCard