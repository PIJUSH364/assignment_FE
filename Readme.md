# User Management Dashboard

## Description

A user management dashboard with essential functionalities like filtering, sorting, pagination, user detail view, and account actions.

## Features

### Dashboard Features:

- Filterable and sortable user list.
- Clear display of user status (Active/Inactive).
- Basic search functionality.
- Pagination with configurable page size.
- Bulk selection capabilities.

### User Detail View:

- Display of basic user information.
- Role assignment dropdown.
- Account status toggle.
- "Last active" timestamp.
- "Created on" date.

### User Action Buttons:

- Deactivate/Activate account.
- Delete account.
- Edit permissions.

### New User Workflow:

- Form with validation.
- Role selection.
- Success and error states.

## API Endpoints

### Base URL

```
http://localhost:8001/api/v1/
```

### User APIs

- **Create User:** `POST /user/create_user`
- **Update User:** `PUT /user/update_user`
- **Delete User:** `DELETE /user/delete_user`
- **Get User By ID:** `GET /user/get_user/:id`
- **Get All Users:** `GET /user/get_all_users`
- **Search User Details:** `POST /user/search_user_details`
- **Filter User Data:** `POST /user/filter_user_data`
- **Pagination Data:** `GET /user/get_user_data`

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/PIJUSH364/contact_management_FE.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-project-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Environment Variables

To configure environment variables, follow these steps:

1. Create a `.env` file in the root directory of the project if it does not already exist.
2. Add the following variable to the file:

   ```sh
   VITE_BASE_BE_URL=<your-backend-api-url>
   ```

   Replace `<your-backend-api-url>` with the URL of your backend API.

## Running the Project

### Development Mode

To start the project in development mode with hot-reloading enabled, run the following command:

```sh
npm run dev
```

## Tech Stack

- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL/MongoDB
- **UI Library:** TailwindCSS

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
