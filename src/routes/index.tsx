import { createEffect, createResource, For, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createClient } from "contentful";
import SectionComponent from "~/components/Section";
import Menu from "~/components/Menu";
import { setData, sortedSections } from "~/store";

const client = createClient({
  space: "nslgdnzpa24d",
  accessToken: "-YD620bRfsUnApfr8fO4xG-v_H4iz5cpmmerqFBBUEQ",
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
