import { Post, User } from "./models";
import { connetToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
export const getPosts = async () => {
  try {
    connetToDB();
    const posts = await Post.find();
    console.log("fetched");
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Faild to Fetch posts");
  }
};
export const getPost = async (slug) => {
  try {
    connetToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Faild to Fetch post ");
  }
};
export const getUser = async (id) => {
  noStore();
    try {
    connetToDB();
    const user = await User.findById(id);
    return user;
    
  } catch (err) {
    console.log(err);
    throw new Error("Faild to Fetch User");
  }
};
export const getUsers = async () => {
  try {
    connetToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Faild to Fetch Users");
  }
};
