// import React, { useState } from "react";
// import "./SignupForm.css"; // Optional: For styling

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     alert("Signup successful!");
//     // You can send data to backend here
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="signup-form">
//       <h2>Sign Up</h2>

//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={formData.username}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <div className="password-field">
//         <input
//           type={showPassword ? "text" : "password"}
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="eye-button"
//         >
//           {showPassword ? "🙈" : "👁️"}
//         </button>
//       </div>

//       <div className="password-field">
//         <input
//           type={showConfirmPassword ? "text" : "password"}
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="button"
//           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//           className="eye-button"
//         >
//           {showConfirmPassword ? "🙈" : "👁️"}
//         </button>
//       </div>

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignupForm;

// 2nd version

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SignupForm.css"; // Optional styling

// const SignupForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const email = localStorage.getItem("email");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:8080/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...form, email }),
//       });

//       if (res.ok) {
//         alert("Signup complete!");
//         navigate("/home");
//       } else {
//         alert("Error signing up");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       alert("An unexpected error occurred.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="signup-form">
//       <h2>Complete Signup</h2>

//       <input
//         name="name"
//         placeholder="Name"
//         value={form.name}
//         onChange={handleChange}
//         required
//       />

//       <div className="password-field">
//         <input
//           name="password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="eye-button"
//         >
//           {showPassword ? "🙈" : "👁️"}
//         </button>
//       </div>

//       <div className="password-field">
//         <input
//           name="confirmPassword"
//           type={showConfirmPassword ? "text" : "password"}
//           placeholder="Confirm Password"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="button"
//           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//           className="eye-button"
//         >
//           {showConfirmPassword ? "🙈" : "👁️"}
//         </button>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm;

// 3rd version

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"; // Optional styling

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8081/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, email }),
      });

      if (res.ok) {
        alert("Signup complete!");
        navigate("/home");
      } else {
        alert("Error signing up");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Complete Signup</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <div className="password-field">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="eye-button"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>

      <div className="password-field">
        <input
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="eye-button"
        >
          {showConfirmPassword ? "🙈" : "👁️"}
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
