import { updateUser } from "@/app/actions/actions";
import { fetchUser } from "@/db/client";
import styles from "@/styles/detail-page.module.css";
import Image from "next/image";
import Link from "next/link";

const SingleUserPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const user = await fetchUser(id);

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <p>The user you are looking for does not exist.</p>
        <Link href="/dashboard/users">Go back to the users page</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin}>Yes</option>
            <option value="false" selected={!user.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive}>Yes</option>
            <option value="false" selected={!user.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
