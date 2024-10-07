import React from 'react';
import { Form, Input, FormInstance } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { IThoughtCards } from '@/app/dashboard/profile/page';

interface IAddToDairyFormProps {
    record: IThoughtCards | undefined
    form?: FormInstance;
    formRef?: React.Ref<FormInstance>;
}

export default function ProfileInfoForm(props: IAddToDairyFormProps) {
    const { record, formRef } = props;
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            ref={formRef}
            requiredMark={false}
            size="large"
            layout="vertical"
            labelCol={{ className: "font-medium" }}
            initialValues={record}
        >
            <div className='flex space-x-4'>
                <Form.Item
                    name="username"
                    label="Username"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Username"
                    />
                </Form.Item>
                <Form.Item
                    label="Full Name"
                    name="full_name"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Full Name"
                    />
                </Form.Item>
            </div>
            <div className='flex space-x-4'>
                <Form.Item
                    name="additional name"
                    label="Additional Name"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Additional Name"
                    />
                </Form.Item>
                <Form.Item
                    name="pronounce"
                    label="Pronounce"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Pronounce"
                    />
                </Form.Item>
            </div>
            <div className='flex space-x-4'>
                <Form.Item
                    label="Bio/Description"
                    name="bio"
                    className="w-full"
                >
                    <TextArea
                        placeholder="Please Enter Bio/Description"
                    />
                </Form.Item>
                <Form.Item
                    label="Website/Links"
                    name="link"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Website/Links"
                    />
                </Form.Item>
            </div>
            <div className='flex space-x-4'>
                <Form.Item
                    label="Email Address"
                    name="email"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Email"
                    />
                </Form.Item>
                <Form.Item
                    name="location"
                    label="Location"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Location"
                    />
                </Form.Item>
            </div>
            <div className='flex space-x-4'>
                <Form.Item
                    label="Joined Date"
                    name="createdAt"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Joined Date"
                    />
                </Form.Item>
                <Form.Item
                    name="updatedAt"
                    label="Last Update Date"
                    className="w-full"
                >
                    <Input
                        placeholder="Please Enter Last Update Date"
                    />
                </Form.Item>

            </div>
        </Form>
    );
}
