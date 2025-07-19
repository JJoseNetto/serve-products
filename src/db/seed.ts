import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)

await seed(db, schema).refine((f) => {
    return {
        products:{
            count: 10,
            columns: {
                name: f.companyName(),
                price: f.number({ minValue: 1, maxValue: 100}),
                sku: f.postcode(),
            },
        },
    }
})

await sql.end()