import { For } from "solid-js";
import { MenuProps } from "~/types";
import "./Menu.scss";

export default function (props: MenuProps) {
  const sections = props.sections;
  return (
    <nav>
      <ul>
        <For each={sections}>
          {(s) => (
            <li>
              <a href={"#" + s.fields.id}>{s.fields.title}</a>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
