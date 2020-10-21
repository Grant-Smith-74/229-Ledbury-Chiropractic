const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");

module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"));

    // Minify our HTML - During development this can be quite annoying.
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if ( outputPath.endsWith(".html") )
      {
          let minified = htmlmin.minify(content, {
              useShortDoctype: true,
              removeComments: true,
              collapseWhitespace: true
          })
          return minified
      }
      return content
    });

    // Generate Sitemap
    eleventyConfig.addPlugin(sitemap, {
      sitemap: {
        hostname: "https://ledburychiropractic.co.uk",
      },
    });

    // Limit Filter for NunJucks
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    // Include our static assets
    eleventyConfig.addPassthroughCopy({'src/_includes/resources/img': 'assets/img'});
    eleventyConfig.addPassthroughCopy({'src/_includes/resources/svg': 'assets/svg'});
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy({'src/_includes/fonts': '/fonts'});
    eleventyConfig.addPassthroughCopy({'src/_includes/downloads': '/downloads'});
    eleventyConfig.addPassthroughCopy({'src/_includes/favicon': '/favicon'});

    return {
        templateFormats: ['md', 'njk'],
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            data: '_data'
        }
    }
}
