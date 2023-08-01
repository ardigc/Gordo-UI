import { DetailedHTMLProps, TdHTMLAttributes } from "react";

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps{

}
export default function TablePagination({}:TablePaginationProps) {
    return (<div></div>)
}