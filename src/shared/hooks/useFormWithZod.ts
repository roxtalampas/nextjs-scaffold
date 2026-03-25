import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function useFormWithZod<T extends FieldValues>(
  schema: z.ZodSchema<T>
) {
  return useForm<T>({
    // @ts-expect-error - zodResolver type incompatibility with Zod v4
    resolver: zodResolver(schema),
  });
}
