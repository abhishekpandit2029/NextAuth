import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { IThoughtCards } from '@/app/dashboard/profile/page';
import axios from 'axios';
import { usePatchMutation, usePostMutation, usePutMutation } from '@/lib/fetcher';
import revalidate from '@/lib/revalidate';

interface IAddToDairyFormProps {
    record: IThoughtCards | undefined
    onSave: () => void
    onCancel: () => void
    edit?: boolean
}

interface IHandleSubmit {
    "title": string,
    "content": string,
    "tags": string
}

export default function AddToDairyForm(props: IAddToDairyFormProps) {
    const { record, edit, onCancel, onSave } = props;
    const [form] = Form.useForm();

    const { trigger: create } = usePostMutation("/thoughtcard/createcarddata", {
        onSuccess: () => {
            message.success("Content created successfully");
            revalidate("/thoughtcard/getcardsdata");
            onSave();
        },
        onError: (error) => {
            message.error(error.message);
        },
    });

    const { trigger: update } = usePatchMutation("/thoughtcard/updatecarddata", {
        onSuccess: () => {
            message.success("Content updated successfully");
            revalidate("/thoughtcard/getcardsdata");
            onSave();
        },
        onError: (error) => {
            message.error(error.message);
        },
    });

    const onFinish = (values: IHandleSubmit) => {
        const submitData = {
            ...values,
            tags: values?.tags?.split(" ")
        };
        // if (edit) {
        //     update(submitData);
        // } else {
        //     create(submitData);
        // }

        update(submitData);
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
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

            <Form.Item>
                <div className='flex space-x-4'>
                    <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={onCancel}>
                        Cancel
                    </button>
                    <button type='submit' className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Save
                    </button>
                </div>
            </Form.Item>
        </Form>
    );
}
