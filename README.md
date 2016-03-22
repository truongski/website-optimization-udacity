# Website Performance Optimization portfolio project

## Build instructions

1. Run gulp to compress and copy source files into dist/.
2. Test index.html and pizza.html inside of dist/.

### Optimizations in main.js

#### Pizza Resize

- Cache `windowWidth`, `oldWidth`, and `randomPizzaContainer` before the loop in `changePizzaSizes()`.
The loop doesn't retrieve the same data every iteration.
**Calculation time is cut from 150-175ms to ~1ms.**

#### Pizza Scroll

- Cache `scrollTop` before the loop in `updatePositions()`. 
The loop doesn't retrieve the same data every iteration.
**Calculation time is cut from ~25ms to ~1ms.**

- Change `Math.sin()` function into lookup `lookupSine()`. 
**Calculation time is cut by 20% at the cost of space and precision.**