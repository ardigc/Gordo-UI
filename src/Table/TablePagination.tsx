import { DetailedHTMLProps, TdHTMLAttributes } from 'react'
import TableCell from './TableCell'

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps {}
export default function TablePagination({}: TablePaginationProps) {
  return (
    <td className="p-0" colSpan={1000}>
      <div className="flex relative items-center pl-6 pr-1 justify-end">
        <p className="my-4">Rows per page:</p>
        <div className="inline-flex ml-2 mr-8 items-center relative cursor-pointer">
          <div className="overflow-hidden overflow-ellipsis block pl-2 pr-6 pt-1 pb-[5px] min-w-[16px]  min-h-[1.4375em] "></div>
          <input className="b-0 l-0 absolute w-full opacity-0 pointer-events-none"></input>
        </div>
      </div>
    </td>
  )
}
