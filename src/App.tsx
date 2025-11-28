import { FormContainer, SubmitButton, TextFieldForm } from "aurora-admin";

const App = () => {
  return (
    <div>
      <FormContainer
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <TextFieldForm size="small" label="Name" name="salom" />
        <TextFieldForm size="small" label="Email" name="email" />
        <TextFieldForm size="small" label="Password" name="password" />
        <SubmitButton>Click me</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default App;
