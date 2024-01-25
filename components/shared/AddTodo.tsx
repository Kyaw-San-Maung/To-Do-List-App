import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

const AddTodo = () => {
  return (
    <Form>
      <div className="flex ">
        <Input />
        <Button />
      </div>
    </Form>
  );
};

export default AddTodo;
