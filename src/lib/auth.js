import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import  CredentialProvider from "next-auth/providers/credentials";
import { connetToDB } from "./utils";
import { User } from "./models";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

const login = async (credentials) =>{
  try {
    connetToDB();
    const user =await User.findOne({username : credentials.username})
    if (!user) {
      throw new Error("username or password is wrong!")
    }
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if(!isPasswordCorrect){
      throw new Error('Invalid Password')
    };
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to Login");
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials){
try {
  const user = await login(credentials);
  return user;
} catch (error) {
  console.log(error);
  return null;
}
      }
    })
  ],
  callbacks:{
    async signIn({user,account, profile}){
  
      if (account.provider ==="github") {
        connetToDB()
        try {
          const user = await User.findOne({email : profile.email});
          if (!user) {
            const newUser = new User({
              username : profile.login,
              email: profile.email,
              image:profile.avatar_url,

            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error)
          return false;
        }
      }
      return true;
    },
  ...authConfig.callbacks,
  },  
});
