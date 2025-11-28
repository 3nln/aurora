import React from "react";
import { FormProvider, useForm } from "react-hook-form";

interface FormContainerProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

export const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  const methods = useForm();

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormProvider>
  );
};
