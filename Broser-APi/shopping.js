const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value
    displayProduct(name);

    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li);
}