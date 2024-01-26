"use client";

import { BiEdit } from "react-icons/bi";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { useState } from "react";

const EditTodo = ({ todo }: any) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {};
  return (
    <div className="flex gap-5 items-center">
      <Form>
        <Input />
        <Button onClick={() => null} text={<BiEdit />} actionButton />
      </Form>
    </div>
  );
};

export default EditTodo;
