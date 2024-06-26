import { addOrder, getOrders } from '../models/orderModels.mjs';

export const showOrders = (req, res) => {
    const orders = getOrders();
    res.render('order', { orders });
};

export const createOrder = (req, res) => {
    const { menuItems } = req.body;
    const newOrder = {
        id: new Date().getTime(),
        items: menuItems,
    };
    addOrder(newOrder);
    res.redirect('/orders');
};
