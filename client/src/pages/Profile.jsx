import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex-1 bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white border-2 border-black rounded-xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="space-y-6">
          <div>
            <p className="text-gray-500 font-semibold">Name</p>

            <p className="text-2xl font-bold">{user.name}</p>
          </div>

          <div>
            <p className="text-gray-500 font-semibold">Email</p>

            <p className="text-xl">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500 font-semibold">Role</p>

            <p className="text-xl capitalize">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
