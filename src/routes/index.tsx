import { createEffect, createResource, For, onMount, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createClient } from "contentful";
import SectionComponent from "~/components/Section";
import Menu from "~/components/Menu";
import { setData, sortedSections } from "~/store";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
});

export function routeData() {
  const [data, refetch] = createResource(async () => {
    const [entries, assets] = await Promise.all([
      client.getEntries(),
      client.getAssets(),
    ]);
    return { entries, assets };
  });
  return data;
}

export default function Home() {
  const data = useRouteData<typeof routeData>();

  data();

  createEffect(() => setData(data()));

  onMount(() => {
    const hash = location.hash
    if (!hash) return
    setTimeout(() => {
      location.hash = ''
      location.hash = hash
    }, 100)
  })

  return (
    <Show when={!data.loading} fallback="loading">
      <Menu />
      <main>
        <For each={sortedSections()}>
          {(s) => <SectionComponent fields={s.fields} />}
        </For>
      </main>
    </Show>
  );
}
