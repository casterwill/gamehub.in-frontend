import { useEffect } from "react";
import { useAuthUser } from "../auth/useAuthUser.js";

function AuthenticationPage() {
  const { token, login, loading, formData, setFormData } = useAuthUser();

  return (
    <div className="hero min-h-screen bg-base-200">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={login}
      >
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          autoComplete="on"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button
          className="btn btn-neutral mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <>Sign in</>
          )}
        </button>

        <button
          className="btn btn-neutral mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <>Sign up</>
          )}
        </button>
      </form>
    </div>
  );
}

export default AuthenticationPage;
