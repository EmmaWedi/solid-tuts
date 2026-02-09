import { MetaWrapper } from "../wrappers/metaWrapper";
import { A, useNavigate } from "@solidjs/router";
import {
  IoMail,
  IoLockClosed,
  IoLogoGoogle,
  IoLogoApple,
} from "solid-icons/io";
import { ImSpinner2 } from "solid-icons/im";
import { authState } from "../stores/authStore";
import { loginUser } from "../services/authService";
import { createSignal } from "solid-js";
interface LoginFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = createSignal<LoginFormData>({
    email: "",
    password: "",
  });

  // await loginUser(formData());
  // or await loginUser({ email: formData().email, password: formData().password });

  const handleLogin = async () => {
    const result = await loginUser({
      email: "john@example.com",
      password: "password123",
    });

    if (result) {
      navigate("/");
    }
  };

  return (
    <MetaWrapper
      title="Sign In"
      description="Sign in to your Purity UI dashboard account."
      noIndex={true}
    >
      <div class="min-h-[60vh] flex items-center justify-center">
        <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-md">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            {authState.error && (
              <div class="bg-red-100 text-red-700 p-3 rounded-lg">
                {authState.error}
              </div>
            )}
            <p class="text-gray-500 text-sm">
              Enter your email and password to sign in
            </p>
          </div>

          <form class="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div class="relative">
                <IoMail class="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="mail@example.com"
                  value={formData().email}
                  onInput={(e) => setFormData({ ...formData(), email: e.currentTarget.value })}
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div class="relative">
                <IoLockClosed class="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="********"
                  value={formData().password}
                  onInput={(e) => setFormData({ ...formData(), password: e.currentTarget.value })}
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50"
                />
              </div>
            </div>

            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  class="rounded text-teal-500 focus:ring-teal-400"
                />
                Remember me
              </label>
              <A href="#" class="text-teal-500 hover:underline">
                Forgot password?
              </A>
            </div>

            <button
              onClick={handleLogin}
              type="submit"
              disabled={authState.isLoading}
              class="w-full bg-teal-500 text-white py-3 rounded-xl font-bold hover:bg-teal-600 transition shadow-lg shadow-teal-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-500 flex items-center justify-center gap-2"
            >
              {authState.isLoading ? (
                <>
                  <ImSpinner2 class="animate-spin" size={20} />
                  SIGNING IN...
                </>
              ) : (
                "SIGN IN"
              )}
            </button>
          </form>

          <div class="mt-6">
            <p class="text-center text-gray-500 text-sm mb-4">
              or sign in with
            </p>
            <div class="flex gap-3">
              <button class="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl hover:bg-gray-50 transition">
                <IoLogoGoogle class="text-red-500" /> Google
              </button>
              <button class="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl hover:bg-gray-50 transition">
                <IoLogoApple class="text-gray-800" /> Apple
              </button>
            </div>
          </div>

          <p class="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <A href="/signup" class="text-teal-500 font-bold hover:underline">
              Sign up
            </A>
          </p>
        </div>
      </div>
    </MetaWrapper>
  );
};

export default SignIn;
