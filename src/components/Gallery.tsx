import { For, onMount } from "solid-js";
import { assets } from "~/store";
import "./Gallery.scss";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function () {
  let gallery;

  onMount(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: gallery,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });

  return (
    <div ref={gallery} class="gallery">
      <For each={assets()}>
        {(asset) => (
          <a
            href={asset.fields.file.url}
            data-pswp-width={asset.fields.file.details.image.width}
            data-pswp-height={asset.fields.file.details.image.height}
            data-cropped="true"
            target="_blank"
          >
            <img
              src={`${asset.fields.file.url}?w=160&h=160`}
              alt={asset.fields.title}
            />
          </a>
        )}
      </For>
    </div>
  );
}
