import type { NextApiRequest, NextApiResponse } from "next";
import { Low, JSONFile } from "lowdb";
import superagent from "superagent";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type Data = {
    posts: { file_url: string; sample_url: string }[];
  };
  const adapter = new JSONFile<Data>("db1.json");
  const db = new Low<Data>(adapter);
  await db.read();
  db.data ||= { posts: [] };
  if (db.data.posts.length == 0) {
    const { body } = await superagent.get(
      "https://gelbooru.com/index.php?page=dapi&s=post&q=index&tags=yaoi rating:safe&json=1&limit=1000"
    );
    const data = (
      body as { post: { file_url: string; sample_url: string }[] }
    ).post.map((v) => ({ file_url: v.file_url, sample_url: v.sample_url }));

    db.data.posts = data;
    await db.write();
    setTimeout(async () => {
      await db.read();
      db.data ||= { posts: [] };
      db.data.posts = [];
      await db.write();
    }, 1000 * 60 * 60);
  }
  const random =
    db.data.posts[Math.floor(Math.random() * db.data.posts.length)];
  res.redirect(random?.sample_url || random?.file_url);
}
