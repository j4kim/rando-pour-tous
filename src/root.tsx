// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

import { createClient } from "contentful";

var client = createClient({
  space: 'nslgdnzpa24d',
  accessToken: '-YD620bRfsUnApfr8fO4xG-v_H4iz5cpmmerqFBBUEQ',
});

client.getEntries().then(function (entries) {
  console.log("entries", entries)
});

export default function Root() {
  return (
    <Html lang="fr">
      <Head>
        <Title>Rando Pour Tous</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <h1>Rando pour tous</h1>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
