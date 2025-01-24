
import React, { useState } from "react";
import { postAdmin } from "../services/service";
import Details from "../components/Details";
import styles from "./Admin.module.css";

function Admin() {
  const [state, setState] = useState({
    isSubmitted: false,
    isLoading: false,
    error: null,
    serverData: [],
    credentials: {
      name: "",
      password: "",
    },
    subscribers: null,
  });

  const handleInputChange = (field, value) => {
    setState((prev) => ({
      ...prev,
      credentials: {
        ...prev.credentials,
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const data = {
        adminId: state.credentials.name,
        password: state.credentials.password,
      };

      const response = await postAdmin(data);
      setState((prev) => ({
        ...prev,
        serverData: response.data[0],
        subscribers: response.data[1],
        isSubmitted: true,
        isLoading: false,
        error: null,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: "Invalid credentials. Please try again.",
        isLoading: false,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>Admin Portal</h1>

        {!state.isSubmitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Admin ID</label>
              <input
                type="text"
                id="name"
                value={state.credentials.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                placeholder="Enter admin ID"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={state.credentials.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={state.isLoading}
            >
              {state.isLoading ? "Authenticating..." : "Login"}
            </button>

            {state.error && (
              <p className={styles.errorMessage}>{state.error}</p>
            )}
          </form>
        ) : (
          <div className={styles.dashboard}>
            <Details
              serverData={state.serverData}
              subscribers={state.subscribers}
            />
          </div>
        )}
      </div>
      <div className={styles.backgroundAnimation}></div>
    </div>
  );
}

export default Admin;
