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

import styles from "./create-user.module.css";

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
        <div className="form-container">
          <div className="tabs">
            <div
              className={`tab ${selectedTab === "general" ? "active" : ""}`}
              onClick={() => handleTabClick("general")}
            >
              General
            </div>
            <div
              className={`tab ${selectedTab === "groups" ? "active" : ""}`}
              onClick={() => handleTabClick("groups")}
            >
              Groups
            </div>
            <div
              className={`tab ${selectedTab === "roles" ? "active" : ""}`}
              onClick={() => handleTabClick("roles")}
            >
              Roles
            </div>
            <div
              className={`tab ${
                selectedTab === "functionProfiles" ? "active" : ""
              }`}
              onClick={() => handleTabClick("functionProfiles")}
            >
              Function Profiles
            </div>
            <div
              className={`tab ${
                selectedTab === "fileCabinetProfiles" ? "active" : ""
              }`}
              onClick={() => handleTabClick("fileCabinetProfiles")}
            >
              File Cabinet Profiles
            </div>
            <div
              className={`tab ${selectedTab === "dialog" ? "active" : ""}`}
              onClick={() => handleTabClick("dialog")}
            >
              Dialogs
            </div>
            <div
              className={`tab ${selectedTab === "stamps" ? "active" : ""}`}
              onClick={() => handleTabClick("stamps")}
            >
              Stamps
            </div>
          </div>

          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateNewUser;
