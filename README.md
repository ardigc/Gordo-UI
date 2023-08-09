
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
**Props of the `Paper` component are also available.**
##### -  children?: ReactNode
##### -  severity?: 'error' | 'info' | 'success' | 'warning'. Default:'success'
##### -  action?: ReactNode
##### -  onClose?: (ev: MouseEvent<HTMLButtonElement>) => void
##### -  variant?: 'filled' | 'outlined' | 'standard'. Default:'standard'
##### -  className?: string
##### -  classes?: { Paper?: string, IconComponent?: string, ChildrenComponent?: string}
##### -  closeText?: string. Default:'Close'
##### -  icon?: ReactNode
##### -  iconMapping?: {error?: ReactNode, info?: ReactNode, success?: ReactNode, warning?: ReactNode}
##### -  slots?: { closeButton?: ElementType; closeIcon?: ElementType }
##### -  slotProps?: { closeButton?: object; closeIcon?: object }

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
**Props of the `DivElement` are also available.**

##### -  children: ReactNode
##### -  className?: string

---

### &lt;Button />
#### Usage
```tsx
    <Button onClick={clickHandler}>Content</Button>
```

#### Props
**Props of the `ButtonComponent` and `AnchorElement` are also available.**

##### -  children:  children?: ReactNode
##### -  variant?: 'contained' | 'outlined' | 'text'. Default:'text'
##### -  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit'. Default:'primary'
##### -  disabled?: boolean
##### -  disableElevation?: boolean
##### -  disableRipple?: boolean
##### -  size?: 'small' | 'medium' | 'large'. Default:'medium'
##### -  startIcon?: ReactNode
##### -  endIcon?: ReactNode
##### -  className?: string
##### -  classes?: {buttonClassName?: string, rippleSpanClassName?: string }
##### -  component?: ElementType
##### -  fullWidth?: boolean
##### -  id?: string
##### -  href: string
   - If you use href the component will be an `AnchorElement`
##### -  onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void


---

### &lt;IconButton />
#### Usage
```tsx
    <IconButton size='small'>
      <SuccessIcon/>
    </IconButton>
```

#### Props
**Props of the `ButtonComponent` and `AnchorElement` are also available.**

##### -  children?: ReactNode
##### -  size?: 'small' | 'medium' | 'large'. Default:'medium'
##### -  disableRipple?: boolean
##### -  classes?: { buttonClassName?: string, rippleSpanClassName?: string}
##### -  disabled?: boolean
##### -  edge?: 'end' | 'start' | false
##### -  className?: string
##### -  href: string
   - If you use href the component will be an `AnchorElement`
##### -  onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void
  
---

### &lt;ClickAway />
#### Usage
```tsx
    <ClickAway onClickAway={clickAwayHandler}>
          <TextField label="Select a film" select>
            {options.map((option) => (
              <Option value={option}>{option}</Option>
            ))}
          </TextField>
    </ClickAway>
```

#### Props
##### -  children: ReactElement<any, string | JSXElementConstructor<any>>
##### -  onClickaway: (event: MouseEvent | TouchEvent) => void
  
---

### &lt;Collapse />
#### Usage
```tsx
 <Button onClick={changeOpenFunc}>
                <Collapse collapsedSize='0px' timeout=0 open={open}>
                  <div>
                    <p>gola</p>
                    <p>gola</p>
                  </div>
                </Collapse>
</Button>             
```

#### Props
**Props of the `Paper` component are also available.**
##### -    children: ReactElement<any, string | JSXElementConstructor<any>>
##### -  open?: boolean
##### -  className?: string
##### -  collapsedSize?: number | string
##### -  component?: ElementType
##### -  easing?: 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
##### -  timeout?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000. Default: 500

---

### &lt;FormControl />
#### Usage
```tsx
    <FormControl onSubmit={submitHandler} color='error'> 
        <InputLabel>Email</InputLabel>
        <Input name="email" /> <button type="submit">button</button>
    </FormControl>
```

#### Props

##### -  children?: ReactNode
##### -  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
##### -  variant?: 'filled' | 'outlined' | 'standard'. Default: 'outlined'
##### -  margin?: 'dense' | 'none' | 'normal'. Default: 'normal'
##### -  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'
##### -  component?: ElementType
##### -  fullWidth?: boolean
##### -  className?: string
##### -  disabled?: boolean
##### -  error?: boolean
##### -  focused?: boolean
##### -  hiddenLabel?: boolean
##### -  required?: boolean

---

### &lt;FormHelper />
#### Usage
```tsx
    <FormControl onSubmit={submitHandler} color='error'> 
        <InputLabel>Email</InputLabel>
        <Input name="email" /> <button type="submit">button</button>
         <FormHelper>Helper text</FormHelper>
    </FormControl>
```

#### Props

##### -   children?: ReactNode
##### -  className?: string
##### -  component?: ElementType
##### -  componentProps?: React.HTMLAttributes<HTMLElement>
##### -  disabled?: boolean
##### -  error?: boolean
##### -  margin?: 'dense' | 'none'
##### -  id?: string

---

### &lt;Input />
#### Usage
```tsx
<Input autoFocus color='secondary'/>
```

#### Props

##### -   autocomplete?: string
##### -  id?: string
##### -  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'
##### -  autoFocus?: boolean
##### -  className?: string
##### -  classes?: {constainerClassName?: string,inputClassName?: string}
##### -  components?: {Input?: ElementType, Container?: ElementType}
##### -  componentsProps?: {container?: React.HTMLAttributes<HTMLElement>, input?: React.InputHTMLAttributes<HTMLInputElement>}
##### - defaultValue?: string | number | ReadonlyArray<string> | undefined
##### -  disabled?: boolean
##### -  disaledUndeline?: boolean
##### -  endAdornment?: ReactNode
##### -  startAdornment?: ReactNode
##### -  error?: boolean
##### -  inputComponent?: ElementType
##### -  inputProps?: object
##### -  fullWidth?: boolean
##### -  inputRef?: React.LegacyRef<HTMLInputElement> | undefined
##### -  margin?: 'dense' | 'none'
##### -  multiline?: boolean
##### -  multilineTextAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined
##### -  rows?: number | string
##### -  name?: string
##### -  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
##### -  onFocus?: () => void
##### -  value?: string | ReadonlyArray<string> | number | undefined
##### -  placeholder?: string | undefined
##### -  readonly?: boolean
##### -  required?: boolean
##### -  type?: HTMLInputTypeAttribute
##### -  label?: string | ReactNode
##### -  variant?: 'filled' | 'outlined' | 'standard'. Default: 'standard'
##### -  size?: 'medium' | 'small'. Default: 'medium'
##### -  shrink?: boolean

---

### &lt;ImputLabel />
#### Usage
#### You can see at `FormControl` example

#### Props

##### -    children?: ReactNode
##### -  className?: string
##### -  htmlFor?: string
##### -  disableAnimation?: boolean
##### -  shrink?: boolean
##### -  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'
##### -  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
##### -  disabled?: boolean
##### -  error?: boolean
##### -  size?: 'medium' | 'small'. Default: 'medium'
##### -  margin?: 'dense' | 'none'
##### -  variant?: 'filled' | 'outlined' | 'standard'

---

### &lt;Menu />
### 
### &lt;MenuItem/>
### and
### &lt;MenuList/>

#### Usage
```tsx
        <Menu
          open={open}
          onClose={onCloseHandler}
          anchorEl={anchorEl}
        >
          <MenuItem divider onClick={onCloseHandler}>
            opcion 1
          </MenuItem>
          <MenuItem onClick={onCloseHandler}>opcion 2</MenuItem>
          <MenuItem onClick={onCloseHandler}>opcion 3</MenuItem>
        </Menu>
```
You can wrap some `MenuItem` with a `MenuList` if you don´t want a Popover

#### Menu props
**Props of the `Popover` component are also available.**

##### -  children?: ReactNode
##### -  open: boolean
##### -  onClose?: () => void
##### -  classes?: { Popover?: string; MenuList?: string }
##### -  MenuListProps?: MenuListProps
##### -  PopoverClasses?: { root?: string; paper?: string }

#### MenuItem props
**Props of the `LiElement` component are also available.**

##### -  children?: ReactNode
##### -  className?: string
##### -  component?: ElementType
##### -  dense?: boolean
##### -  disableGutters?: boolean
##### -  divider?: boolean
##### -  onClick?: (ev: MouseEvent<HTMLLIElement>) => void
##### -  selected?: boolean

#### MenuList props
**Props of the `UlElement` component are also available.**

##### -  children?: ReactNode

