import { storyblokInit, apiPlugin } from '@storyblok/js'

const { storyblokApi } = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
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

export async function getConfig() {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/config`, {
    version: "draft" | "published",
  });
  const config = data ? data.story : null;
  return config;
}

export async function getOnPageSeo() {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/`, {
    starts_with: "on-page-seo/",
  });
  const onpageseo = data.stories;
  return onpageseo;
}