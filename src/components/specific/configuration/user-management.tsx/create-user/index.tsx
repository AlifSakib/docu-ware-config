import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import General from "./general";
import Groups from "./groups";
import Roles from "./roles";
import FunctionProfiles from "./function-profiles";
import FileCabinetProfiles from "./file-cabinet-profiles";
import Dialogs from "./dialogs";
import Stamps from "./stamps";
import { createUserSchema } from "../../../../../schemas/create-user";

import styles from "./create-new-user.module.css";

const CreateNewUser = () => {
  const [selectedTab, setSelectedTab] = useState("general");

  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    registration: string;
    roles: string;
  };

  const methods = useForm({
    resolver: yupResolver(createUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      registration: "",
      roles: "",
      color: "green",
    },
  });

  console.log(methods.watch());

  const { handleSubmit, trigger } = methods;

  const handleTabClick = async (tab: string) => {
    const isEmailValid = await trigger("email");
    if (!isEmailValid) {
      console.log("Email is not valid");
      return;
    }

    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "general":
        return <General />;
      case "groups":
        return <Groups />;
      case "roles":
        return <Roles />;
      case "functionProfiles":
        return <FunctionProfiles />;
      case "fileCabinetProfiles":
        return <FileCabinetProfiles />;
      case "dialog":
        return <Dialogs />;
      case "stamps":
        return <Stamps />;
      default:
        return null;
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["form-container"]}>
          <div className={styles["tabs"]}>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "general" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("general")}
            >
              General
            </div>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "groups" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("groups")}
            >
              Groups
            </div>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "roles" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("roles")}
            >
              Roles
            </div>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "functionProfiles" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("functionProfiles")}
            >
              Function Profiles
            </div>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "fileCabinetProfiles" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("fileCabinetProfiles")}
            >
              File Cabinet Profiles
            </div>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "dialog" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("dialog")}
            >
              Dialogs
            </div>
            <div
              className={`${styles["tab"]} ${
                selectedTab === "stamps" ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick("stamps")}
            >
              Stamps
            </div>
          </div>

          <div className={styles["tab-content"]}>{renderTabContent()}</div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateNewUser;
