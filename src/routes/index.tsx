import { createEffect, createResource, For, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createClient } from "contentful";
import SectionComponent from "~/components/Section";
import Menu from "~/components/Menu";
import { setItems, sortedSections } from "~/store";

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

  data();

  createEffect(() => setItems(data()));

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
