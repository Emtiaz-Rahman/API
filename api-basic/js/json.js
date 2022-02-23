// JSON,Stringified

const shop = {
    name: 'Alia Shop',
    address: 'Kaderabad Housing',
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}
const shopDetail = JSON.stringify(shop);
console.log(shopDetail);
// 
const converted = JSON.parse(shopDetail);
console.log(converted);