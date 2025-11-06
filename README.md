📝 Angular Task Tracker

This is a simple, standalone Task Tracker application built with Angular and using json-server as a mock REST API backend. It allows users to add tasks, set reminders, and delete tasks.

This project uses modern Angular features, including Standalone Components and Signals, and follows best practices for component communication and service-based data fetching.

🚀 Features

View Tasks: Fetches and displays a list of tasks from the backend.

Add Tasks: Allows users to input a new task, day/time, and reminder status.

Delete Tasks: Permanently removes a task via an API call.

Toggle Reminder: Double-clicking a task toggles its reminder status (green border), persisting the change to the backend.

⚙️ Prerequisites

You must have Node.js and npm installed on your machine.

🛠️ Installation and Setup

This application requires two separate terminals to run the frontend and the mock backend concurrently.

1. Clone the Repository

git clone <repository_url>
cd <project-folder-name>


2. Install Dependencies

Install all required Angular and json-server packages:

npm install


3. Start the Mock Backend (JSON Server)

In your first terminal, run the mock API server. This server reads data from db.json and runs on port 5000.

npm run serve:api
# Or based on your package.json:
# npm run serve


Note: The exact script name may vary. Based on your package.json, the command is npm run serve which starts both the Angular dev server and the json-server. If that's the case, you only need to run the next step.

4. Start the Angular Application (Frontend)

In your second terminal (or the same one, depending on your setup), start the Angular development server:

ng serve


The application will be accessible at http://localhost:4200/.

📁 Project Structure Highlights

The application follows a standard Angular structure with components for the main parts of the UI, and a dedicated service for data management.

src/
 ├─ app/
 │  ├─ components/
 │  │  ├─ add-task/     # Form logic for creating new tasks
 │  │  ├─ header/       # App title
 │  │  ├─ tas-k-item/   # Individual task display/interaction (delete, toggle)
 │  │  ├─ tasks/        # Container component that manages task state and data flow
 │  ├─ services/
 │  │  ├─ task-service.ts # Handles all HttpClient calls (GET, POST, DELETE, PUT)
 │  ├─ Task.ts         # TypeScript interface defining the Task structure


🎨 Styling

Styling is handled using standard CSS, defining a clean, focused look appropriate for a task management application.
