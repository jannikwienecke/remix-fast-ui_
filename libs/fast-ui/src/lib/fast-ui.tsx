import styles from "./fast-ui.module.css";

/* eslint-disable-next-line */
export interface FastUiProps {}

export function FastUi(props: FastUiProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to FastUi!</h1>
    </div>
  );
}

export default FastUi;
