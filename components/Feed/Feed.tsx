import ItemPost from "@components/common/ItemPost/ItemPost";
import firebase from "firebase";
import "firebase/firestore";
import { mockImages } from "mock";
import { useEffect, useState } from "react";

const Feed = () => {
  // const posts = mockImages;

  const [posts, setPosts] = useState(() => {
    firebase.firestore().collection('ItemPost')
      .onSnapshot((snapshot) => {
        const postItems = [];
        snapshot.forEach((snap) => {
          postItems.push({
            id: snap.id,
            ...snap.data()
          });
        });
        setPosts(postItems);
      });
    return [];
  })

  useEffect(() => {
    posts.map(post => console.log(post.caption));
  }, [posts]);

  return (
    // <div className="flex flex-col items-center py-2 overflow-hidden md:py-0">
    <div className="grid gap-4 lg:grid-cols-3">
      {posts?.map((post) => {
        const initials = post.added_by.name.split(" ").map((fragment) => fragment.substr(0,1).toUpperCase()).join("");
        return (
          <ItemPost
            key={post.id}
            id={post.id}
            name={post.added_by.name}
            imageUrl={post.imageUrl}
            initials={initials}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Feed;
