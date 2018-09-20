import Router = require('koa-router');
import draw from './app/draw';

export const router: Router = new Router();

router.use('/draw', draw.routes());
