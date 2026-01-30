# Swift Track Backend (Express + MongoDB)

Backend for VIEW TRACK: auth (register/login) and user profiles. Replaces Supabase for these features.

## Prerequisites

- **Node.js** 18+
- **MongoDB** installed and running locally (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Setup

1. **Install MongoDB** (if not already):
   - Windows: [MongoDB Community Server](https://www.mongodb.com/try/download/community) or `winget install MongoDB.Server`
   - Mac: `brew install mongodb-community`
   - Or use MongoDB Atlas and set `MONGODB_URI` to your connection string.

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Environment**
   - Copy `.env.example` to `.env` in the `backend` folder.
   - Edit `.env`:
     - `MONGODB_URI` — e.g. `mongodb://127.0.0.1:27017/swift-track`
     - `JWT_SECRET` — change to a long random string in production
     - `PORT` — default `3000`
     - `CORS_ORIGIN` — optional; default `http://localhost:8080` (Vite dev server)

## Run

```bash
npm run dev
```

Server runs at `http://localhost:3000`. The frontend (port 8080) uses `VITE_API_URL=http://localhost:3000` (see project root `.env` or `vite.config`).

## API

- **POST** `/auth/register` — body: `{ email, password }` → creates user + profile, returns `{ user, token }`
- **POST** `/auth/login` — body: `{ email, password }` → returns `{ user, token }`
- **GET** `/auth/me` — header: `Authorization: Bearer <token>` → returns `{ user }`
- **GET** `/profiles/me` — auth required → returns profile
- **PATCH** `/profiles/me` — auth required, body: `{ company_name?, contact_name?, phone?, address?, vehicle_count? }` → returns updated profile

## Frontend env

In the **project root** (frontend), set in `.env`:

```
VITE_API_URL=http://localhost:3000
```

If unset, the frontend defaults to `http://localhost:3000`.
