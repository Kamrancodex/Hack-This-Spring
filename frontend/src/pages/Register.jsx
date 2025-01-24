
import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { postForm } from "../services/service";
import styles from "./Register.module.css";

const initialState = {
  isSubmitted: false,
  isLoading: false,
  error: null,
  formData: {
    name: "",
    email: "",
    phone: "",
    college: "",
    semester: "",
    gender: "",
    agree: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.value };
    case "SET_SUBMITTED":
      return { ...state, isSubmitted: true };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isSubmitted, isLoading, error, formData } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", value: true });

    try {
      await postForm(formData);
      dispatch({ type: "SET_SUBMITTED" });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        error: err.response,
      });
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  const handleInputChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <div className={styles.successMessage}>
            <h2>Registration Successful!</h2>
            <p>
              Thank you for registering for our hackathon. You will receive a
              <span className={styles.highlight}> confirmation email </span>
              shortly with further details.
            </p>
          </div>
        </div>
        <div className={styles.backgroundAnimation}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>Register for the Hackathon</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleInputChange("phone", value);
                }
              }}
              required
              maxLength={10}
              pattern="^[0-9]{10}$"
              title="Phone number must be 10 digits"
              placeholder="Enter your phone number"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="college">College *</label>
            <input
              type="text"
              id="college"
              value={formData.college}
              onChange={(e) => handleInputChange("college", e.target.value)}
              required
              placeholder="Enter your college name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="semester">Semester *</label>
            <select
              id="semester"
              value={formData.semester}
              onChange={(e) => handleInputChange("semester", e.target.value)}
              required
            >
              <option value="" disabled>
                Select Semester
              </option>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
              <option value="6">6th Semester</option>
              <option value="7">7th Semester</option>
              <option value="8">8th Semester</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Gender *</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  required
                />
                <span>Male</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.agree}
                onChange={(e) => handleInputChange("agree", e.target.checked)}
                required
              />
              <span>
                I have read and agree to the{" "}
                <NavLink to="/conduct" className={styles.link}>
                  Code of Conduct
                </NavLink>{" "}
                and{" "}
                <NavLink to="/rules" className={styles.link}>
                  Rules
                </NavLink>
                .
              </span>
            </label>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Register Now"}
          </button>
        </form>

        {error && (
          <p className={styles.errorMessage}>
            {error.status === 500
              ? "Please check your email"
              : error.data.message}
          </p>
        )}
      </div>
      <div className={styles.backgroundAnimation}></div>
    </div>
  );
}

export default Register;
