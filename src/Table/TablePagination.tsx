import { DetailedHTMLProps, TdHTMLAttributes, useState } from 'react'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  NextPageIcon,
  PrevPageIcon,
} from '../components/icons/StarIcon'
import IconButton from '../Button/IconButton'

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps {
  count: number
  rowPerPage: number
  page: number
}
export default function TablePagination({
  count,
  rowPerPage,
  page,
}: TablePaginationProps) {
  const [open, setOpen] = useState(false)
  // const [actualPage, setActualPage] = useState({
  //   iniPag: 1,
  //   finPag: rowPerPage,
  // })
  const onClickHandler = () => {
    setOpen(!open)
  }
  const onPrevClick = () => {}
  const setPage = () => {
    const iniPag = Math.max(0, Math.min(count, 1 + page * rowPerPage))
    const finPag = Math.max(
      rowPerPage,
      Math.min(count, rowPerPage + rowPerPage * page)
    )
    return { iniPag: iniPag, finPag: finPag }
  }
  return (
    <td className="p-0" colSpan={1000}>
      <div className="flex relative items-center pl-6 pr-1 justify-end">
        <p className="my-4 font-base text-base font-normal">Rows per page:</p>
        <div
          className="inline-flex ml-2 mr-8 items-center relative cursor-pointer"
          onClick={onClickHandler}
        >
          <div className="overflow-hidden overflow-ellipsis block pl-2 pr-6 pt-1 pb-[5px] min-w-[16px] box-content  min-h-[20.125px] ">
            {rowPerPage}
          </div>
          <input className="b-0 l-0 absolute w-full opacity-0 pointer-events-none"></input>
          <div className="absolute w-6 h-6 right-0 flex justify-center items-center ">
            {!open ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </div>
        <p className="font-base text-base font-normal">
          {setPage().iniPag}-{setPage().finPag} of {count}
        </p>
        <div className="ml-5 flex-shrink-0">
          <IconButton onClick={onPrevClick}>
            <PrevPageIcon />
          </IconButton>
          <IconButton>
            <NextPageIcon />
          </IconButton>
        </div>
      </div>
    </td>
  )
}
