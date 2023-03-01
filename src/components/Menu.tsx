import { For } from "solid-js";
import { sortedSections } from "~/store";
import theme from "~/theme";
import "./Menu.scss";

export default function () {
  return (
    <nav style={{ "background-color": theme.green, color: "white" }}>
      <ul>
        <For each={sortedSections()}>
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
