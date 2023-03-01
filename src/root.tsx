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
import "./root.css";
import Logo from "./components/Logo";

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
        <header>
          <Logo />
        </header>
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
              Développement <a href="https://3sdl.ch">3sdl</a>
            </div>
          </article>
        </footer>
        <Scripts />
      </Body>
    </Html>
  );
}
