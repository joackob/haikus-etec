import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../config/consts";

export async function get(context) {
  const haikus = await getCollection("haikus");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: haikus.map((haiku) => ({
      ...haiku.data,
      link: `${SITE_URL}/posts/${haiku.slug}/`,
    })),
  });
}
