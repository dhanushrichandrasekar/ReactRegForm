## 📋 React Registration Form with CRUD & Validations

This project is a responsive and aesthetic registration form built using React, offering full CRUD functionality with a mock backend powered by JSON Server. It also features comprehensive form validations to ensure the integrity and correctness of user input.

![Registration Form Screenshot](https://github.com/dhanushrichandrasekar/ReactRegForm/blob/f40760f1c8cf5b4f0ecf23101492a8497b986968/RegistrationForm.png)

## 🎥 Video Demo 

[ReactJS CRUD Operations Demo on LinkedIn](https://www.linkedin.com/posts/dhanushri17_reactjs-crudoperations-jsonserver-activity-7314321371356954625-3Iup?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwzmgQB6ZTXFKAOY_iedZyW-cz7_cCUQ-g)

---

## 📁 Folder Structure

```
ReactRegForm/
├── react-app/              # React frontend project
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── MockReg.js
│       ├── CrudStyle.css
│       └── index.css
├── src/                    # JSON Server mock backend
│   └── db.json             # JSON file for CRUD data
```

---

# ✅ Steps to Clone Your React CRUD Registration Form Project

1. **Open Terminal / PowerShell / Git Bash**

2. **Navigate to the Folder Where You Want the Project**
```bash
cd path/to/your/folder
```

3. **Clone the Repository**
```bash
git clone https://github.com/dhanushrichandrasekar/ReactRegForm.git
```

4. **Go Into the Project Folder**
```bash
cd ReactRegForm
```

5. **Install the Dependencies**
```bash
npm install
```

6. **Start the Mock JSON Server (in one terminal)**
> Make sure you’ve installed json-server globally:
```bash
npm install -g json-server
```

Save the db.json file in a folder(ex: src) in a separate react app and run :
```bash
json-server --watch foldername/db.json
```

⚠️ Adjust the path if your `db.json` is in another folder (like `mock-backend`).

7. **Start the React App (in another terminal)**
```bash
npm start
```
---

## ✨ Features

✅ **Create**, **Read**, **Update**, and **Delete**  records
✅ **Real-time form validation** for:
- Empty fields
- Valid email format
- Name containing only letters and spaces
- Numeric-only input for age and phone number
- Password and confirm password match
✅ **Inline error messages** for user-friendly guidance
✅ **Checkbox declaration validation** before form submission
✅ **Toggleable button states** based on view/update mode

---

## 🛠 Tech Stack
- React (useRef, useState)
- JSON Server (for mock backend API)
- Fetch API (for HTTP requests)
- CSS (for styling the form layout and buttons)

---

## 📦 Dependencies Installation

Run this in `react-app` folder:

```bash
npm install
```

If you're using Axios:
```bash
npm install axios
```

---

## 🧠 Notes

- JSON Server must be running for backend to work
- All registration data is stored in `db.json`

---

## 👩‍💻 Author

Created by **Dhanushri Chandrasekar**  
GitHub: [@dhanushrichandrasekar](https://github.com/dhanushrichandrasekar)

