import {Table, Tag } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
const AppForm = ({ person }) => {
  const { Column, ColumnGroup } = Table;
  const data = person.map((item, index) => {
    return {
      key: item.id,
      firstName: item.fname,
      lastName: item.lname,
      age: item.age,
      address: item.address,
      tags: [item.tags, item.tags],
    };
  });

  return (
    <>
      <div
        className="py-5 "
        style={{
          width: "90%",
          height: "100%",
          background: "white",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Container>
          <Table dataSource={data} pagination={{ pageSize: 5 }}>
            <ColumnGroup title="Name">
              <Column
                title="First Name"
                dataIndex="firstName"
                key="firstName"
              />
              <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={(tags) => (
                <>
                  {tags.map((tag) => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            />
          </Table>
        </Container>
      </div>
    </>
  );
};

export default AppForm;
