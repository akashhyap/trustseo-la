import { storyblokInit, apiPlugin } from '@storyblok/js'

const { storyblokApi } = storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
  })

  
export async function getStory(slug) {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft" | "published",
  });
  const story = data ? data.story : null;
  return story;
}
