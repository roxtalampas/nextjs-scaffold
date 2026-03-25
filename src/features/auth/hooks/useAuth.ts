import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authSevice } from "../auth.service";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: authSevice.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  })

  const signupMutation = useMutation({
    mutationFn: authSevice.signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  })

  return {
    loginMutation,
    signupMutation,
  }
};
