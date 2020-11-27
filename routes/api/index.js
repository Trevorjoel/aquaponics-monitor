import express from 'express';
const appController = require('../../controller/AppController');
const router = express.Router();
const app = express();
app.use(express.json());

router.route('/api/user')
   .get(appController.registerNewSystem)

export default router;
// TODO: Reassess the needed data and names of the routes
