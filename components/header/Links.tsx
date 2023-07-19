import { useId } from "preact/hooks";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";

export interface Props {
  links: INavItem[];
}

function Links({ links = [] }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <div class="flex-auto flex justify-end border-base-200 w-full">
        {links.map((item) => <NavItem item={item} />)}
      </div>
    </div>
  );
}

export default Links;
