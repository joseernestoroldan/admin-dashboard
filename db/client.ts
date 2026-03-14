import { db } from "./db";

export const fetchUsers = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    const count = await db.user.count({ where: { username: { contains: q } } });
    const users = await db.user.findMany({
      where: { username: { contains: q } },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (parseInt(page) - 1),
    });
    return { count, users };
  } catch (err) {
    console.error("fetchUsers error:", err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    const count = await db.product.count({ where: { title: { contains: q } } });
    const products = await db.product.findMany({
      where: { title: { contains: q } },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (parseInt(page) - 1),
    });
    return { count, products };
  } catch (err) {
    console.error("fetchProducts error:", err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id: string) => {
  try {
    const product = await db.product.findUnique({ where: { id } });
    return product;
  } catch (err) {
    throw new Error("Failed to fetch product!");
  }
};
