import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection'
import { schema } from './schema/index'

async function runSeed() {
  await reset(db, schema)

  const refinedData = await seed(db, schema).refine((f) => {
    return {
      products: {
        count: 10,
        columns: {
          name: f.companyName(),
          price: f.number({ minValue: 1, maxValue: 100 }),
          sku: f.postcode(),
        },
      },
    }
  })

  await sql.end()
}

runSeed().catch((err) => {
  console.error('Erro ao rodar a seed:', err)
})
