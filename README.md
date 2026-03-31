<div align="center">
  <h1>Music-Social-Platform</h1>
  <p>(Brief Description of the Project)</p>
</div>

## 📝 Team Members

- Christina
- Elias
- Ayla
- Kevin
- Edsel

## 🛠 Tools & Technologies

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Auth:** bcrypt, express-session

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed on your computer:

- [Node.js](https://nodejs.org) (download the LTS version)

To verify Node.js is installed, open your terminal and run:

```bash
node -v
npm -v
```

Both should print version numbers.

---

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/Devaloupe/Music-Social-Platform.git
cd Music-Social-Platform
```

**2. Install backend dependencies** (run this in the root folder):
 
```bash
npm install
```

**3. Install frontend dependencies:**
 
```bash
cd frontend
npm install
cd ..
```

**4. Create a `.env` file** in the root of the project folder

> The '.env' file should never be pushed to GitHub due to security reasons.  In which case, please contact one of the repository owners or contributors to receive the `.env` contents, then create the file manually on your device.

---

### Running the Project
 
You need **two terminals** open at the same time:
 
**Terminal 1 — Start the backend server:**
 
```bash
node Server/server.js
```
 
You should see:
```
Server running on port 3001
MongoDB connected!
```
 
**Terminal 2 — Start the React frontend:**
 
```bash
cd frontend
npm start
```
 
React will automatically open your browser at `http://local host:3000`
 
> Both servers must be running at the same time for the app to work.
 
---

## 📸 Pictures / Videos

( Images or Videos of the website and how to use it so people can use our website without any trouble)