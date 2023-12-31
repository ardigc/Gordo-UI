# Gordo-UI

This is gordo-ui, the material desing with Tailwind

Check it Out

## Usage:

1. Install

```
npm i gordo-ui
```

2. You need to import the CSS styles. You can do this in your main JavaScript file using:

```
import '/node_modules/gordo-ui/dist/style.css';
```

or in your main CSS file using:

```
@import '/node_modules/gordo-ui/dist/style.css';
```

3. Pull any gordo-ui component into your component:
   Example:

```
import { Button } from 'gordo-ui';
```

4. Make something awesome!

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
<Alert className="bg-slate-200">Content</Alert>
```

#### Props

**Props of the `Paper` component are also available.**

##### - children?: ReactNode

##### - severity?: 'error' | 'info' | 'success' | 'warning'. Default:'success'

##### - action?: ReactNode

##### - onClose?: (ev: MouseEvent<HTMLButtonElement>) => void

##### - variant?: 'filled' | 'outlined' | 'standard'. Default:'standard'

##### - className?: string

##### - classes?: { Paper?: string, IconComponent?: string, ChildrenComponent?: string}

##### - closeText?: string. Default:'Close'

##### - icon?: ReactNode

##### - iconMapping?: {error?: ReactNode, info?: ReactNode, success?: ReactNode, warning?: ReactNode}

##### - slots?: { closeButton?: ElementType; closeIcon?: ElementType }

##### - slotProps?: { closeButton?: object; closeIcon?: object }

---

### &lt;AlertTitle />

#### Usage

```tsx
<Alert>
  <AlertTitle>Title</AlertTitle>
  Content
</Alert>
```

#### Props

**Props of the `DivElement` are also available.**

##### - children: ReactNode

##### - className?: string

---

### &lt;Button />

#### Usage

```tsx
<Button onClick={clickHandler}>Content</Button>
```

#### Props

**Props of the `ButtonComponent` and `AnchorElement` are also available.**

##### - children: children?: ReactNode

##### - variant?: 'contained' | 'outlined' | 'text'. Default:'text'

##### - color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit'. Default:'primary'

##### - disabled?: boolean

##### - disableElevation?: boolean

##### - disableRipple?: boolean

##### - size?: 'small' | 'medium' | 'large'. Default:'medium'

##### - startIcon?: ReactNode

##### - endIcon?: ReactNode

##### - className?: string

##### - classes?: {buttonClassName?: string, rippleSpanClassName?: string }

##### - component?: ElementType

##### - fullWidth?: boolean

##### - id?: string

##### - href: string

- If you use href the component will be an `AnchorElement`

##### - onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void

---

### &lt;IconButton />

#### Usage

```tsx
<IconButton size="small">
  <SuccessIcon />
</IconButton>
```

#### Props

**Props of the `ButtonComponent` and `AnchorElement` are also available.**

##### - children?: ReactNode

##### - size?: 'small' | 'medium' | 'large'. Default:'medium'

##### - disableRipple?: boolean

##### - classes?: { buttonClassName?: string, rippleSpanClassName?: string}

##### - disabled?: boolean

##### - edge?: 'end' | 'start' | false

##### - className?: string

##### - href: string

- If you use href the component will be an `AnchorElement`

##### - onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void

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

##### - children: ReactElement<any, string | JSXElementConstructor<any>>

##### - onClickaway: (event: MouseEvent | TouchEvent) => void

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

**Props of the `DivElement` are also available.**


##### - children: ReactElement<any, string | JSXElementConstructor<any>>

##### - open?: boolean

##### - className?: string

##### - collapsedSize?: number | string

##### - component?: ElementType

##### - easing?: 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out'

##### - timeout?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000. Default: 500

---

### &lt;FormControl />

#### Usage

```tsx
<FormControl onSubmit={submitHandler} color="error">
  <InputLabel>Email</InputLabel>
  <Input name="email" /> <button type="submit">button</button>
</FormControl>
```

#### Props

**Props of the `FormElement` are also available.**

##### - children?: ReactNode

##### - onSubmit?: (ev: FormEvent<HTMLFormElement>) => void

##### - variant?: 'filled' | 'outlined' | 'standard'. Default: 'outlined'

##### - margin?: 'dense' | 'none' | 'normal'. Default: 'normal'

##### - color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'

##### - component?: ElementType

##### - fullWidth?: boolean

##### - className?: string

##### - disabled?: boolean

##### - error?: boolean

##### - focused?: boolean

##### - hiddenLabel?: boolean

##### - required?: boolean

---

### &lt;FormHelper />

#### Usage

```tsx
<FormControl onSubmit={submitHandler} color="error">
  <InputLabel>Email</InputLabel>
  <Input name="email" /> <button type="submit">button</button>
  <FormHelper>Helper text</FormHelper>
</FormControl>
```

#### Props
**Props of the `ParagraphElement` are also available.**


##### - children?: ReactNode

##### - className?: string

##### - component?: ElementType

##### - componentProps?: React.HTMLAttributes<HTMLElement>

##### - disabled?: boolean

##### - error?: boolean

##### - margin?: 'dense' | 'none'

##### - id?: string

---

### &lt;Input />

#### Usage

```tsx
<Input autoFocus color="secondary" />
```

**Props of the `InputElement` component are also available.**

#### Props

##### - autocomplete?: string

##### - id?: string

##### - color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'

##### - autoFocus?: boolean

##### - className?: string

##### - classes?: {constainerClassName?: string,inputClassName?: string}

##### - components?: {Input?: ElementType, Container?: ElementType}

##### - componentsProps?: {container?: React.HTMLAttributes<HTMLElement>, input?: React.InputHTMLAttributes<HTMLInputElement>}

##### - defaultValue?: string | number | ReadonlyArray<string> | undefined

##### - disabled?: boolean

##### - disaledUndeline?: boolean

##### - endAdornment?: ReactNode

##### - startAdornment?: ReactNode

##### - error?: boolean

##### - inputComponent?: ElementType

##### - inputProps?: object

##### - fullWidth?: boolean

##### - inputRef?: React.LegacyRef<HTMLInputElement> | undefined

##### - margin?: 'dense' | 'none'

##### - multiline?: boolean

##### - multilineTextAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined

##### - rows?: number | string

##### - name?: string

##### - onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void

##### - onFocus?: () => void

##### - value?: string | ReadonlyArray<string> | number | undefined

##### - placeholder?: string | undefined

##### - readonly?: boolean

##### - required?: boolean

##### - type?: HTMLInputTypeAttribute

##### - label?: string | ReactNode

##### - variant?: 'filled' | 'outlined' | 'standard'. Default: 'standard'

##### - size?: 'medium' | 'small'. Default: 'medium'

##### - shrink?: boolean

---

### &lt;ImputLabel />

#### Usage

#### You can see at `FormControl` example

#### Props
**Props of the `LabelElement` component are also available.**


##### - children?: ReactNode

##### - className?: string

##### - htmlFor?: string

##### - disableAnimation?: boolean

##### - shrink?: boolean

##### - color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'

##### - labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>

##### - disabled?: boolean

##### - error?: boolean

##### - size?: 'medium' | 'small'. Default: 'medium'

##### - margin?: 'dense' | 'none'

##### - variant?: 'filled' | 'outlined' | 'standard'

---

### &lt;Menu />

###

### &lt;MenuItem/>

### and

### &lt;MenuList/>

#### Usage

```tsx
<Menu open={open} onClose={onCloseHandler} anchorEl={anchorEl}>
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

##### - children?: ReactNode

##### - open: boolean

##### - onClose?: () => void

##### - classes?: { Popover?: string; MenuList?: string }

##### - MenuListProps?: MenuListProps

##### - PopoverClasses?: { root?: string; paper?: string }

#### MenuItem props

**Props of the `LiElement` component are also available.**

##### - children?: ReactNode

##### - className?: string

##### - component?: ElementType

##### - dense?: boolean

##### - disableGutters?: boolean

##### - divider?: boolean

##### - onClick?: (ev: MouseEvent<HTMLLIElement>) => void

##### - selected?: boolean

#### MenuList props

**Props of the `UlElement` component are also available.**

##### - children?: ReactNode

---

### &lt;Paper />

#### Usage

```tsx
<Paper elevation=11 >Content</Paper>
```

#### Props

**Props of the `DivElement` component are also available.**

##### - children: ReactNode

##### - className?: string

##### - component?: ElementType

##### - elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14. Default: 4

##### - square?: boolean

##### - variant?: 'elevation' | 'outlined'. Default:'elevation'

---

### &lt;Popover />

#### Usage

```tsx
<Button onClick={handleClick}>click aqui</Button>
        <Popover
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'center', horizontal: 'right' }}
          anchorReference='anchorEl'
          anchorEl={anchorEl}
          open={open}
        >
          <p>
            The content of the Popover.
          </p>
        </Popover>
```

#### Props

**Props of the `DivElement` component are also available.**

##### - children?: ReactNode

##### - open: boolean

##### - onClose?: () => void

##### - anchorReference?: 'anchorEl' | 'anchorPosition'. Default: 'anchorEl'

##### - anchorEl?: Element | (() => Element)

##### - anchorOrigin?: {horizontal?: 'center' | 'left' | 'right', vertical?: 'bottom' | 'center' | 'top'}. Default: vertical: 'top', horizontal: 'left'

##### - transformOrigin?: {horizontal?: 'center' | 'left' | 'right', vertical?: 'bottom' | 'center' | 'top'}. Default: vertical: 'top', horizontal: 'left'

##### - anchorPosition?: { left?: number; top?: number }. Default: top: 0, left: 0

##### - className?: string

##### - container?: Element | (() => Element)

##### - elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14. Default: 4

##### - marginThreshold?: number. Default: 16

##### - componentProps?: { paper?: () => void | object; root?: () => void | object }

##### - components?: { paper?: ElementType; root?: ElementType }

##### - id?: string

##### - disableTransition?: boolean

##### - classes?: { root?: string; paper?: string }

---

### &lt;SnackBar />

#### Usage

```tsx
   <Button onClick={() => setOpen(!open)}>Hazme click</Button>
   <SnackBar open={open} onClose={handleClose} />
```

#### Props

**Props of the `DivElement` component are also available.**

##### - children?: ReactNode

##### - message?: ReactNode

##### - open?: boolean

##### - action?: ReactNode

##### - onClose?: (ev: Event | KeyboardEvent | null, reason: string) => void

##### - autoHideDuration?: number

##### - anchorOrigin?: {horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top'}. Default: vertical: 'bottom', horizontal: 'left'

##### - className?: string

##### - ContentProps?: PaperProps

##### - disableWindowBlurListener?: boolean

##### - key?: any

##### - resumeHideDuration?: number

##### - transition?: 'fade' | 'grown' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight'. Default: 'grown'

---

### &lt;Table />

#### You can use `Table`, `TableBody`, `TableCell`, `TableContainer`, `TableFooter`, `TableHead`, `TablePagination`, `TableRow` and `TableSortLabel`

#### Usage

```tsx
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableHead>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Calories
              </TableCell>
              <TableCell>
                FAat
              </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index} id={`${index}`}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
```

#### Table Props

**Props of the `TableElement` component are also available.**

##### - children: ReactNode

##### - className?: string

##### - component?: ElementType

##### - padding?: 'checkbox' | 'none' | 'normal'. Default: 'normal'

##### - size?: 'medium' | 'small'. Default: 'medium'

##### - stickyHeader?: boolean

#### TableBody Props

**Props of the `TableSectionElement` component are also available.**

##### - children?: ReactNode

##### - className?: string

##### - component?: ElementType

#### TableCell Props

**Props of the `TableCellElement` component are also available.**

#### - children?: ReactNode

#### - align?: 'center' | 'justify' | 'left' | 'right'. Default: 'left'

#### - className?: string

#### - component?: ElementType

#### - padding?: 'checkbox' | 'none' | 'normal'. Default: 'normal'

#### - size?: 'medium' | 'small'. Default: 'medium'

#### - variant?: 'body' | 'footer' | 'head'. Default: 'body'

#### TableContainer Props

**Props of the `DivElement` component are also available.**

#### - children: ReactNode

#### - component?: ElementType

#### TableFooter Props

**Props of the `TableSectionElement` component are also available.**

#### - children?: ReactNode

#### - className?: string

#### - component?: ElementType

#### TableHead Props

**Props of the `TableSectionElement` component are also available.**

#### - children?: ReactNode

#### - className?: string

#### - component?: ElementType

#### TablePagination Props

**Props of the `TableCellElement` component are also available.**

#### - count: number

#### - rowsPerPage: number

#### - page: number

#### - onPageChange: (event: React.MouseEvent | null, page: number) => void

#### - ActionsComponent?: ElementType

#### - backIconButtonProps?: ButtonPropsForButton

#### - nextIconButtonProps?: ButtonPropsForButton

#### - className?: string

#### - component?: ElementType

#### - labelDisplayedRows?: (from: number, to: number, count: number) => string

#### - labelRowsPerPage?: ReactNode

#### - onRowsPerPageChange?: (finalRows: number) => void

#### - rowsPerPageOptions?: Array<number | { label: string; value: number }>

#### - MenuProps?: { MenuProps?: MenuProps; MenuItemProps?: MenuItemProps }

#### - showFirstButton?: boolean

#### - showLastButton?: boolean

#### TableRow Props

**Props of the `TableRowElement` component are also available.**

#### - children?: ReactNode

#### - className?: string

#### - component?: ElementType

#### - hover?: boolean

#### - selected?: boolean

#### TableSortLabel Props

**Props of the `SpanElement` component are also available.**

#### - children?: ReactNode

#### - active?: boolean

#### - className?: string

#### - direction?: 'asc' | 'desc'. Default: 'asc'

#### - hideSortIcon?: boolean

#### - IconComponent?: ElementType

---

### &lt;TextField />

#### Usage

```tsx
<TextField label="Text here" variant={filled} />
```

#### Props
**Props of the `InputElement` component are also available.**


##### - label?: string

##### - variant?: 'filled' | 'outlined' | 'standard'. Default: 'standard'

##### - classes?: {labelClassName?: string, inputContainerClassName?: string, inputClassName?: string}

##### - onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void

##### - id?: string

##### - type?: HTMLInputTypeAttribute. Default: 'text'

##### - value?: string | ReadonlyArray<string> | number | undefined

##### - autoFocus?: boolean

##### - defaultValue?: string | number | ReadonlyArray<string> | undefined

##### - disabled?: boolean | undefined

##### - error?: boolean | undefined

##### - color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'. Default: 'primary'

##### - disableUnderline?: boolean | undefined

##### - select?: boolean

##### - children?: ReactNode

##### - readOnly?: boolean

##### - hiddenLabel?: boolean | undefined

##### - inputProps?: InputProps

##### - inputRef?: React.LegacyRef<HTMLInputElement> | undefined

##### - TextAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined

##### - required?: boolean

##### - helperText?: string | undefined

##### - multiLine?: boolean

##### - rows?: number. Default: 1

##### - className?: string

##### - fullWidth?: boolean

##### - size?: 'medium' | 'small'. Default: 'medium'

##### - margin?: 'dense' | 'none' | 'normal'. Default: 'none'

##### - name?: string

##### - placeholder?: string

---

### &lt;Tooltip />

#### Usage

```tsx
<Tooltip title="Tooltip content">
  <div>
    <p>Hi</p>
  </div>
</Tooltip>
```

#### Props
**Props of the `PopoverElement` component are also available.**


##### - children: ReactNode

##### - title?: ReactNode

##### - placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'

##### - open?: boolean

##### - disableTransition?: boolean

##### - arrow?: boolean

##### - followCursor?: boolean

##### - classes?: { arrow?: string, tooltip?: string, popover?: string}

##### - components?: {Arrow?: ElementType, Popper?: ElementType, Tooltip?: ElementType}

##### - componentsProps?: {arrow?: object, popper?: object, tooltip?: object}

##### - disableFocusListener?: boolean

##### - disableHoverListener?: boolean

##### - disableTouchListener?: boolean

##### - enterDelay?: number. Default: 100

##### - enterNextDelay?: number. Default: 0

##### - enterTouchDelay?: number. Default: 700

##### - id?: string

##### - leaveDelay?: number. Default: 0

##### - onClose?: (ev: FocusEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void

##### - onOpen?: (ev: FocusEvent<HTMLDivElement> | MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void

##### - className?: string

---

### &lt;Option />

#### Usage

```tsx
 {options.map((option, index) => (
            <Option
              onClick={() => handleOptionClick(option.value)}
              value={option.value}
              key={index}
            >
              {option.value}
            </Option>
```

#### Props
**Props of the `DivElement` component are also available.**


##### - children?: ReactNode

##### - className?: string

##### - onClick?: (ev: MouseEvent<HTMLDivElement>) => void

##### - value: string
