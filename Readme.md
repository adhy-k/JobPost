## Tech Stack

- Frontend: React, Bootstrap, Axios  
- Backend: Node.js, Express.js  
- Database: MongoDB  

---

## Setup Instructions

### Backend

1. Navigate to the backend folder:

cd backend

2. Install dependencies:

npm install

3. Update MongoDB connection string in server.js:

"mongodb+srv://adhy:kannan123@cluster0.v6yc0yl.mongodb.net/jobPost"

4. Start the backend server:

node server.js

The backend runs on **http://localhost:3030**


### Frontend

1. Navigate to the frontend folder:

cd frontend

2. Install dependencies:

npm install

3. Start the frontend server:

npm start


## API Endpoints

### POST /jobs
- **Description:** Add a new job  
- **Body:**

{
  "jobTitle": "Backend Developer",
  "companyName": "TCS",
  "Category": "Development",
  "location": "Bangalore",
  "description": "Node.js + MongoDB developer"
}

- **Response:**

{ "job posted": true }


### GET /viewjobs
- **Description:** Fetch all jobs  
- **Response:**
[
    {
        "_id": "694e8ad2e5829e7dabf8c75a",
        "jobTitle": "Web developer",
        "companyName": "Cisco",
        "Category": "Development",
        "location": "Kochi, Kerala",
        "description": "Mern Stack (ReactJs + Express + MongoDB + NodeJS)",
        "__v": 0
    }
]


