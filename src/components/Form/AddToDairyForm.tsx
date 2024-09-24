import React from 'react';
import { Form, Input, FormInstance } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { IThoughtCards } from '@/app/dashboard/profile/page';

interface IAddToDairyFormProps {
    record: IThoughtCards | undefined
    onSave: () => void
    onCancel: () => void
    edit?: boolean
    form?: FormInstance;
    formRef?: React.Ref<FormInstance>;
}

export default function AddToDairyForm(props: IAddToDairyFormProps) {
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
            <div className='flex flex-col -space-y-3'>
                <div>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please Enter Title' }]}
                    >
                        <Input
                            placeholder="Please Enter Title"
                            className='rounded-xl'
                        />
                    </Form.Item>
                </div>
                <div className='flex flex-col -space-y-4'>
                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[{ required: true, message: 'Please Enter content' }]}
                    >
                        <TextArea
                            placeholder="Please Enter content"
                            className='h-100 scrollbar-hide'
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
                </div>

            </div>
        </Form>
    );
}
