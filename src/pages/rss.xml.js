import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../config/consts";

export async function GET(context) {
  const haikus = await getCollection("haikus");
  const rssResponse = rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: haikus.map((haiku) => ({
      ...haiku.data,
      title: haiku.body,
      link: `${SITE_URL}/haikus/${haiku.slug}/`,
    })),
  });
  return new Response(JSON.stringify(rssResponse));
}
