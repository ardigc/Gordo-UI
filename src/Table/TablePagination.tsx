import { DetailedHTMLProps, TdHTMLAttributes } from "react";
import TableCell from "./TableCell";

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps{

}
export default function TablePagination({}:TablePaginationProps) {
    return (<TableCell className="p-0" colSpan={1000}>
        <div className="flex relative items-center pl-6 pr-1"><p className="my-4">Rows per page:</p></div>
        </TableCell>)
}