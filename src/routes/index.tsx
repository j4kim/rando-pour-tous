import { For } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import { createClient } from "contentful";

const client = createClient({
  space: "nslgdnzpa24d",
  accessToken: "-YD620bRfsUnApfr8fO4xG-v_H4iz5cpmmerqFBBUEQ",
});

export function routeData() {
  return createRouteData(async () => {
    const entries = await client.getEntries();
    const items = entries.items
    const sections = items.filter(i => i.sys.contentType.sys.id === 'section')
    return sections
  });
}

export default function Home() {
  const sections = useRouteData<typeof routeData>();

  return <main>
    <For each={sections()}>
      {(section) => <p>{JSON.stringify(section.fields)}</p>}
    </For>
  </main>;
}
