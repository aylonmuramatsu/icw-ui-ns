import Nullstack, { NullstackNode } from "nullstack";
import { TableHeader } from "./table-header";
export interface TableColumn {
  label: string
  sort: boolean
  content?: NullstackNode
  width?: string
}
export interface TableProps {
  instance: {
    data: any[],
    columns: { [key: string]: TableColumn }
    loading: boolean
  }
}
export class Table extends Nullstack<TableProps> {
  instance: TableProps['instance'] = {
    data: [],
    columns: {},
    loading: false,
  }

  prepare(context: any) {
    this.instance.columns = context.columns || {};
    this.instance.data = context.data || []


  }
  render(context: any): NullstackNode {

    return (
      <div class="overflow-auto w-full relative " >
        <table class="table">
          <TableHeader instance={this.instance} />
        </table>
      </div>
    )
  }
}