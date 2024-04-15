import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

const FormSection = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const onFinishForm = async (params: any) => {
    const storedData = localStorage.getItem("data");
    if (params.email === JSON.parse(storedData)?.email) {
      setError("Email already exists.");
      message.error("Submission failed: Email already exists.");
      return;
    }
    setError("");
    localStorage.setItem("data", JSON.stringify(params));
    message.success("Submission successful");
  };

  return (
    <section className="bg-gray-50 flex items-center justify-center">
      <div className="w-full xl:w-1/3 px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <Form layout={"vertical"} form={form} onFinish={onFinishForm}>
          <Form.Item
            label={<p className="text-md text-[#757575]">Email</p>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email",
              },
            ]}
            validateStatus={error ? "error" : ""}
            help={error}
          >
            <Input
              placeholder="johndoe@gmail.com"
              className="h-[2.75rem] rounded-none"
            />
          </Form.Item>
          <Form.Item
            label={<p className="text-md text-[#757575]">Name</p>}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
          >
            <Input
              placeholder="John Doe"
              className="h-[2.75rem] rounded-none"
            />
          </Form.Item>
          <Form.Item
            label={<p className="text-md text-[#757575]">Job Title</p>}
            name="job"
            rules={[
              {
                required: true,
                message: "Please input your job title",
              },
            ]}
          >
            <Input
              placeholder="Designer"
              className="h-[2.75rem] rounded-none"
            />
          </Form.Item>
          <Form.Item
            label={<p className="text-md text-[#757575]">Corporate Name</p>}
            name="corporate_name"
            rules={[
              {
                required: true,
                message: "Please input your corporate name",
              },
            ]}
          >
            <Input placeholder="PT. ABC" className="h-[2.75rem] rounded-none" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="bg-[#41A0E4] h-[2.75rem] border-none text-base font-semibold"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default FormSection;
