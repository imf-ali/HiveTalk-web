import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[] | null) => {
  const errorMap: Record<string,string> = {};
  errors?.forEach(({ field, message }) => {
    errorMap[field] = message;
  })
  return errorMap;
}