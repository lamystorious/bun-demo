import { Hono } from 'hono';
import {logger} from 'hono/logger';
import {expensesRoute} from "./routes/expenses.ts";

const app = new Hono()

app.use('*', logger())
app.get('/', (c) => c.text('Hono!'))

app.get("/test", c => {
    // @ts-ignore
    return c.json({"message": "test"})
})

app.route('/api/expenses', expensesRoute)

export default app