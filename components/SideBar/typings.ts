export type SideBarTabs = "profile" | "docs" | "setting" | "verify";
export interface SideBarProps {
  expand: boolean;
  toggleExpand: () => void;
  selected: SideBarTabs;
}
