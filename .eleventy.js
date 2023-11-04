module.exports = function (eleventyConfig) {
    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
