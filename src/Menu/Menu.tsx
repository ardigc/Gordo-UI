import { ReactNode } from 'react'
import { Popover, PopoverProps } from '../Popover/Popover'
import { MenuList, MenuListProps } from '../MenuList/MenuList'
import classNames from 'classnames'
export interface MenuProps extends Omit<PopoverProps, 'classes'> {
  children?: ReactNode
  open: boolean
  onClose?: () => void
  classes?: { Popover?: string; MenuList?: string }
  MenuListProps?: MenuListProps
  PopoverClasses?: { root?: string; paper?: string }
}
export function Menu({
  children,
  open,
  onClose,
  classes,
  MenuListProps,
  PopoverClasses,
  ...rest
}: MenuProps) {
  const clickAwayHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <Popover
      classes={PopoverClasses}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      onClose={clickAwayHandler}
      className={classNames('bg-white', {
        [classes?.Popover || '']: classes?.Popover,
      })}
      open={open}
      {...rest}
    >
      <MenuList
        {...MenuListProps}
        className={classNames({ [classes?.MenuList || '']: classes?.MenuList })}
      >
        {children}
      </MenuList>
    </Popover>
  )
}
