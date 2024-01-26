import React from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { AiOutlineCheck } from "react-icons/ai";
import { changeStatus } from "@/app/actions/todoActions";

const ChangeTodo = ({ todo }: any) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<AiOutlineCheck />} />
    </Form>
  );
};

export default ChangeTodo;
