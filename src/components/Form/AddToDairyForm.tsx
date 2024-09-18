import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { IEntryData } from '@/app/dashboard/page';

interface IAddToDairyFormProps {
    record?: IEntryData
}

export default function AddToDairyForm(props: IAddToDairyFormProps) {
    const { record } = props
    console.log("yaha bhi agaya", record)
    const [form] = Form.useForm();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log("getting", e)
    };

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            requiredMark={false}
            size="large"
            layout="vertical"
            labelCol={{ className: "font-medium" }}
            initialValues={record}
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please Enter Title' }]}
            >
                <Input
                    placeholder="Please Enter Title"
                />
            </Form.Item>
            <Form.Item
                name="content"
                label="Content"
                rules={[{ required: true, message: 'Please Enter content' }]}
            >
                <TextArea
                    placeholder="Please Enter content"
                    className='h-100'
                />
            </Form.Item>
            <Form.Item
                name="tags"
                label="Tags"
            >
                <Input
                    placeholder="Please Enter Tags"
                />
            </Form.Item>

            <Form.Item >
                <div className='flex space-x-4'>
                    <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Cancel
                    </button>
                    <button type='submit' className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Save
                    </button>
                </div>
            </Form.Item>
        </Form>
    );
};

