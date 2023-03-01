import { For } from "solid-js";
import { assets } from "~/store";
import "./Gallery.scss";

export default function () {
  return (
    <div class="gallery">
      <For each={assets()}>
        {(asset) => (
          <div>
            <img
              src={`${asset.fields.file.url}?w=160&h=160&fit=fill`}
              alt={asset.fields.title}
            />
          </div>
        )}
      </For>
    </div>
  );
}
