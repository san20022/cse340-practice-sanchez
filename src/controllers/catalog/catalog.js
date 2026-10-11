
import {
    getAllCatalog,
    getCatalogById,
} from "../../models/catalog/catalog.js";

const catalogListPage = (req, res) => {
    const catalog = getAllCatalog();

    res.render("catalog/list", {
        title: "Course Catalog",
        catalog,
    });
};

const catalogDetailPage = (req, res, next) => {
    const courseId = req.params.courseId;
    const course = getCatalogById(courseId);

    if (!course) {
        const error = new Error("Course not found");
        error.status = 404;
        return next(error);
    }

    res.render("catalog/detail", {
        title: course.name,
        course,
    });
};

export { catalogListPage, catalogDetailPage };
