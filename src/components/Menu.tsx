import { For } from "solid-js";

type Section = {
  fields: {
    title: string;
  };
};

type MenuProps = {
  sections: Section[];
};

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
