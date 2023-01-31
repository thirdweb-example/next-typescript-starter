export type SideBarTabs = "profile" | "docs" | "setting";
export interface SideBarProps {
  expand: boolean;
  toggleExpand: () => void;
  selected: SideBarTabs;
}
