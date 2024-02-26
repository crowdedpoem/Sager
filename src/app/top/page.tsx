import { getTopPosts } from "../../../lib/calls";

export default async function AddPost() {
  const nestTopPosts = await getTopPosts();
  // topPosts is a list of experiences for the top 5 most clicked on users
  const topPosts = nestTopPosts.flat()

  return (<>                  <h1>Hi top page</h1>
    {topPosts.map((exp, index) => {
      // console.log(exp)
      // boring, just list the most recent experience of top users
      return <p key={index}>{exp.Experiences[0].title}</p>
    })}

  </>

  );
}
