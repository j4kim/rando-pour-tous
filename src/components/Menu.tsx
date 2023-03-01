import { For } from "solid-js";
import { MenuProps } from "~/types";

export default function (props: MenuProps) {
  const sections = props.sections;
  return (
    <nav>
      <ul>
        <For each={sections}>{(s) => <li>{s.fields.title}</li>}</For>
      </ul>
    </nav>
  );
}
