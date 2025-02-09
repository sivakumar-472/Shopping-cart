document.addEventListener("DOMContentLoaded", function () {
    createBubbles();

    const products = {
        cheerios: 4.99,
        cornflakes: 3.75,
        frosties: 3.50,
        shreddies: 4.25,
        weetabix: 5.00
    };

    document.getElementById("add-to-cart").addEventListener("click", function () {
        let product = document.getElementById("product").value;
        let quantity = parseInt(document.getElementById("quantity").value);

        if (quantity > 0) {
            addToCart(product, quantity, products[product]);
        }
    });
});

function createBubbles() {
    const container = document.getElementById("bubble-container");
    
    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = Math.random() * 2 + 4 + "s";
        container.appendChild(bubble);
    }
}

function addToCart(product, quantity, price) {
    let cartTable = document.getElementById("cart-items");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${product.charAt(0).toUpperCase() + product.slice(1)}</td>
        <td>${quantity}</td>
        <td>$${price.toFixed(2)}</td>
        <td>$${(price * quantity).toFixed(2)}</td>
    `;

    cartTable.appendChild(row);
    updateCartTotal();
}

function updateCartTotal() {
    let rows = document.querySelectorAll("#cart-items tr");
    let subtotal = 0;

    rows.forEach(row => {
        let total = parseFloat(row.cells[3].innerText.replace("$", ""));
        subtotal += total;
    });

    let tax = subtotal * 0.125;
    let total = subtotal + tax;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}
