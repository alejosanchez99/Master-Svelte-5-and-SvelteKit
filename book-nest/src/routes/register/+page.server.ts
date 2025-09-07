import { fail, redirect, type Actions } from "@sveltejs/kit";

interface ReturnObject {
  success: boolean;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  errors: string[];
}

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const passwordConfirmation = formData.get("passwordConfirmation") as string;

    const returnObject: ReturnObject = {
      success: true,
      email,
      name,
      password, 
      passwordConfirmation,
      errors: [],
    };

    if (name.length < 2) {
      returnObject.errors.push(
        "The name is too short. Mus be at least 3 characters."
      );
    }

    if (!email.length) {
      returnObject.errors.push("Email is required");
    }

    if (!password.length) {
      returnObject.errors.push("Password is required");
    }

    if (password !== passwordConfirmation) {
      returnObject.errors.push("Passwords doe not match");
    }

    if (returnObject.errors.length) {
      returnObject.success = false;
      return returnObject;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      returnObject.success = false;
      return fail(400, returnObject);
    }

    redirect(303, "/private/dashboard");
  },
};
