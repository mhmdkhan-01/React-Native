let custOrders=[
    {
        name:"Ali",
        product_name:"Mobile",
        quantity:3,
        price:45000,
        order_status:"Pending"
    }
    ,{
        name:"Hamza",
        product_name:"Laptop",
        quantity:20,
        price:60000,
        order_status:"Shipped"
    },{
        name:"Usman",
        product_name:"Camera",
        quantity:15,
        price:155000,
        order_status:"Delivered"
    }
];

let total_price=getTotalPrice(custOrders);

let cust_spent=getCustomerSpending("Ali", custOrders);



function getTotalPrice(custOrders)
{
    let total_price=0;
    for(let order of custOrders)
    {
        total_price+=order.price*order.quantity;
    }
    return total_price;
}

function getCustomerSpending(name, ordersl)
{
    let orders=ordersl.filter(order=>order.name==name);
    let total=getTotalPrice(orders);
    return total;
}

function filterByStatus(status)
{
    orders=custOrders.filter(order=>order.order_status==status);
    orders.forEach(order=>{
        console.log(`Name: ${order.name}, Product: ${order.product_name}, Quantity: ${order.quantity}, Price: ${order.price}, Status: ${order.order_status}`);
    });
}

function bestSellingProduct(orders)
{
    let bestProduct=orders[0];
    for(let order of orders)
    {
        if(order.quantity>bestProduct.quantity)
        {
            bestProduct=order;
        }
    }
    console.log(`Best Selling Product: ${bestProduct.product_name}, Quantity Sold: ${bestProduct.quantity}`);
}

// get 10% discount on product whos bill is >10000
function getDiscount(order)
{
    let curbill=order.quantity*order.price;
    if(curbill>=10000)
    {
        curbill-=curbill*10/100;
    }
    return curbill;
}

console.log(total_price);
console.log(cust_spent);

getTotalPrice(custOrders);

getCustomerSpending("Ali", custOrders);

filterByStatus('Pending');

bestSellingProduct(custOrders);

custOrders.forEach(order=>{
    let discount=getDiscount(order);
    console.log(`Customer: ${order.name}, Product: ${order.product_name}, Discount: ${discount}`);
});