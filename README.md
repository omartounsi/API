# User List Application

This is a simple React application that fetches and displays a list of users from an external API using Axios. The project is set up using Vite for fast development and includes ESLint for code linting.

## Project Structure
Collecting workspace informationHere is a README.md file for your project:

```md
# User List Application

This is a simple React application that fetches and displays a list of users from an external API using Axios. The project is set up using Vite for fast development and includes ESLint for code linting.

## Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
public/
	vite.svg
src/
	App.css
	App.jsx
	index.css
	main.jsx
	UserList.jsx
	assets/
		react.svg
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/omar-tounsi/
   cd user-list-app
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:
```sh
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost`.

### Building the Application

To build the application for production, run:
```sh
npm run build
```

The built files will be output to the `dist` directory.

### Linting the Code

To lint the code using ESLint, run:
```sh
npm run lint
```

## Project Details

### `UserList.jsx`

The `UserList` component fetches a list of users from `https://jsonplaceholder.typicode.com/users` and displays them in a table.

### `App.jsx`

The `App` component renders the `UserList` component.

### `main.jsx`

The entry point of the application, which renders the `App` component into the DOM.