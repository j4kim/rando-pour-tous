import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Show } from "solid-js";
import { getColor } from "~/theme";
import "./Section.scss";

export default function ({ fields }) {
  return (
    <article
      id={fields.id}
      style={{
        "background-color": getColor(fields.backgroundColor),
        color: getColor(fields.color),
      }}
    >
      <h1>{fields.title}</h1>
      <Show when={fields.content}>
        <div innerHTML={documentToHtmlString(fields.content)}></div>
      </Show>
    </article>
  );
}
