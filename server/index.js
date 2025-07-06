import "dotenv/config";
import express from "express";
import passport from "./api/passport.js"; // Import your passport config FIRST
import cors from "cors";
import { router as authRoutes } from "./api/routes.js";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mathissimple",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 12 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// Initialize passport AFTER session but BEFORE routes
app.use(passport.initialize());
app.use(passport.session());

// Now import and use routes
app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
