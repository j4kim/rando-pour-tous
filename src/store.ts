import { sortBy } from "lodash";
import { createSignal } from "solid-js";

export const [items, setItems] = createSignal([]);

export const sections = () =>
  items().filter((i) => i.sys.contentType.sys.id === "section");

export const events = () =>
  items().filter((i) => i.sys.contentType.sys.id === "event");

export const sortedSections = () => sortBy(sections(), "fields.order");
