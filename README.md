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
├── src/               # JSON Server mock backend
│   └── db.json             # JSON file for CRUD data
```

---

## 🚀 How to Run the Project

### Step 1: Start the JSON Server

1. Open terminal and go to the db.json file in the src folder:
   ```bash
   cd foldername
   ```

2. Run JSON Server:
   ```bash
   npx json-server --watch db.json 
   ```

3. JSON Server will start at:
   ```
   http://localhost:3000
   ```

---

### Step 2: Run the React App

1. Open a new terminal and go to the `react-app` folder:
   ```bash
   cd react-app
   ```

2. Start the app:
   ```bash
   npm start
   ```

3. The React app will run at:
   ```
   http://localhost:3000
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

