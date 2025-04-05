import React, { useRef, useState } from "react";

function MockReg() {
    const idRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const rollNumberRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [isViewing, setIsViewing] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const getFormData = () => ({
        id: idRef.current.value,
        name: nameRef.current.value,
        age: ageRef.current.value,
        rollNumber: rollNumberRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value
    });

    const validateForm = (formData) => {
        if (Object.values(formData).some(field => field.trim() === "")) {
            alert("Please fill out all fields.");
            return false;
        }

        if (!isChecked) {
            alert("Please accept the declaration to proceed.");
            return false;
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            alert("Name must contain only letters and spaces.");
            return false;
        }

        if (!/^\d+$/.test(formData.age)) {
            alert("Age must contain only numbers.");
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            alert("Invalid email format.");
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        return true;
    };

    const postData = () => {
        const formData = getFormData();

        if (!validateForm(formData)) return;

        fetch(`http://localhost:3000/students/${formData.id}`)
            .then(response => response.status === 404 ? null : response.json())
            .then(existingData => {
                if (existingData) {
                    alert("ID already exists. Please use a different ID.");
                    return;
                }

                return fetch("http://localhost:3000/students", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
            })
            .then(response => {
                if (response?.ok) {
                    alert("Registration successful");
                    resetForm();
                } else if (response) {
                    alert("Registration failed");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred during registration");
            });
    };

    const putData = () => {
        const formData = getFormData();

        if (!validateForm(formData)) return;

        fetch(`http://localhost:3000/students/${formData.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    alert("Update successful");
                    setIsViewing(false);
                    resetForm();
                } else {
                    alert("Update failed");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred during update");
            });
    };

    const delData = () => {
        const id = idRef.current.value;
        if (!id) {
            alert("Please enter an ID to delete.");
            return;
        }

        fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    alert("Deletion successful");
                    setIsViewing(false);
                    resetForm();
                } else {
                    alert("Deletion failed");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred during deletion");
            });
    };

    const viewData = () => {
        const id = idRef.current.value.trim();
        if (!id) {
            alert("Please enter an ID to view.");
            return;
        }

        fetch(`http://localhost:3000/students/${id}`)
            .then(response => {
                if (response.ok) return response.json();
                if (response.status === 404) {
                    alert("No data found for the given ID");
                    throw new Error("No data");
                }
                throw new Error("Error fetching data");
            })
            .then(data => {
                nameRef.current.value = data.name;
                ageRef.current.value = data.age;
                rollNumberRef.current.value = data.rollNumber;
                emailRef.current.value = data.email;
                phoneNumberRef.current.value = data.phoneNumber;
                passwordRef.current.value = data.password;
                confirmPasswordRef.current.value = data.confirmPassword;
                setIsViewing(true);
            })
            .catch(error => console.error(error));
    };

    const resetForm = () => {
        idRef.current.value = "";
        nameRef.current.value = "";
        ageRef.current.value = "";
        rollNumberRef.current.value = "";
        emailRef.current.value = "";
        phoneNumberRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
        setIsViewing(false);
        setIsChecked(false);
        setNameError("");
        setEmailError("");
        setPasswordError("");
    };

    return (
        <div className="form-container">
            <form autoComplete="off">
                <h1>Registration <span>Form</span></h1>

                <div className="form-row">
                    <div className="form-col"><input type="text" ref={idRef} placeholder="Id" /></div>
                    <div className="form-col">
                        <input
                            type="text"
                            ref={nameRef}
                            placeholder="Name"
                            onChange={() => {
                                const value = nameRef.current.value;
                                if (!/^[a-zA-Z\s]*$/.test(value)) {
                                    setNameError("Name must contain only letters and spaces.");
                                } else {
                                    setNameError("");
                                }
                            }}
                        />
                        {nameError && <small style={{ color: "red" }}>{nameError}</small>}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <input
                            type="text"
                            ref={ageRef}
                            placeholder="Age"
                            onChange={() => {
                                const value = ageRef.current.value;
                                const isValid = /^\d*$/.test(value);
                                if (!isValid && value !== "") {
                                    ageRef.current.value = value.replace(/\D/g, "");
                                }
                            }}
                        />
                    </div>
                    <div className="form-col"><input type="text" ref={rollNumberRef} placeholder="Roll Number" /></div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <input
                            type="email"
                            ref={emailRef}
                            placeholder="Email"
                            onChange={() => {
                                const value = emailRef.current.value;
                                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (!pattern.test(value)) {
                                    setEmailError("Invalid email format.");
                                } else {
                                    setEmailError("");
                                }
                            }}
                        />
                        {emailError && <small style={{ color: "red" }}>{emailError}</small>}
                    </div>
                    <div className="form-col">
                        <input
                            type="text"
                            ref={phoneNumberRef}
                            placeholder="Phone Number"
                            onChange={() => {
                                const value = phoneNumberRef.current.value;
                                const isValid = /^\d*$/.test(value);
                                if (!isValid && value !== "") {
                                    phoneNumberRef.current.value = value.replace(/\D/g, "");
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <input
                            type="password"
                            ref={passwordRef}
                            placeholder="Password"
                            onChange={() => {
                                const pw = passwordRef.current.value;
                                const cpw = confirmPasswordRef.current.value;
                                if (cpw && pw !== cpw) {
                                    setPasswordError("Passwords do not match.");
                                } else {
                                    setPasswordError("");
                                }
                            }}
                        />
                    </div>
                    <div className="form-col">
                        <input
                            type="password"
                            ref={confirmPasswordRef}
                            placeholder="Confirm Password"
                            onChange={() => {
                                const pw = passwordRef.current.value;
                                const cpw = confirmPasswordRef.current.value;
                                if (pw !== cpw) {
                                    setPasswordError("Passwords do not match.");
                                } else {
                                    setPasswordError("");
                                }
                            }}
                        />
                        {passwordError && <small style={{ color: "red" }}>{passwordError}</small>}
                    </div>
                </div>

                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="declaration"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label htmlFor="declaration">
                        I hereby declare that the above information is true and correct
                    </label>
                </div>

                {!isViewing ? (
    <div className="btn-center">
        <button type="button" className="btn btn1" onClick={viewData}>View</button>
        <button type="button" className="btn btn2" onClick={postData}>Register</button>
    </div>
) : (
    <div className="btn-center">
        <button type="button" className="btn btn3" onClick={putData}>Update</button>
        <button type="button" className="btn btn4" onClick={delData}>Delete</button>
        <button type="button" className="btn btn5" onClick={resetForm}>Cancel</button>
    </div>
)}

            </form>
        </div>
    );
}

export default MockReg;
