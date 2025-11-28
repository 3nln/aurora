import React from "react";
import { FormProvider, useForm, type UseFormProps, type FieldValues } from "react-hook-form";

interface FormContainerProps<TFieldValues extends FieldValues = FieldValues> {
  children: React.ReactNode;
  onSubmit: (data: TFieldValues) => void;
  formProps?: UseFormProps<TFieldValues>;
}

export const FormContainer = <TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  formProps,
}: FormContainerProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>(formProps);

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
