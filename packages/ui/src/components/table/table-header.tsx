import { jsToCss } from "@insightcreativewebs/utils";
import Nullstack, { BaseNullstackClientContext, NullstackNode } from "nullstack";
import { TableProps } from "./table";

export class TableHeader extends Nullstack {
  render(context: BaseNullstackClientContext & TableProps): NullstackNode {
    const { instance } = context;
    const { columns } = instance;
    return <thead class="">
      <tr>
        {Object.keys(columns).map(columnName => {
          const column = columns[columnName];
          return (
            <th style={jsToCss({
              cursor: column.sort ? 'pointer' : 'default',
              width: column?.width ? column?.width : '1px',
            })}>{columns[columnName].label}</th>
          )
        })}
      </tr>
    </thead>
  }
}