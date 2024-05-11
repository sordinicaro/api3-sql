
import Product from "../product";

(async () => {
    await Product.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

})();

