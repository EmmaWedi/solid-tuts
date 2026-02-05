import { MetaWrapper } from "../wrappers/metaWrapper";
import { A } from "@solidjs/router";
import {
  IoPerson,
  IoMail,
  IoLockClosed,
  IoLogoGoogle,
  IoLogoApple,
} from "solid-icons/io";

const SignUp = () => {
  return (
    <MetaWrapper
      title="Sign Up"
      description="Create a new Purity UI dashboard account."
      noIndex={true}
    >
      <div class="min-h-[60vh] flex items-center justify-center">
        <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-md">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Create Account
            </h2>
            <p class="text-gray-500 text-sm">
              Enter your details to create your account
            </p>
          </div>

          <form class="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <div class="relative">
                <IoPerson class="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div class="relative">
                <IoMail class="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="mail@example.com"
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
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50"
                />
              </div>
            </div>

            <div class="flex items-center text-sm">
              <label class="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  class="rounded text-teal-500 focus:ring-teal-400"
                />
                I agree to the{" "}
                <A href="#" class="text-teal-500 hover:underline">
                  Terms and Conditions
                </A>
              </label>
            </div>

            <button
              type="submit"
              class="w-full bg-teal-500 text-white py-3 rounded-xl font-bold hover:bg-teal-600 transition shadow-lg shadow-teal-200"
            >
              SIGN UP
            </button>
          </form>

          <div class="mt-6">
            <p class="text-center text-gray-500 text-sm mb-4">
              or sign up with
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
            Already have an account?{" "}
            <A href="/signin" class="text-teal-500 font-bold hover:underline">
              Sign in
            </A>
          </p>
        </div>
      </div>
    </MetaWrapper>
  );
};

export default SignUp;
