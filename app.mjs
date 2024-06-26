import express from 'express';
import router from './router.mjs';

const app = express();
const port = 3002;

app.use(express.static('style'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use((req, res, next) => {
    res.status(404).render('error', { error: 'Halaman error kawan' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
