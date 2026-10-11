
const catalog = [
    {
        id: "cs121",
        name: "Introduction to Programming",
        department: "Computer Science",
    },
];

const getAllCatalog = () => {
    return catalog;
};

const getCatalogById = (courseId) => {
    return catalog.find((course) => course.id === courseId) || null;
};

export { getAllCatalog, getCatalogById };
