import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

export default function AddToDairyForm() {
    const [form] = Form.useForm();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log("getting", e)
    };

    return (
        <Form form={form} onFinish={handleSubmit} className="login-form">
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input

                    placeholder="Enter Title"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input

                    type="password"
                    placeholder="Enter Desc."
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" className="login-form-button">
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Save
                </Button>

            </Form.Item>
        </Form>
    );
};

