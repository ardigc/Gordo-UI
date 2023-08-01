import { DetailedHTMLProps, TdHTMLAttributes, useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '../components/icons/StarIcon'

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps {}
export default function TablePagination({}: TablePaginationProps) {
  const [open, setOpen] = useState(false)
  const onClickHandler = () => {
    setOpen(!open)
  }
  return (
    <td className="p-0" colSpan={1000}>
      <div className="flex relative items-center pl-6 pr-1 justify-end">
        <p className="my-4">Rows per page:</p>
        <div
          className="inline-flex ml-2 mr-8 items-center relative cursor-pointer"
          onClick={onClickHandler}
        >
          <div className="overflow-hidden overflow-ellipsis block pl-2 pr-6 pt-1 pb-[5px] min-w-[16px] box-content  min-h-[20.125px] "></div>
          <input className="b-0 l-0 absolute w-full opacity-0 pointer-events-none"></input>
          <div className="absolute w-6 h-6 right-0 flex justify-center items-center ">
            {!open ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </div>
        <p>
          {'1'}-{'5'} of {'15'}
        </p>
      </div>
    </td>
  )
}
