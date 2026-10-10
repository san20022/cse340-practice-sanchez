
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const status = error.status || 500;
    res.status(status);

    if (process.env.NODE_ENV === "production") {
        return res.send(
            status === 404 ? "Page not found" : "Something went wrong."
        );
    }

    res.send(`
    <h1>${status} - ${error.message}</h1>
    <pre>${error.stack || ""}</pre>
  `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
