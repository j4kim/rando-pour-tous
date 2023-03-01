import { For } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import { createClient } from "contentful";
import SectionComponent from "~/components/Section";
import { sortBy } from "lodash";
import Menu from "~/components/Menu";
import { Section } from "~/types";

const client = createClient({
  space: "nslgdnzpa24d",
  accessToken: "-YD620bRfsUnApfr8fO4xG-v_H4iz5cpmmerqFBBUEQ",
});

export function routeData() {
  return createRouteData(async () => {
    const entries = await client.getEntries();
    const items = entries.items as Section[];
    const sections = items.filter(
      (i) => i.sys.contentType.sys.id === "section"
    );
    return sortBy(sections, "fields.order");
  });
}

export default function Home() {
  const sections = useRouteData<typeof routeData>();

  return (
    <>
      <Menu sections={sections()}></Menu>
      <main>
        <For each={sections()}>
          {(s) => <SectionComponent fields={s.fields} />}
        </For>
      </main>
    </>
  );
}
