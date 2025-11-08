export interface IHeadingContext {
  selectedHeading: SelectedHeading;
  setSelectedHeading: (selectedHeading: SelectedHeading) => void;
}

export type SelectedHeading = { id: string; level: number } | null;

