import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../Forms";

export const Education = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/about");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Education</legend>
        <Field label="University">
          <Input {...register("university")} id="university" />
        </Field>
        <Field label="Degree">
          <Input {...register("degree")} id="degree" />
        </Field>
        <div className="button-row">
          <Button variant="secondary" onClick={() => navigate("/")}>
            {"<"} Previous
          </Button>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
