import fs from 'fs'
import * as items from './items.json'
import type { Result } from './types'

// Write all results to a file called results.csv with nodejs
function writeResults(results: Result[]) {
  const csv = results.map((result) => {
    return `${result.helm},${result.chest},${result.boots},${result.gloves},${result.totalWeight},${result.totalArmor}`
  })

  fs.writeFile('output/results.csv', csv.join('\n'), (err: any) => {
    if (err) {
      console.log(err)
    }
  })
}

// Loop through each item and weight combination, and calculate the total weight and armor
function calculateResults() {
  const results: Result[] = []
  const { helms, chests, boots, gloves } = items

  for (const helm of helms) {
    for (const chest of chests) {
      for (const boot of boots) {
        for (const glove of gloves) {
          const totalWeight =
            helm.weight + chest.weight + boot.weight + glove.weight
          const totalArmor = helm.armor + chest.armor + boot.armor + glove.armor

          results.push({
            helm: helm.name,
            chest: chest.name,
            boots: boot.name,
            gloves: glove.name,
            totalWeight,
            totalArmor,
          })
        }
      }
    }
  }

  return results
}

// Run the code
const results = calculateResults()
writeResults(results)
