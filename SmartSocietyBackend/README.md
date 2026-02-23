# Smart-Society-Backend

🔹 Backend Description

SmartSocietyBackend ek RESTful API system hai jo Node.js, Express.js, aur MongoDB par based hai.
Iska use society management system ke liye secure authentication, data handling, aur role-based access control ke liye kiya gaya hai.

Backend frontend (React Native App) ko APIs ke through connect karta hai aur saara data MongoDB database me store hota hai.

🛠️ Technologies Used

Node.js

Express.js

MongoDB (Mongoose ODM)

JWT Authentication

Bcrypt.js (Password Security)

dotenv (Environment Variables)

📂 Project Structure (Example)
SmartSocietyBackend/
│
├── config/         → Database Config
├── models/         → MongoDB Schemas
├── routes/         → API Routes
├── controllers/    → Business Logic
├── middleware/     → Auth Middleware
├── .env            → Environment Variables
├── server.js / app.js
└── package.json
🚀 How to Run Backend (For New Members)

Ye guide har naye developer ke liye hai jo repo clone karega 👇

✅ Step 1: Install Node.js

Check karo Node.js installed hai ya nahi:

node -v
npm -v

Agar version aa jaye → OK ✅
Nahi aaye → Node.js install karo from nodejs.org

✅ Step 2: Clone Repository

GitHub se project clone karo:

git clone <your-repo-link>

Example:

git clone https://github.com/username/SmartSocietyBackend.git
✅ Step 3: Go to Backend Folder
cd SmartSocietyBackend
✅ Step 4: Install Dependencies
npm install

👉 Ye package.json se saare required packages install karega.

✅ Step 5: Create .env File (Important)

Root folder me .env file banao:

SmartSocietyBackend/
   └── .env

Andar ye likho:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smartsociety
JWT_SECRET=your_secret_key

👉 your_secret_key koi bhi strong string ho sakta hai.

✅ Step 6: Start MongoDB
Local MongoDB ho to:
mongod

Ya MongoDB Compass open karo.

Agar Atlas use kar rahe ho:

To MONGO_URI me Atlas link paste karo.

✅ Step 7: Run Server
Normal Mode
npm start
Development Mode (Nodemon)
npm run dev
✅ Step 8: Check Server

Browser me open karo:

http://localhost:5000

Ya Postman se API test karo.

Agar message aaye:

Server running on port 5000
DB Connected

👉 Matlab backend sahi chal raha hai 🎉

📌 For New Team Members (Short Guide)
git clone <repo-url>
cd SmartSocietyBackend
npm install
cp .env.example .env   # (agar ho)
npm start
