import { AnchorHTMLAttributes } from 'react'
import { ButtonHTMLAttributes } from 'react'
import { ChangeEvent } from 'react'
import { Context } from 'react'
import { DetailedHTMLProps } from 'react'
import { Dispatch } from 'react'
import { ElementType } from 'react'
import { FocusEvent as FocusEvent_2 } from 'react'
import { FormEvent } from 'react'
import { FormHTMLAttributes } from 'react'
import { HTMLAttributes } from 'react'
import { HTMLInputTypeAttribute } from 'react'
import { InputHTMLAttributes } from 'react'
import { JSX as JSX_2 } from 'react/jsx-runtime'
import { JSXElementConstructor } from 'react'
import { KeyboardEvent as KeyboardEvent_2 } from 'react'
import { LabelHTMLAttributes } from 'react'
import { LiHTMLAttributes } from 'react'
import { MouseEvent as MouseEvent_2 } from 'react'
import { default as React_2 } from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { SetStateAction } from 'react'
import { TableHTMLAttributes } from 'react'
import { TdHTMLAttributes } from 'react'
import { TouchEvent as TouchEvent_2 } from 'react'

export declare function Alert({
  children,
  severity,
  action,
  onClose,
  variant,
  className,
  classes,
  closeText,
  icon,
  iconMapping,
  slots,
  slotProps,
  ...rest
}: AlertProps): JSX_2.Element

export declare interface AlertProps
  extends Omit<PaperProps, 'children' | 'variant'> {
  children?: ReactNode
  severity?: 'error' | 'info' | 'success' | 'warning'
  action?: ReactNode
  onClose?: (ev: MouseEvent_2<HTMLButtonElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  className?: string
  classes?: {
    Paper?: string
    IconComponent?: string
    ChildrenComponent?: string
  }
  closeText?: string
  icon?: ReactNode
  iconMapping?: {
    error?: ReactNode
    info?: ReactNode
    success?: ReactNode
    warning?: ReactNode
  }
  slots?: {
    closeButton?: ElementType
    closeIcon?: ElementType
  }
  slotProps?: {
    closeButton?: object
    closeIcon?: object
  }
}

export declare function AlertTitle({
  children,
  className,
  ...rest
}: AlertTitleProps): JSX_2.Element

export declare interface AlertTitleProps extends DivReactProps {
  children: ReactNode
  className?: string
}

declare type AnchorReactProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

declare type AnchorReactProps_2 = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export declare function ArrowDown(): JSX_2.Element

export declare function ArrowDownIcon(): JSX_2.Element

export declare function ArrowUp(): JSX_2.Element

export declare function ArrowUpIcon(): JSX_2.Element

export declare function Button({
  children,
  variant,
  onClick,
  color,
  disabled,
  href,
  disableElevation,
  disableRipple,
  size,
  startIcon,
  endIcon,
  className,
  classes,
  component,
  fullWidth,
  id,
  ...rest
}: ButtonPropsForAnchor | ButtonPropsForButton): JSX_2.Element

export declare interface ButtonPropsForAnchor
  extends CommonProps,
    Omit<AnchorReactProps, 'color'> {
  href: string
  onClick?: (ev: MouseEvent_2<HTMLAnchorElement>) => void
}

declare interface ButtonPropsForAnchor_2
  extends CommonProps_2,
    AnchorReactProps_2 {
  href: string
  onClick?: (ev: MouseEvent_2<HTMLAnchorElement>) => void
}

export declare interface ButtonPropsForButton
  extends CommonProps,
    Omit<ButtonReactProps, 'color'> {
  onClick?: (ev: MouseEvent_2<HTMLButtonElement>) => void
  href?: undefined
}

declare interface ButtonPropsForButton_2
  extends CommonProps_2,
    ButtonReactProps_2 {
  onClick?: (ev: MouseEvent_2<HTMLButtonElement>) => void
  href?: undefined
}

declare type ButtonReactProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

declare type ButtonReactProps_2 = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export declare function ClickAway({
  onClickaway,
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  onClickaway: (event: MouseEvent | TouchEvent) => void
}): JSX_2.Element

export declare function Collapse({
  children,
  open,
  className,
  collapsedSize,
  component,
  easing,
  timeout,
  ...rest
}: CollapseProps): JSX_2.Element

export declare interface CollapseProps extends DivReactProps_2 {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  open?: boolean
  className?: string
  collapsedSize?: number | string
  component?: ElementType
  easing?: 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
  timeout?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000
}

declare interface CommonProps {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'inherit'
  disabled?: boolean
  disableElevation?: boolean
  disableRipple?: boolean
  size?: 'small' | 'medium' | 'large'
  startIcon?: ReactNode
  endIcon?: ReactNode
  className?: string
  classes?: {
    buttonClassName?: string
    rippleSpanClassName?: string
  }
  component?: ElementType
  fullWidth?: boolean
  id?: string
}

declare interface CommonProps_2 {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  disableRipple?: boolean
  classes?: {
    buttonClassName?: string
    rippleSpanClassName?: string
  }
  disabled?: boolean
  edge?: 'end' | 'start' | false
  className?: string
}

declare type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

declare type DivReactProps_2 = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

declare type DivReactProps_3 = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

declare type DivReactProps_4 = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

declare type DivReactProps_5 = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export declare function ErrorIcon(): JSX_2.Element

export declare function FirstPageIcon(): JSX_2.Element

export declare function FirstPageIconDis(): JSX_2.Element

export declare function FormControl({
  children,
  onSubmit,
  variant,
  margin,
  fullWidth,
  className,
  component,
  disabled,
  error,
  color,
  focused,
  hiddenLabel,
  required,
  ...rest
}: FormControlProps): JSX_2.Element

export declare const FormControlContext: Context<FormControlContextType>

export declare type FormControlContextType = {
  contextVariant?: 'filled' | 'outlined' | 'standard'
  contextTouched?: boolean
  setLabel?: Dispatch<SetStateAction<ReactNode>>
  contextLabel?: ReactNode
  contextValue?: string | ReadonlyArray<string> | number | undefined
  setContextValue?: Dispatch<
    SetStateAction<string | ReadonlyArray<string> | number | undefined>
  >
  contextColor?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
  contextDisabled?: boolean
  focused?: boolean
  hiddenLabel?: boolean
  contextRequired?: boolean
}

export declare interface FormControlProps extends formReactProps {
  children?: ReactNode
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  margin?: 'dense' | 'none' | 'normal'
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  component?: ElementType
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  error?: boolean
  focused?: boolean
  hiddenLabel?: boolean
  required?: boolean
}

export declare function FormHelper({
  children,
  className,
  component,
  componentProps,
  disabled,
  error,
  margin,
  id,
  ...rest
}: FormHelperProps): JSX_2.Element

export declare interface FormHelperProps extends paragraphReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
  componentProps?: React.HTMLAttributes<HTMLElement>
  disabled?: boolean
  error?: boolean
  margin?: 'dense' | 'none'
  id?: string
}

declare type formReactProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

export declare function IconButton({
  children,
  size,
  onClick,
  href,
  disableRipple,
  disabled,
  edge,
  className,
  classes,
  ...rest
}: ButtonPropsForAnchor_2 | ButtonPropsForButton_2): JSX_2.Element

export declare function InfoIcon(): JSX_2.Element

export declare function Input({
  autocomplete,
  autoFocus,
  id,
  error,
  color,
  classes,
  components,
  componentsProps,
  defaultValue,
  disabled,
  disaledUndeline,
  endAdornment,
  inputComponent,
  inputProps,
  fullWidth,
  margin,
  multiline,
  inputRef,
  multilineTextAreaRef,
  rows,
  startAdornment,
  name,
  value,
  placeholder,
  readonly,
  required,
  type,
  shrink,
  onChange,
  onFocus,
  className,
  variant,
  size,
  label,
  ...rest
}: InputProps): JSX_2.Element

export declare type InputContextType = {
  option?: string | ReadonlyArray<string> | number | undefined
  setValue?: Dispatch<
    SetStateAction<string | ReadonlyArray<string> | number | undefined>
  >
  handleOptionClick?: (option: string) => void
  setOpened?: Dispatch<SetStateAction<boolean>>
}

export declare function InputLabel({
  children,
  htmlFor,
  className,
  disableAnimation,
  shrink,
  error,
  color,
  labelProps,
  disabled,
  margin,
  size,
  variant,
  ...rest
}: InputLabelProps): JSX_2.Element

export declare interface InputLabelProps extends labelReactProps {
  children?: ReactNode
  className?: string
  htmlFor?: string
  disableAnimation?: boolean
  shrink?: boolean
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
  disabled?: boolean
  error?: boolean
  size?: 'medium' | 'small'
  margin?: 'dense' | 'none'
  variant?: 'filled' | 'outlined' | 'standard'
}

export declare interface InputProps extends Omit<InputReactProps, 'size'> {
  autocomplete?: string
  id?: string
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  autoFocus?: boolean
  className?: string
  classes?: {
    constainerClassName?: string
    inputClassName?: string
  }
  components?: {
    Input?: ElementType
    Container?: ElementType
  }
  componentsProps?: {
    container?: React_2.HTMLAttributes<HTMLElement>
    input?: React_2.InputHTMLAttributes<HTMLInputElement>
  }
  defaultValue?: string | number | ReadonlyArray<string> | undefined
  disabled?: boolean
  disaledUndeline?: boolean
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  error?: boolean
  inputComponent?: ElementType
  inputProps?: object
  fullWidth?: boolean
  inputRef?: React_2.LegacyRef<HTMLInputElement> | undefined
  margin?: 'dense' | 'none'
  multiline?: boolean
  multilineTextAreaRef?: React_2.LegacyRef<HTMLTextAreaElement> | undefined
  rows?: number | string
  name?: string
  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: () => void
  value?: string | ReadonlyArray<string> | number | undefined
  placeholder?: string | undefined
  readonly?: boolean
  required?: boolean
  type?: HTMLInputTypeAttribute
  label?: string | ReactNode
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'medium' | 'small'
  shrink?: boolean
}

declare type InputReactProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

declare type InputReactProps_2 = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

declare type labelReactProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>

export declare function LastPageIcon(): JSX_2.Element

export declare function LastPageIconDis(): JSX_2.Element

export declare const leftMargin: (
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) => 0 | -14

declare type LiReactProps = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>

export declare function Menu({
  children,
  open,
  onClose,
  classes,
  MenuListProps,
  PopoverClasses,
  ...rest
}: MenuProps): JSX_2.Element

export declare function MenuItem({
  children,
  className,
  component,
  dense,
  disableGutters,
  divider,
  onClick,
  selected,
  ...rest
}: MenuItemProps): JSX_2.Element

export declare interface MenuItemProps extends LiReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
  dense?: boolean
  disableGutters?: boolean
  divider?: boolean
  onClick?: (ev: MouseEvent_2<HTMLLIElement>) => void
  selected?: boolean
}

export declare function MenuList({
  children,
  ...rest
}: MenuListProps): JSX_2.Element

export declare interface MenuListProps extends UlReactProps {
  children: ReactNode
}

export declare interface MenuProps extends Omit<PopoverProps, 'classes'> {
  children?: ReactNode
  open: boolean
  onClose?: () => void
  classes?: {
    Popover?: string
    MenuList?: string
  }
  MenuListProps?: MenuListProps
  PopoverClasses?: {
    root?: string
    paper?: string
  }
}

export declare function NextPageIcon(): JSX_2.Element

export declare function NextPageIconDis(): JSX_2.Element

declare function Option_2({
  children,
  className,
  onClick,
  value,
  ...rest
}: OptionProps): JSX_2.Element
export { Option_2 as Option }

export declare interface OptionProps extends DivReactProps_3 {
  children?: ReactNode
  className?: string
  onClick?: (ev: MouseEvent_2<HTMLDivElement>) => void
  value: string
}

export declare function Paper({
  children,
  className,
  component,
  elevation,
  square,
  variant,
  ...rest
}: PaperProps): JSX_2.Element

export declare interface PaperProps extends PaperReactProps {
  children: ReactNode
  className?: string
  component?: ElementType
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
  square?: boolean
  variant?: 'elevation' | 'outlined'
}

declare type PaperReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

declare type paragraphReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export declare function Popover({
  children,
  open,
  onClose,
  anchorReference,
  anchorEl,
  anchorOrigin,
  transformOrigin,
  anchorPosition,
  className,
  container,
  elevation,
  components,
  marginThreshold,
  componentProps,
  id,
  disableTransition,
  classes,
  ...rest
}: PopoverProps): JSX_2.Element

export declare interface PopoverProps extends PopoverReactProps {
  children?: ReactNode
  open: boolean
  onClose?: () => void
  anchorReference?: 'anchorEl' | 'anchorPosition'
  anchorEl?: Element | (() => Element)
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  anchorPosition?: {
    left?: number
    top?: number
  }
  className?: string
  container?: Element | (() => Element)
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
  marginThreshold?: number
  componentProps?: {
    paper?: Omit<PaperProps, 'children'>
    root?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  }
  components?: {
    paper?: ElementType
    root?: ElementType
  }
  id?: string
  disableTransition?: boolean
  classes?: {
    root?: string
    paper?: string
  }
}

declare type PopoverReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export declare function PrevPageIcon(): JSX_2.Element

export declare function PrevPageIconDis(): JSX_2.Element

export declare function RenderComponent({
  children,
  className,
  marginThreshold,
  anchorEl,
  anchorPosition,
  transformOrigin,
  anchorReference,
  anchorOrigin,
  components,
  ...rest
}: RenderComponentProps): JSX_2.Element

export declare interface RenderComponentProps extends DivReactProps_4 {
  children: ReactNode
  className: string
  marginThreshold: number
  anchorEl?: Element | (() => Element)
  anchorPosition?: {
    left?: number
    top?: number
  }
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  anchorReference: 'anchorEl' | 'anchorPosition'
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  components?: {
    paper?: ElementType
    root?: ElementType
  }
}

export declare const setPopoverPosition: (
  anchorReference: 'anchorEl' | 'anchorPosition',
  marginThreshold: number,
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  anchorPosition?: {
    left?: number
    top?: number
  },
  location?: DOMRect,
  popoverSize?: {
    height: number
    width: number
  },
  mouseMove?: {
    x: number
    y: number
  },
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) =>
  | {
      top: number | undefined
      left: number | undefined
    }
  | undefined

export declare function SnackBar({
  children,
  message,
  open,
  action,
  onClose,
  autoHideDuration,
  anchorOrigin,
  transition,
  className,
  ContentProps,
  disableWindowBlurListener,
  key,
  resumeHideDuration,
  ...rest
}: SnackBarProps): JSX_2.Element

export declare interface SnackBarProps extends DivReactProps_5 {
  children?: ReactNode
  message?: ReactNode
  open?: boolean
  action?: ReactNode
  onClose?: (ev: Event | KeyboardEvent_2 | null, reason: string) => void
  autoHideDuration?: number
  anchorOrigin?: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'top'
  }
  className?: string
  ContentProps?: PaperProps
  disableWindowBlurListener?: boolean
  key?: any
  resumeHideDuration?: number
  transition?:
    | 'fade'
    | 'grown'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
}

export declare function StarIcon(): JSX_2.Element

export declare function StarIconFilled(): JSX_2.Element

export declare function SuccessIcon(): JSX_2.Element

export declare function Table({
  children,
  className,
  component,
  padding,
  size,
  stickyHeader,
  ...rest
}: TableProps): JSX_2.Element

export declare function TableBody({
  children,
  className,
  component,
  ...rest
}: TableBodyProps): JSX_2.Element

export declare interface TableBodyProps extends TableBodyReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
}

declare type TableBodyReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export declare function TableCell({
  children,
  align,
  className,
  component,
  padding,
  size,
  variant,
  ...rest
}: TableCellProps): JSX_2.Element

export declare interface TableCellProps extends TableCellReactProps {
  children?: ReactNode
  align?: 'center' | 'justify' | 'left' | 'right'
  className?: string
  component?: ElementType
  padding?: 'checkbox' | 'none' | 'normal'
  size?: 'medium' | 'small'
  variant?: 'body' | 'footer' | 'head'
}

declare type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>

export declare function TableContainer({
  children,
  component,
  ...rest
}: TableContainerProps): JSX_2.Element

export declare interface TableContainerProps extends TableContainerReactProps {
  children: ReactNode
  component?: ElementType
}

declare type TableContainerReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export declare const TableContext: Context<TableContextType>

export declare type TableContextType = {
  contextPadding?: 'checkbox' | 'none' | 'normal'
  contextSize?: 'medium' | 'small'
  contextSticky?: boolean
}

export declare function TableFooter({
  children,
  className,
  component,
  ...rest
}: TableFooterProps): JSX_2.Element

export declare interface TableFooterProps extends TableFooterReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
}

declare type TableFooterReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export declare function TableHead({
  children,
  className,
  component,
  ...rest
}: TableHeadProps): JSX_2.Element

export declare const TableHeadContext: Context<TableHeadContextType>

export declare type TableHeadContextType = {
  head?: boolean
}

export declare interface TableHeadProps extends TableHeadReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
}

declare type TableHeadReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export declare interface TableProps extends TableReactPops {
  children: ReactNode
  className?: string
  component?: ElementType
  padding?: 'checkbox' | 'none' | 'normal'
  size?: 'medium' | 'small'
  stickyHeader?: boolean
}

declare type TableReactPops = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>

export declare function TextField({
  label,
  variant,
  error,
  color,
  defaultValue,
  disabled,
  inputRef,
  autoFocus,
  id,
  value,
  rows,
  select,
  required,
  type,
  classes,
  onChange,
  disableUnderline,
  multiLine,
  TextAreaRef,
  children,
  readOnly,
  hiddenLabel,
  inputProps,
  helperText,
  className,
  fullWidth,
  size,
  margin,
  name,
  placeholder,
  ...rest
}: TextFieldProps): JSX_2.Element

export declare const TextFieldContext: Context<InputContextType>

export declare interface TextFieldProps
  extends Omit<InputReactProps_2, 'size' | 'onFocus'> {
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  classes?: {
    labelClassName?: string
    inputContainerClassName?: string
    inputClassName?: string
  }
  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  id?: string
  type?: HTMLInputTypeAttribute
  value?: string | ReadonlyArray<string> | number | undefined
  autoFocus?: boolean
  defaultValue?: string | number | ReadonlyArray<string> | undefined
  disabled?: boolean | undefined
  error?: boolean | undefined
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  disableUnderline?: boolean | undefined
  select?: boolean
  children?: ReactNode
  readOnly?: boolean
  hiddenLabel?: boolean | undefined
  inputProps?: InputProps
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined
  TextAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined
  required?: boolean
  helperText?: string | undefined
  multiLine?: boolean
  rows?: number
  className?: string
  fullWidth?: boolean
  size?: 'medium' | 'small'
  margin?: 'dense' | 'none' | 'normal'
  name?: string
  placeholder?: string
}

export declare function Tooltip({
  children,
  title,
  placement,
  open,
  disableTransition,
  arrow,
  followCursor,
  classes,
  components,
  componentsProps,
  disableFocusListener,
  disableHoverListener,
  disableTouchListener,
  enterDelay,
  enterNextDelay,
  enterTouchDelay,
  id,
  leaveDelay,
  onClose,
  onOpen,
  className,
  ...rest
}: TooltipProps): JSX_2.Element

export declare const TooltipContext: Context<{
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start'
    | undefined
  mouseMove?:
    | {
        x: number
        y: number
      }
    | undefined
}>

export declare interface TooltipProps
  extends Omit<
    PopoverProps,
    'open' | 'onClose' | 'components' | 'classes' | 'title'
  > {
  children: ReactNode
  title?: ReactNode
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
  open?: boolean
  disableTransition?: boolean
  arrow?: boolean
  followCursor?: boolean
  classes?: {
    arrow?: string
    tooltip?: string
    popover?: string
  }
  components?: {
    Arrow?: ElementType
    Popper?: ElementType
    Tooltip?: ElementType
  }
  componentsProps?: {
    arrow?: object
    popper?: object
    tooltip?: object
  }
  disableFocusListener?: boolean
  disableHoverListener?: boolean
  disableTouchListener?: boolean
  enterDelay?: number
  enterNextDelay?: number
  enterTouchDelay?: number
  id?: string
  leaveDelay?: number
  onClose?: (
    ev: FocusEvent_2<HTMLDivElement> | MouseEvent_2<HTMLDivElement>
  ) => void
  onOpen?: (
    ev:
      | FocusEvent_2<HTMLDivElement>
      | MouseEvent_2<HTMLDivElement>
      | TouchEvent_2<HTMLDivElement>
  ) => void
  className?: string
}

export declare const topMargin: (
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) => 0 | -14

declare type UlReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>

export declare function WarningIcon(): JSX_2.Element

export declare function XIcon(): JSX_2.Element

export {}
