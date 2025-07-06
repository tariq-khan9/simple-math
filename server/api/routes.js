import { Router } from "express";
import passport from "passport";
import { prisma } from "./prismaClient.js";

export const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL, //process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.post(
  "/login-local",
  passport.authenticate("local"), // Make sure this matches the strategy name
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: req.user,
    });
  }
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "login failed",
  });
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "user logged in successfully",
      user: req.user,
      // cookies: req.cookies,
    });
  }
});

router.post("/logout", (req, res, next) => {
  // Logout the user (passport)
  req.logout((err) => {
    if (err) return next(err);

    // Destroy the session
    req.session.destroy((err) => {
      if (err) return next(err);

      // Clear the session cookie (default is 'connect.sid')
      res.clearCookie("connect.sid", {
        path: "/", // same as session path
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production", // only in production over HTTPS
      });

      return res.status(200).json({ message: "Logout successful" });
    });
  });
});

router.get("/session", (req, res) => {
  if (req.isAuthenticated()) {
    // If the user is authenticated, return user info
    res.json({ user: req.user });
  } else {
    // If not authenticated, return null or a message
    res.status(401).json({ user: null, message: "Not authenticated" });
  }
});

// controllers/userController.js
// router.post("/update-states", async (req, res) => {
//   const [singleState] = req.body; // req.body is an array
//   console.log("state data ", singleState);
//   const { userId, operation_id, difficulty_level, attempts, successes } =
//     singleState;

//   // if (
//   //   !userId ||
//   //   !operation_id ||
//   //   !difficulty_level ||
//   //   !attempts ||
//   //   !successes
//   // ) {
//   //   return res.status(400).json({ message: "Missing required fields." });
//   // }

//   try {
//     const userState = await prisma.userStates.create({
//       data: {
//         userId: userId,
//         operationId: operation_id,
//         difficultyLevel: difficulty_level,
//         attempts: attempts,
//         successes: successes,
//       },
//     });

//     res
//       .status(200)
//       .json({ message: "State saved successfully", data: userState });
//   } catch (error) {
//     console.error("Error saving state:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.post("/update-states", async (req, res) => {
  const statesArray = req.body; // now handling multiple objects

  try {
    const results = await Promise.all(
      statesArray.map(async (state) => {
        const { userId, operation_id, difficulty_level, attempts, successes } =
          state;

        const existing = await prisma.userStates.findFirst({
          where: {
            userId: userId,
            operationId: operation_id,
            difficultyLevel: difficulty_level,
          },
        });

        if (existing) {
          // Update: increment attempts and possibly successes
          return await prisma.userStates.update({
            where: { id: existing.id },
            data: {
              attempts: existing.attempts + attempts,
              successes: successes
                ? existing.successes + successes
                : existing.successes,
            },
          });
        } else {
          // Create new
          return await prisma.userStates.create({
            data: {
              userId: userId,
              operationId: operation_id,
              difficultyLevel: difficulty_level,
              attempts: attempts,
              successes: successes,
            },
          });
        }
      })
    );

    return res.status(200).json({
      message: "States processed successfully",
      data: results,
    });
  } catch (error) {
    console.error("Error processing states:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/states/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const states = await prisma.userStates.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    res.status(200).json(states);
  } catch (error) {
    console.error("❌ Failed to fetch states:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
