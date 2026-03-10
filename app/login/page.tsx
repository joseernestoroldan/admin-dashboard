import styles from "./Page.Login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;