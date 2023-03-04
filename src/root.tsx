// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Header from "./components/Header";
import "./root.css";

export default function Root() {
  return (
    <Html lang="fr">
      <Head>
        <Title>Rando Pour Tous</Title>
        <Link rel="icon" href="/rando-pour-tous.svg" />
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Header />
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <footer>
          <article>
            <div>
              Développement{" "}
              <a href={process.env.DEVELOPER_SITE} target="_blank">
                {process.env.DEVELOPER_SIGNATURE}
              </a>{" "}
              🐝
            </div>
          </article>
        </footer>
        <Scripts />
      </Body>
    </Html>
  );
}
