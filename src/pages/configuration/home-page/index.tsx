import { useDispatch } from "react-redux";
import styles from "./home-page.module.css";
import { selectOption } from "../../../redux/features/configurations/configuration/configuration-slice";
import { useNavigate } from "react-router-dom";

interface option {
  id: number;
  title: string;
  path?: string;
}

const ConfigurationHomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const configuration_options = [
    {
      id: 1,
      title: "General",
      options: [
        {
          id: 1,
          title: "Organization Settings",
          path: "/configuration/general/organization-settings",
        },
        {
          id: 2,
          title: "Product Overview",
          path: "/configuration/general/product-overview",
        },
        {
          id: 3,
          title: "User Management",
          path: "/configuration/general/user-management",
        },
        {
          id: 4,
          title: "Audit Reports",
          path: "/configuration/general/audit-reports",
        },
        {
          id: 5,
          title: "Mail Services",
          path: "/configuration/general/mail-services",
        },
        {
          id: 6,
          title: "Text and Barcode Recognition",
          path: "/configuration/general/text-and-barcode-recognition",
        },
        {
          id: 7,
          title: "Preconfigured Solutions",
          path: "/configuration/general/preconfigured-solutions",
        },
      ],
    },
    {
      id: 2,
      title: "Capture",
      options: [
        {
          id: 1,
          title: "Document Processing",
          path: "/configuration/capture/document-processing",
        },
        {
          id: 2,
          title: "Forms",
          path: "/configuration/capture/forms",
        },
        {
          id: 3,
          title: "Outlook Email",
          path: "/configuration/capture/outlook-email",
        },
        {
          id: 4,
          title: "General Email",
          path: "/configuration/capture/general-email",
        },
      ],
    },
    {
      id: 3,
      title: "Index",
      options: [
        {
          id: 1,
          title: "Indexing Assistance",
          path: "/configuration/index/indexing-assistance",
        },
        {
          id: 2,
          title: "Intelligent Indexing",
          path: "/configuration/index/intelligent-indexing",
        },
        {
          id: 3,
          title: "Autoindex",
          path: "/configuration/index/autoindex",
        },
      ],
    },
    {
      id: 4,
      title: "Document Storage",
      options: [
        {
          id: 1,
          title: "File Cabinet",
          path: "/configuration/document-storage/file-cabinet",
        },
        {
          id: 2,
          title: "Document Relations",
          path: "/configuration/document-storage/document-relations",
        },
        {
          id: 3,
          title: "Deletion Policy",
          path: "/configuration/document-storage/deletion-policy",
        },
        {
          id: 4,
          title: "Transfer",
          path: "/configuration/document-storage/transfer",
        },
      ],
    },
    {
      id: 5,
      title: "Collaboration",
      options: [
        {
          id: 1,
          title: "Notifications",
          path: "/configuration/collaboration/notifications",
        },
        {
          id: 2,
          title: "Request",
          path: "/configuration/collaboration/request",
        },
        {
          id: 3,
          title: "Stamps",
          path: "/configuration/collaboration/stamps",
        },
      ],
    },
    {
      id: 6,
      title: "Personal",
      options: [
        {
          id: 1,
          title: "Document Tray",
          path: "/configuration/personal/document-tray",
        },
      ],
    },
    {
      id: 7,
      title: "Integration",
      options: [
        {
          id: 1,
          title: "Smart Connect",
          path: "/configuration/integration/smart-connect",
        },
        {
          id: 2,
          title: "Web Services",
          path: "/configuration/integration/web-services",
        },
        {
          id: 3,
          title: "Webhooks",
          path: "/configuration/integration/webhooks",
        },
        {
          id: 4,
          title: "Export Data",
          path: "/configuration/integration/export-data",
        },
        {
          id: 5,
          title: "FTP",
          path: "/configuration/integration/ftp",
        },
      ],
    },
  ];

  const handleOptionClick = (option: option) => {
    dispatch(selectOption(option));
    if (option.path) {
      navigate(option.path);
    }
  };

  return (
    <div className={styles["configuration-container"]}>
      <div className={`${styles["configuration-options"]}`}>
        {configuration_options.map((option) => (
          <div key={option.id} className={`${styles["configuration-option"]}`}>
            <h2 className={`${styles["option-title"]}`}>{option.title}</h2>
            <div className={styles["sub-options"]}>
              {option.options.map((sub_option) => (
                <div
                  onClick={() => handleOptionClick(sub_option)}
                  className={`${styles["sub-option-link"]}`}
                  key={sub_option.id}
                >
                  <div className={`${styles["sub-option"]}`}>
                    <div className={`${styles["logo"]}`}>Logo</div>
                    <p className={`${styles["sub-option-title"]}`}>
                      {sub_option.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigurationHomePage;
