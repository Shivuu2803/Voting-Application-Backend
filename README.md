# Voting Application Backend

## 📌 About the Project
The **Voting Application Backend** is a Node.js and Express-based backend that allows users to securely cast votes for a given set of candidates. It ensures a fair voting process where each user can vote only once, and an admin manages the candidates. The application uses **MongoDB** as the database and supports authentication via an Aadhar card number and password.

## 🚀 Features
- **User Authentication**: Users can sign up and log in using their Aadhar card number and password.
- **Vote Once**: Users can only vote once for a candidate.
- **Candidate List**: Fetch the list of candidates.
- **Live Vote Counts**: Get candidates ranked by vote count in real-time.
- **Admin Role**: Admins can manage the candidate list but cannot vote.
- **Change Password**: Users can update their password securely.

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT), bcrypt
- **Environment Variables**: dotenv

## 📂 API Routes

### **User Authentication**
| Method | Endpoint        | Description                        |
|--------|---------------|------------------------------------|
| POST   | `/signup`      | Register a new user.              |
| POST   | `/login`       | Log in with Aadhar card & password. |

### **Voting Functionalities**
| Method | Endpoint               | Description                                |
|--------|------------------------|--------------------------------------------|
| GET    | `/candidate`          | Fetch the list of candidates.             |
| POST   | `/vote/:candidateId`   | Vote for a specific candidate.            |
| GET    | `/vote/counts`         | Get candidates ranked by vote count.      |

### **User Profile**
| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/profile`            | Get user profile details.         |
| PUT    | `/profile/password`   | Change user password.             |

### **Admin Candidate Management**
| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | `/candidate`           | Add a new candidate.                |
| PUT    | `/candidate/:candidateId` | Update candidate details.         |
| DELETE | `/candidate/:candidateId` | Remove a candidate.               |

## 🔐 User Roles
- **User**: Can vote once, view candidates, and change password.
- **Admin**: Can manage candidates but cannot vote.

## 🔧 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Shivuu2803/Voting-Application-Backend.git
   cd Voting-Application-Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. The server will run at: `http://localhost:3000`

## 🤝 Contributing
Feel free to fork the repository and submit pull requests!


---
### 🚀 Happy Coding! 🎉

