
# Gordo-UI

This is gordo-ui, the material desing with Tailwind

Check it Out

## Usage:

1. Install
```
npm i gordo-ui
```

2. Pull any gordo-ui component into your component:
   Example:
```
import { Button } from 'gordo-ui';
```

3. Make something awesome!

## API

Exports:
- `Alert`
- `AlertTitle`
- `Button`
- `IconButton`
- `ClickAway`
- `Collapse`
- `Icons`
- `FormControl`
- `FormHelper`
- `Input`
- `InputLabel`
- `Menu`
- `MenuItem`
- `MenuList`
- `Option`
- `Paper`
- `Popover`
- `SnackBar`
- `Table`
- `TableBody`
- `TableFooter`
- `TableContainer`
- `TableCell`
- `TableHead`
- `TextField`
- `Tooltip`
  
---

### &lt;Alert />
#### Usage
```tsx
    <Alert {...args}>
      Content
    </Alert>
```

#### Props
**Props of the Paper component are also available.**
##### -   children: ReactNode
##### -  className?: string

---

### &lt;AlertTitle />
#### Usage
```tsx
    <Alert {...args}>
      <AlertTitle>Title</AlertTitle>
      Content
    </Alert>
```

#### Props
**Props of the DivElement are also available.**

##### -   children: ReactNode
##### -  className?: string
