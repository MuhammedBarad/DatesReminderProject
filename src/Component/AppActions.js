import React from "react";
import { Button, Space } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AppAction = ({ showAll, deleteAll }) => {
  return (
    <div className="py-3">
      <Space>
        <Button onClick={showAll} type="primary">
          Show Dates
        </Button>
        
        <Button onClick={deleteAll} type="primary" danger>
          Delte Dates
        </Button>
      </Space>
      <ToastContainer />
    </div>
  );
};

export default AppAction;
