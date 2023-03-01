import { createEffect, createResource, For, Show } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import { createClient } from "contentful";
import SectionComponent from "~/components/Section";
import { filter, sortBy } from "lodash";
import Menu from "~/components/Menu";
import { Section } from "~/types";

const client = createClient({
  space: "nslgdnzpa24d",
  accessToken: "-YD620bRfsUnApfr8fO4xG-v_H4iz5cpmmerqFBBUEQ",
});

export function routeData() {
  const [data, refetch] = createResource(async () => {
    const entries = await client.getEntries();
    return entries.items as any[];
  });
  return data;
}

export default function Home() {
  const data = useRouteData<typeof routeData>();

  const items = data();

  const sections = () =>
    items.filter((i) => i.sys.contentType.sys.id === "section");

  const events = () =>
    items.filter((i) => i.sys.contentType.sys.id === "event");

  const sortedSections = () => sortBy(sections(), "fields.order");

  return (
    <Show when={!data.loading} fallback="loading">
      <Menu sections={sortedSections()}></Menu>
      <main>
        <For each={sortedSections()}>
          {(s) => <SectionComponent fields={s.fields} />}
        </For>
      </main>
    </Show>
  );
}
