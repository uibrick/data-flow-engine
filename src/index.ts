import Koa = require('koa');
import koaBody = require('koa-body');
import { router } from './router';
import { performance } from 'perf_hooks';

// const koaBody = require('koa-body');


const app = new Koa();

// body parser
app.use(koaBody());

// logger

app.use(async (ctx: Koa.Context, next: any) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx: Koa.Context, next: any) => {
  const start = performance.now()
  await next();
  const ms = performance.now() - start;
  ctx.set('X-Response-Time', `${ms.toFixed(3)}ms`);
});

app.use(router.routes());

// response

app.use(async (ctx: Koa.Context) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
