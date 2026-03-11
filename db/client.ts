import { connectToDB } from "./db";
import { User } from "./models";

export const fetchUsers = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));
    return { count, users };
  } catch (err) {
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};
