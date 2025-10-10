export interface TabSortProps {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}
