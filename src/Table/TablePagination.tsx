import {
  DetailedHTMLProps,
  ElementType,
  MouseEventHandler,
  TdHTMLAttributes,
  useState,
  ReactNode,
} from 'react'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  FirstPageIcon,
  FirstPageIconDis,
  LastPageIcon,
  LastPageIconDis,
  NextPageIcon,
  NextPageIconDis,
  PrevPageIcon,
  PrevPageIconDis,
} from '../components/icons/Icons'
import { IconButton } from '../Button/IconButton'
import { ButtonPropsForButton } from '../Button/Button'

import classNames from 'classnames'
import { Menu, MenuProps } from '../Menu/Menu'
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem'

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps {
  count: number
  rowsPerPage: number
  page: number
  onPageChange: (event: React.MouseEvent | null, page: number) => void
  ActionsComponent?: ElementType
  backIconButtonProps?: ButtonPropsForButton
  nextIconButtonProps?: ButtonPropsForButton
  className?: string
  component?: ElementType
  labelDisplayedRows?: (from: number, to: number, count: number) => string
  labelRowsPerPage?: ReactNode
  onRowsPerPageChange?: (finalRows: number) => void
  rowsPerPageOptions?: Array<number | { label: string; value: number }>
  MenuProps?: { MenuProps?: MenuProps; MenuItemProps?: MenuItemProps }
  showFirstButton?: boolean
  showLastButton?: boolean
}
export function TablePagination({
  count,
  rowsPerPage,
  page,
  onPageChange,
  ActionsComponent,
  backIconButtonProps,
  nextIconButtonProps,
  className,
  component,
  labelDisplayedRows,
  labelRowsPerPage,
  onRowsPerPageChange,
  rowsPerPageOptions,
  MenuProps,
  showFirstButton,
  showLastButton,
}: TablePaginationProps) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const [finalRowsPerPage, setFinalRowPerPage] = useState(rowsPerPage)
  // const [actualPage, setActualPage] = useState({
  //   iniPag: 1,
  //   finPag: finalRowsPerPage,
  // })
  const RenderComponent = component ? component : 'td'
  function defaultLabelDisplayedRows({
    from,
    to,
    count,
  }: {
    from: number
    to: number
    count: number
  }) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`
  }
  const arrayRowPerPage = rowsPerPageOptions
    ? rowsPerPageOptions
    : [10, 25, 50, 100]
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(!open)
  }

  const onSelectRow = (item: number) => {
    setFinalRowPerPage(item)
    if (!onRowsPerPageChange) return
    onRowsPerPageChange(item)
  }
  const onCloseHandler = () => {
    setOpen(false)
  }
  const onFirstClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    onPageChange(ev, 0)
  }
  const onLastClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    const lastPage = Math.floor(count / finalRowsPerPage)
    onPageChange(ev, lastPage)
  }
  const onPrevClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    onPageChange(ev, page - 1)
  }
  const onNextClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    onPageChange(ev, page + 1)
  }
  const setPage = () => {
    const iniPag = Math.max(1, Math.min(count, 1 + page * finalRowsPerPage))

    const finPag =
      finalRowsPerPage === -1
        ? count
        : count === -1
        ? finalRowsPerPage + finalRowsPerPage * page
        : Math.max(
            finalRowsPerPage,
            Math.min(count, finalRowsPerPage + finalRowsPerPage * page)
          )
    return { iniPag: iniPag, finPag: finPag }
  }
  return (
    <RenderComponent
      className={classNames('p-0', { [className || '']: className })}
      colSpan={1000}
    >
      <div
        className={classNames(
          'flex relative items-center pl-6 pr-1 justify-end'
          // { [className || '']: className }
        )}
      >
        {labelRowsPerPage ? (
          labelRowsPerPage
        ) : (
          <p className="my-4 font-base text-base font-normal">Rows per page:</p>
        )}
        <div
          className="inline-flex ml-2 mr-8 items-center relative cursor-pointer"
          onClick={onClickHandler}
        >
          <div className="overflow-hidden overflow-ellipsis block pl-2 pr-6 pt-1 pb-[5px] min-w-[16px] box-content  min-h-[20.125px] ">
            {finalRowsPerPage === -1 ? 'All' : finalRowsPerPage}
          </div>
          <input
            className="b-0 l-0 absolute w-full opacity-0 pointer-events-none"
            value={finalRowsPerPage}
          ></input>
          <div className="absolute w-6 h-6 right-0 flex justify-center items-center ">
            {!open ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </div>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={onCloseHandler}
          {...MenuProps?.MenuProps}
        >
          {arrayRowPerPage.map((item) => {
            if (typeof item === 'number') {
              return (
                <MenuItem
                  onClick={() => {
                    onCloseHandler(), onSelectRow(item)
                  }}
                  {...MenuProps?.MenuItemProps}
                >
                  {item}
                </MenuItem>
              )
            } else {
              return (
                <MenuItem
                  onClick={() => {
                    onCloseHandler(), onSelectRow(item.value)
                  }}
                  {...MenuProps?.MenuItemProps}
                >
                  {item.label}
                </MenuItem>
              )
            }
          })}
        </Menu>
        <p className="font-base text-base font-normal">
          {labelDisplayedRows
            ? labelDisplayedRows(setPage().iniPag, setPage().finPag, count)
            : defaultLabelDisplayedRows({
                from: setPage().iniPag,
                to: setPage().finPag,
                count,
              })}
        </p>
        {!ActionsComponent && (
          <div>
            {showFirstButton && (
              <>
                {page > 0 ? (
                  <IconButton onClick={onFirstClick}>
                    <FirstPageIcon />
                  </IconButton>
                ) : (
                  <IconButton disabled>
                    <FirstPageIconDis />
                  </IconButton>
                )}
              </>
            )}
            {page > 0 ? (
              <IconButton onClick={onPrevClick} {...backIconButtonProps}>
                <PrevPageIcon />
              </IconButton>
            ) : (
              <IconButton disabled {...backIconButtonProps}>
                <PrevPageIconDis />
              </IconButton>
            )}
            {setPage().finPag !== count ? (
              <IconButton onClick={onNextClick} {...nextIconButtonProps}>
                <NextPageIcon />
              </IconButton>
            ) : (
              <IconButton disabled {...nextIconButtonProps}>
                <NextPageIconDis />
              </IconButton>
            )}
            {showLastButton && (
              <>
                {setPage().finPag !== count ? (
                  <IconButton onClick={onLastClick}>
                    <LastPageIcon />
                  </IconButton>
                ) : (
                  <IconButton disabled>
                    <LastPageIconDis />
                  </IconButton>
                )}
              </>
            )}
          </div>
        )}
        {ActionsComponent && (
          <div className="ml-5 flex-shrink-0">
            <ActionsComponent
              onPageChange={onPageChange}
              count={count}
              finalRowsPerPage={finalRowsPerPage}
              page={page}
            />
          </div>
        )}
      </div>
    </RenderComponent>
  )
}
