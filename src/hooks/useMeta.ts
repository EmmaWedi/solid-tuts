import { createEffect } from "solid-js";

export interface MetaOptions {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const useMeta = (options: MetaOptions) => {
  createEffect(() => {
    // Update title
    if (options.title) {
      document.title = options.title;
    }

    // Update meta description
    updateMetaTag("name", "description", options.description);

    // Update Open Graph tags
    updateMetaTag(
      "property",
      "og:title",
      options.title?.replace(" | Solid Tuts", ""),
    );
    updateMetaTag("property", "og:description", options.description);
    updateMetaTag("property", "og:image", options.ogImage);

    // Robots tag
    if (options.noIndex) {
      updateMetaTag("name", "robots", "noindex, nofollow");
    } else {
      removeMetaTag("name", "robots");
    }
  });
};

function updateMetaTag(attr: string, key: string, content?: string) {
  if (!content) return;

  let tag = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

function removeMetaTag(attr: string, key: string) {
  const tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (tag) tag.remove();
}
