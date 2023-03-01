import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { getColor } from "~/theme";
import Calendar from "./Calendar";
import Gallery from "./Gallery";
import "./Section.scss";

export default function ({ fields }) {
  const components = {
    calendar: Calendar,
    gallery: Gallery,
  };

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
      <Dynamic component={components[fields.type]} />
    </article>
  );
}
