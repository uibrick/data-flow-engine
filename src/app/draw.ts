import Router = require('koa-router');
import Koa = require('koa');

import { createEvent, EventTypes } from '../cqrs/event';
import { DrawDataModel } from '../cqrs/data-flow-model';

const router: Router = new Router();

export default router;


function get_draw_data(param: any = null): DrawDataModel {
    let drawData: DrawDataModel = {
        uuid: 'uuid',
        receiver: '',
        amount: 100.00,
        payment_date: new Date(),
        duration: 100,
        duration_unit: 'string',
        draw_date: new Date(),
        attachment1: 'string',
        attachment2: 'string',
        comment: 'string',
    };
    return drawData
}


router.post('/', async (ctx: Koa.Context, next) => {
    let drawData: DrawDataModel = get_draw_data(ctx);

    console.log('body: ', ctx.body, ctx.request.body);

    // let event_draw = createEvent(EventTypes.DRAW_EVENT, drawData);
    
    await next();
});
