
import express from "express";

import {
    facultyListPage,
    facultyDetailPage,
} from "./controllers/faculty/faculty.js";

import {
    catalogListPage,
    catalogDetailPage,
} from "./controllers/catalog/catalog.js";

const router = express.Router();
router.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to the Faculty Directory</h1>
        <p>Your application is running successfully.</p>
        <p><a href="/faculty">View Faculty Directory</a></p>
        <p><a href="/catalog">View Course Catalog</a></p>
    `);
});
// Faculty Directory
router.get("/faculty", facultyListPage);
router.get("/faculty/:facultyId", facultyDetailPage);

// Course Catalog
router.get("/catalog", catalogListPage);
router.get("/catalog/:courseId", catalogDetailPage);

export default router;
