# My Personal Page

This is my personal page. Created with [parceljs](https://parceljs.org/) and [reactjs](https://reactjs.org/).

## Structure

The project follow this:

```sh
src                     # Everything goes here
├─ assets               # Images and static stuff
├─ components           # Every react component
│   └─ Component        # A folder for the component
│      ├─ index.js      # The component file
│      ├─ index.css     # The component style
│      └─ index.test.js # The component test
├─ context              # The context application folder
│   ├─ context.js       # The context creation
│   ├─ initialState.js  # The initial state and JSDocs type defs
│   ├─ reducer.js       # The app reducer (for sync state change)
│   └─ useActions.js    # The app action (for async state change)
├─ functions            # Extra functions and helpers
├─ Pages                # Pages folder
│   ├─ Pages.js         # Page file
│   └─ Pages.test.js    # Page test file
```
