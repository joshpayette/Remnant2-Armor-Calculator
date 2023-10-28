# Remnant 2 Armor Calculator

## Description

I wanted to compare every item against every other item to see what is the max armor you can
get for certain weights. So I threw together this quick script to do it for me!

## Usage

```bash
npm install
npm start
```

The results will be written to `./src/output/results.csv`. This repo already has the results,
as well as the .xlsx version with formatting and filtering.

## TODO

### Improved Armor Calculation

I think I need to code in the weight calculations rather than relying on base item
weights in the wiki. I know that all Leto Mark II + Labyrinth Gloves is highest armor,
but that's not the case in this list.

## Contributing

Pull requests are welcome. I could definitely use help keeping `./src/items.json` updated with the
latest armor and values.
