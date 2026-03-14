import styles from "@/styles/table-page.module.css";
import skeletonStyles from "@/styles/skeleton.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`} style={{ width: '250px', height: '40px', borderRadius: '8px' }}></div>
        <div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonButton}`} style={{ width: '100px', height: '40px', borderRadius: '8px' }}></div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className={styles.entity}>
                  <div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonAvatar}`}></div>
                  <div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`} style={{ width: '100px' }}></div>
                </div>
              </td>
              <td><div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`} style={{ width: '150px' }}></div></td>
              <td><div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`} style={{ width: '100px' }}></div></td>
              <td><div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`} style={{ width: '60px' }}></div></td>
              <td><div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`} style={{ width: '60px' }}></div></td>
              <td>
                <div className={styles.buttons}>
                  <div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonButton}`}></div>
                  <div className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonButton}`}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loading;
