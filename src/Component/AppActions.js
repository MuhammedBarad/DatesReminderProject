import React,{useState  } from "react";
import { Button, Space } from "antd";
import { Data } from "./AppData";
const AppAction = ({ showAll, deleteAll}) => {

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
    </div>
  );
};

export default AppAction;
