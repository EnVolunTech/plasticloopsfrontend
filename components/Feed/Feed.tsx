import ItemPost from "@components/common/ItemPost/ItemPost";
import { mockImages } from "mock";

const Feed = () => {
  const posts = mockImages;
  console.log(posts);

  return (
    // <div className="flex flex-col items-center py-2 overflow-hidden md:py-0">
    <div className="grid gap-4 lg:grid-cols-3">
      {posts?.map((post) => {
        return (
          <ItemPost
            key={post.id}
            id={post.id}
            name={post.name}
            imageUrl={post.imageUrl}
            initials={post.initials}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Feed;
