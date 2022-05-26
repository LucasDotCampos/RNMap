export interface ISector {
  cdSetor: string;
  dsSetor: string;
}

export interface ISectorValue {
  sectors: ISector[];
  setSectors: (state: ISector[]) => void;
}

export interface ICategory {
  idCatPar: string;
  dsCatPar: string;
}

export interface ICategoryValue {
  categories: ICategory[];
  setCategories: (state: ICategory[]) => void;
}

export interface IStopping {
  cdParada: string;
  dsParada: string;
  tipoPar: number;
}

export interface IStoppingValue {
  stopping: IStopping[];
  setStopping: (state: IStopping[]) => void;
}
