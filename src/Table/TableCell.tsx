import classNames from "classnames";
import { DetailedHTMLProps, ReactNode, TdHTMLAttributes } from "react";

type TableReactProps= DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>,HTMLTableCellElement>
export interface TableCellProps extends TableReactProps{
children:ReactNode
}
export default function TableCell({children,...rest}:TableCellProps) {
    return (
        <td className={classNames('font-base text-base font-normal')} {...rest}>
 {children}
        </td>
    )
}