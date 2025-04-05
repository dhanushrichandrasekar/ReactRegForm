# React Registration Form with JSON Server

This project is a simple and aesthetic registration form built using **React** with full CRUD functionality using a mock backend powered by **JSON Server**.

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

- CRUD (Create, Read, Update, Delete)
- Aesthetic form design
- Uses mock backend with JSON Server

---

## 🔧 Technologies Used

- React
- JavaScript (Fetch Api)
- CSS
- JSON Server

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

