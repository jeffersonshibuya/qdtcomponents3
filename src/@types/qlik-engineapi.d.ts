declare namespace EngineAPI {
  export interface IGenericObject {
    getLayout(): Promise<IGenericObjectLayout>;
  }

  interface IGenericObjectLayout extends IGenericBaseLayout {
    cells: Array<Cells>;
    columns: number;
    rows: number;
  }

  interface IGenericBaseLayout {
    cells: Array<Cells>;
    columns: number;
    rows: number;
  }

  export interface INxMeta {
    title: string;
  }

  interface Cells {
    bounds: Array<Bounds>;
    col: number;
    colspan: number;
    name: string;
    row: number;
    rowspan: number;
    type: string;
  }

  interface Bounds {
    height: DoubleRange;
    width: DoubleRange;
    x: number;
    y: number;
  }
}
