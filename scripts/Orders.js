import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const buildOrderListItem = (order) => {
const foundMetal = metals.find( metal => metal.id === order.metalId)
const foundSize = sizes.find(size => size.id === order.sizeId)
const foundStyle = styles.find (style => style.id === order.styleId)

const totalCost = foundMetal.price + foundSize.price + foundStyle.price



const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

