"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db/db";
import bcrypt from "bcryptjs";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password as string, salt);
    await db.user.create({
      data: {
        username: username as string,
        email: email as string,
        password: hashedPassword,
        phone: phone as string,
        address: address as string,
        isAdmin: isAdmin === "true",
        isActive: isActive === "true",
        
      },
    });
  } catch (err) {
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password as string, salt);
    await db.user.update({
      where: { id: id as string },
      data: {
        username: username as string,
        email: email as string,
        password: hashedPassword,
        phone: phone as string,
        address: address as string,
        isAdmin: isAdmin === "true",
        isActive: isActive === "true",
      },
    });
  } catch (err) {
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await db.user.delete({
      where: { id: id as string },
    });
  } catch (err) {
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    await db.product.create({
      data: {
        title: title as string,
        desc: desc as string,
        price: String(price),
        stock: Number(stock),
        color: color as string,
        size: size as string,
      },
    });
  } catch (err) {
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    await db.product.update({
      where: { id: id as string },
      data: {
        title: title as string,
        desc: desc as string,
        price: String(price),
        stock: Number(stock),
        color: color as string,
        size: size as string,
      },
    });
  } catch (err) {
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await db.product.delete({
      where: { id: id as string },
    });
  } catch (err) {
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};


