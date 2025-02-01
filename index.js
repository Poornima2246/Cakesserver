 


// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import path from "path";
// // import { connectDB } from "./config/db.js";
// // import CakeRoute from "./routes/CakeRoute.js";

// // dotenv.config(); // Load environment variables from .env file

// // const app = express();
// // const port = process.env.PORT || 4000;

// // // ======== Middleware ========
// // app.use('/upload', express.static('upload')); // Serve uploaded images
// // app.use(express.json()); // Parse JSON requests
// // app.use(cors({ origin: '*' })); // Enable CORS for all origins

// // // ======== Database Connection ========
// // connectDB(); // Connect to MongoDB using the config/db.js file

// // // ======== API Routes ========
// // app.use("/api/dessert", CakeRoute); // Route for dessert-related APIs

// // // ======== Serve Static Frontend ========
// // const __dirname = path.resolve(); // Resolve the current directory
// // app.use(express.static(path.join(__dirname, "../foodcort/build"))); // Serve static React files

// // // ======== Fallback for SPA ========
// // app.get("*", (req, res) => {
// //   res.send(" hello connected")
// //   res.sendFile(path.join(__dirname, "../foodcort/build", "index.html"));
// //   console.log("server connected");
  
// // });

// // // ======== Start Server ========
// // app.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}`);
// // }); 
 

// //new file 

// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import path from "path";
// // import { connectDB } from "./config/db.js";
// // import CakeRoute from "./routes/CakeRoute.js";

// // dotenv.config(); // Load environment variables from .env file

// // const app = express();
// // const port = process.env.PORT || 4000;

// // // ======== Middleware ========
// // app.use('/upload', express.static('upload')); // Serve uploaded images
// // app.use(express.json()); // Parse JSON requests
// // app.use(cors({ origin: '*' })); // Enable CORS for all origins

// // // ======== Database Connection ========
// // connectDB(); 

// // // ======== API Routes ========
// // app.use("/api/dessert", CakeRoute); // Route for dessert-related APIs

// // // ======== Serve Static Frontend ========
// // const __dirname = path.resolve(); // Resolve the current directory
// // app.use(express.static(path.join(__dirname, "../foodcort/build"))); // Serve static React files

// // // ======== Fallback for SPA ========
// // app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../foodcort/build", "index.html"));
// // });

// // // ======== Start Server ========
// // app.listen(port, () => {
// //     console.log(`Server running at http://localhost:${port}`);
// // });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { connectDB } from "./config/db.js";
// import CakeRoute from "./routes/CakeRoute.js";

// dotenv.config(); // Load environment variables from .env file

// const app = express();
// const port = process.env.PORT || 4000;

// // ===== Middleware =====
// app.use('/upload', express.static('upload')); // Serve uploaded images
// app.use(express.json()); // Parse JSON requests
// app.use(cors({ origin: '*' })); // Enable CORS for all origins

// // ===== Database Connection =====
// connectDB();

// // ===== API Routes =====
// app.use("/api/dessert", CakeRoute); // Dessert-related API routes

// // ===== Serve React Frontend =====
// const __dirname = path.resolve(); // Resolve the current directory
// const frontendBuildPath = path.join(__dirname, "foodcort/build");

// app.use(express.static(frontendBuildPath)); // Serve static files from the React build directory

// // Catch-all route to serve the React app
// // app.get("*", (req, res) => {
// //     res.sendFile(path.join(frontendBuildPath, "index.html"));
// // });

// app.get("*", (req, res) => {
//     res.send(" hello connected")
//     res.sendFile(path.join(__dirname, "../foodcort/build", "index.html"));

// });

// // ===== Start Server =====
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// import dotenv from "dotenv";
// import express from "express";
// import multer from "multer";
// import { v2 as cloudinary } from "cloudinary";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

// // Load Environment Variables
// dotenv.config();

// // Initialize Express App
// const app = express();

// // Middleware
// app.use(cors({ origin: '*' }));
// app.use(bodyParser.json());
// app.use(express.json());

// // MongoDB Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection error:", error.message);
//         process.exit(1); // Exit with failure
//     }
// };
// connectDB();

// // Cloudinary Configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Multer Storage Configuration for Cloudinary
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "products", // Cloudinary folder
//         allowed_formats: ["jpg", "png", "jpeg"], // File format validation
//     },
// });
// const upload = multer({ storage });

// // Define Mongoose Schema and Model for Product
// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: String, required: true },
//     category: { type: String, required: true },
//     image: { type: String, required: true }, // URL to Cloudinary image
// });

// const Product = mongoose.model("Product", productSchema);

// // Routes
// app.get("/", (req, res) => {
//     res.send("Welcome to the Cloudinary API");
// });

// // Add Product Route
// app.post("/products", upload.single("image"), async (req, res) => {
//     try {
//         // Log the request body and file
//         console.log("Request Body:", req.body);
//         console.log("Uploaded File:", req.file);

//         // Ensure file upload succeeded
//         if (!req.file) {
//             return res.status(400).json({ message: "Image upload failed. No file received." });
//         }

//         const { name, description, price, category } = req.body;

//         // Validate required fields
//         if (!name || !description || !price || !category) {
//             return res.status(400).json({ message: "All fields are required." });
//         }

//         // Create New Product Object
//         const newProduct = new Product({
//             name,
//             description,
//             price,
//             category,
//             image: req.file.path, // Store Cloudinary file URL
//         });

//         // Save the product to MongoDB
//         await newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error("Server Error:", error); // Log detailed error message
//         res.status(500).json({
//             message: "Internal server error",
//             error: error.message,
//             stack: error.stack,
//         });
//     }
// });

// // Get All Products
// app.get("/products", async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         console.error("Error fetching products:", error.message);
//         res.status(500).json({ error: error.message });
//     }
// });

// // Get Single Product by ID
// app.get("/products/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ success: false, message: "Product not found" });
//         }
//         res.json(product);
//     } catch (error) {
//         console.error("Error fetching product:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// });
// // Start Server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import helmet from "helmet";
import winston from "winston";

// Load Environment Variables
dotenv.config();

// Validate Required Environment Variables
const requiredEnvVars = ["MONGO_URI", "CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"];
for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(`Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
}

// Initialize Express App
const app = express();

// CORS Configuration
const allowedOrigins = ["https://poornima2246.github.io"];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    })
);

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(bodyParser.json({ limit: "10kb" })); // Limit request size
app.use(express.json());

// Logger Configuration
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "server.log" }),
    ],
});

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info("MongoDB connected successfully");
    } catch (error) {
        logger.error(`MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};
connectDB();

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Storage Configuration for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "products", // Cloudinary folder
        allowed_formats: ["jpg", "png", "jpeg"], // File format validation
    },
});
const upload = multer({ storage });

// Define Mongoose Schema and Model for Product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // URL to Cloudinary image
});

const Product = mongoose.model("Product", productSchema);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Cloudinary API");
});

// Add Product Route
app.post("/products", upload.single("image"), async (req, res) => {
    try {
        // Log the request body and file
        logger.info("Request Body:", req.body);
        logger.info("Uploaded File:", req.file);

        // Ensure file upload succeeded
        if (!req.file) {
            return res.status(400).json({ message: "Image upload failed. No file received." });
        }

        const { name, description, price, category } = req.body;

        // Validate required fields
        if (!name || !description || !price || !category) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create New Product Object
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            image: req.file.path, // Store Cloudinary file URL
        });

        // Save the product to MongoDB
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        logger.error(`Server Error: ${error.message}`, { stack: error.stack });
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
});

// Get All Products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        logger.error(`Error fetching products: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
});

// Get Single Product by ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        logger.error(`Error fetching product: ${error.message}`);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    logger.error(`Unhandled Error: ${err.message}`, { stack: err.stack });
    res.status(500).json({ message: "Internal server error" });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});