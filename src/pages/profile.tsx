import { MetaWrapper } from "../wrappers/metaWrapper";

const Profile = () => {
  return (
    <MetaWrapper
      title="Profile"
      description="Manage your profile information and account settings."
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
          <div class="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-1">John Doe</h2>
          <p class="text-gray-500 mb-6">Product Manager</p>
          <div class="flex justify-center gap-4">
            <button class="px-6 py-2 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div class="md:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 class="text-xl font-bold text-gray-800 mb-6">
            Profile Information
          </h3>
          <div class="space-y-4">
            {[
              { label: "Full Name", value: "John Michael Doe" },
              { label: "Mobile", value: "+44 123 456 7890" },
              { label: "Email", value: "john.doe@example.com" },
              { label: "Location", value: "London, UK" },
            ].map((item) => (
              <div class="flex border-b border-gray-100 pb-4">
                <span class="w-1/3 text-gray-500 text-sm font-medium">
                  {item.label}
                </span>
                <span class="w-2/3 text-gray-800 font-semibold">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MetaWrapper>
  );
};

export default Profile;
