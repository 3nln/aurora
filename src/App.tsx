import { FormContainer, SubmitButton, TextFieldForm } from "aurora-admin";
import { useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  salom: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

const App = () => {
  return (
    <div>
      <FormContainer<FormData>
        formProps={{
          defaultValues: {
            salom: "ssss",
            email: "email",
            password: "password",
          },
          resolver: zodResolver(schema),
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <Form />
        <TextFieldForm error={true} helperText="Incorrect entry." size="small" label="Name" name="salom" />
        <TextFieldForm size="small" label="Email" name="email" />
        <TextFieldForm size="small" label="Password" name="password" />
        <SubmitButton>Click me</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default App;

const Form = () => {
  const { register, handleSubmit } = useFormContext();
  return (
    <>
      {JSON.stringify(register)}ss
      <button
        type="submit"
        onClick={handleSubmit((data) => {
          console.log("submit mini", data);
        })}
      >
        Submit
      </button>
    </>
  );
};
