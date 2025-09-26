import { useContext } from "react"
import { CartContext } from "../App"

const Cart = () => {
    const ctx = useContext(CartContext)
  return (
    <section>
        <h1>Kosárban: ({ctx.inCart.length})</h1>
    </section>
  )
}

export default Cart