
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
    <Alert className='bg-slate-200'>
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
    <Alert >
      <AlertTitle>Title</AlertTitle>
      Content
    </Alert>
```

#### Props
**Props of the DivElement are also available.**

##### -   children: ReactNode
##### -  className?: string

---

### &lt;Button />
#### Usage
```tsx
    <Button onClick={clickHandle}>Content</Button>
```

#### Props
**Props of the ButtonComponent and AnchorElement are also available.**

##### -   children:  children?: ReactNode
##### -  variant?: 'contained' | 'outlined' | 'text'
##### -  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit'
##### -  disabled?: boolean
##### -  disableElevation?: boolean
##### -  disableRipple?: boolean
##### -  size?: 'small' | 'medium' | 'large'
##### -  startIcon?: ReactNode
##### -  endIcon?: ReactNode
##### -  className?: string
##### -  classes?: {buttonClassName?: string, rippleSpanClassName?: string }
##### -  component?: ElementType
##### -  fullWidth?: boolean
##### -  id?: string
##### -  href: string
-If you use href the component will be a AnchorElement
##### -  onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void


---

### &lt;AlertTitle />
#### Usage
```tsx
    <Alert >
      <AlertTitle>Title</AlertTitle>
      Content
    </Alert>
```

#### Props
**Props of the DivElement are also available.**

##### -   children: ReactNode
##### -  className?: string
