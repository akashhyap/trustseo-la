import StoryComponent from "@/components/StoryComponent";
import { getStory } from "@/utils/storyblok";

async function fetchData(params) {
  let slug = params.slug ? params.slug.join("/") : "home";
  const story = await getStory(slug);
  return {
    story: story ?? false,
  };
}

export default async function Page({ params }) {
  const { story } = await fetchData(params);
  // console.log(story.content);
  return (
    <>
      {story.content.component === "page" ? (
        <main className="max-w-6xl mx-auto">
         <StoryComponent blok={story.content} />
        </main>
      ) : (
        <main>
           <StoryComponent blok={story.content} />
        </main>
      )}
    </>
  );
}
