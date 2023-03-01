import { sortBy } from "lodash";
import { createEffect, createSignal } from "solid-js";

export const [data, setData] = createSignal({ entries: [], assets: [] });

export const entries = () => data().entries.items ?? [];

createEffect(() => console.log("entries", entries()));

export const assets = () => data().assets.items ?? [];

createEffect(() => console.log("assets", assets()));

export const sections = () =>
  entries().filter((i) => i.sys.contentType.sys.id === "section");

export const sortedSections = () => sortBy(sections(), "fields.order");

createEffect(() => console.log("sortedSections", sortedSections()));

export const events = () =>
  entries().filter((i) => i.sys.contentType.sys.id === "event");
