let orders = [];

export const addOrder = (order) => {
    orders.push(order);
};

export const getOrders = () => orders;
