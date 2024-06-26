export let menuItems = [
    { id: 1, name: 'Burger', price: 3 }, 
    { id: 2, name: 'Pizza', price: 4 }, 
];

const conversionRate = 14000;

menuItems = menuItems.map(item => ({
    ...item,
    price: item.price * conversionRate
}));

export const formatPrice = (price) => `Rp. ${price.toLocaleString('id-ID')}`;

export const getMenu = () => menuItems;

