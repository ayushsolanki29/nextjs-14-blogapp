import { Post } from "@/lib/models";
import { connetToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connetToDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Faild to Fetch Post");
  }
};
export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connetToDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deletes");
  } catch (error) {
    console.log(error);
    throw new Error("Faild to Delete Post");
  }
};
