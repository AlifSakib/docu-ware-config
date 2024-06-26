import { useSelector } from "react-redux";
import styles from "./conf-nv.module.css";
import { Link } from "react-router-dom";

const ConfigurationsNav = () => {
  const selector = useSelector((state: any) => state.options.selectedOption);

  return (
    <div className={styles["conf-nav-container"]}>
      <div>
        <Link to="/configuration">ConfigurationsNav</Link>
      </div>
      <div>{selector?.title}</div>
      <div>Profile</div>
    </div>
  );
};

export default ConfigurationsNav;
