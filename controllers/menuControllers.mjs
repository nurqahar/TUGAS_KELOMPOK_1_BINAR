import { getMenu, formatPrice } from '../models/menuModels.mjs';

export const showMenu = (req, res) => {
    const menuItems = getMenu();
    res.render('menu', { menuItems, formatPrice });
};
