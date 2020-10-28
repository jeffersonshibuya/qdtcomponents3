import React from 'react';
import { IconType } from 'react-icons/lib/esm';

export type sheetData = {
  id: string;
  title: string;
  cells: Array<Cells>;
  columns: number;
  rows: number;
  menuIcon: IconType;
  menuIndex: number;
};

type Cells = {
  bounds: Array<Bounds>;
  col: number;
  colspan: number;
  name: string;
  row: number;
  rowspan: number;
  type: string;
};

type Bounds = {
  height: DoubleRange;
  width: DoubleRange;
  x: number;
  y: number;
};

export type AppGlobalProps = {};

export const SheetContext = React.createContext<sheetData[]>([]);

export const AppContext = React.createContext<AppGlobalProps>(
  {} as AppGlobalProps,
);
