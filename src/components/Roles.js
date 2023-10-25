import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal, Table, Form } from "antd";
import { FormOutlined } from "@ant-design/icons";

export default function Roles() {
    const [roles, setRoles] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedRow, setSelectedRole] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [operation, setOperation] = useState()
    const [form] = Form.useForm();

    function getRoles (){
        setIsLoading(true);
        fetch("https://registration.ghh.news:8888/real-estate/serviceController/getRoles", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
             },
        })
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setRoles(result)
      })
      .catch(error => {
        setIsLoading(false)
        console.log('error', error)
      });
    }

    function createRole (data) {
        fetch("https://registration.ghh.news:8888/real-estate/serviceController/createRole", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify(data)
        })
      .then(result => {
        console.log("SUBMITTED SUCCESSFULLY");
        getRoles();
      })
      .catch(error => console.log('error', error));
    }

    function updateRole (data) {
        fetch("https://registration.ghh.news:8888/real-estate/serviceController/updateRole", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify(data)
        })
      .then(result => {
        console.log("UPDATED SUCCESSFULLY");
        getRoles();
      })
      .catch(error => console.log('error', error));
    }

    useEffect(()=>{
         getRoles();
    }, [])

    function handleRights(right){
        setOperation("update")
        setVisible(true);
        console.log("This is selected right ", right);
        form.setFieldsValue({name: right.name})
      }
    
      function updateRights(data){
        console.log("These are the new rights ", data)
      }

     function handleNewRole(){
        setOperation("create")
        form.resetFields()
        console.log("Creating a new role ");
        setVisible(true)
     }

     function handleCreate(data){
            if(operation === "create"){
                console.log("CREATING ROLE")
                createRole(data);
            }
            else{
                console.log("UPDATING ROLES")
                updateRole(data);
            }
     }

    return (
        <div style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center'
        }}>
            <Modal style={{
                padding: 12
            }} open={visible} closable footer={false} onCancel={()=>setVisible(false)}>
                <Form
                onFinish={handleCreate}
                form={form}
                style={{
                    marginTop: 30
                }}>
                    <Form.Item label="Role" name="name">
                        <Input style={{
                            fontFamily: 'monospace',
                            fontWeight: 'bold'
                        }}/>
                    </Form.Item>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                    </div>
                </Form>
            </Modal>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: 2,
            }}>
                <Button type="primary" onClick={()=>handleNewRole()}>
                    Create New Role
                </Button>
            </div>
            <Table
                loading={isLoading}
                bordered
                dataSource={roles}
                columns={[
                    {
                        title: 'Role',
                        dataIndex: 'name',
                        key: 'id'
                    },
                    {
                        title: 'Action',
                        render: (row) => <FormOutlined onClick={() => {
                            handleRights(row);
                            setSelectedRole(row);
                        }} />
                    }
                ]}
            />
        </div>
    );
}