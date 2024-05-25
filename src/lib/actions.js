"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connetToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";
export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connetToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("Saved");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};
export const addPost = async (prevState,formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connetToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connetToDB();
    await Post.deleteMany({userId:id})
    await User.findByIdAndDelete(id);
    console.log("deleted");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connetToDB();

    await Post.findByIdAndDelete(id);
    console.log("deleted");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};
export const hadleLogout = async () => {
  await signOut();
};
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
export const register = async (previousState, formData) => {
  const { username, email, password, passwordrepeat } =
    Object.fromEntries(formData);
  if (password !== passwordrepeat) {
    return { error: "Password do not Match" };
  }
  try {
    connetToDB();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or Password" };
    }
    return { error: "Something went wrong!" };
  }
};
