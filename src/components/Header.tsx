import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";

export default function () {
  const bgSvg = HeaderBackground({}) as HTMLElement;
  const encoded = btoa(bgSvg.outerHTML);

  return (
    <header
      style={{
        "background-image": "url(data:image/svg+xml;base64," + encoded + ")",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        height: "300px",
        "background-repeat": "repeat-x",
        "background-position": "center",
        "background-size": "auto 300px",
      }}
    >
      <Logo />
    </header>
  );
}
