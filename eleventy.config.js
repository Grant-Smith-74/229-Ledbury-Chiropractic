const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");
const { minify } = require("terser");
const { PurgeCSS } = require('purgecss');

module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"));

    /**
     * Remove any CSS not used on the page and inline the remaining CSS in the
     * <head>.
     *
     * @see {@link https://github.com/FullHuman/purgecss}
     */
    eleventyConfig.addTransform('purge-and-inline-css', async (content, outputPath) => {
      if (process.env.ELEVENTY_ENV !== 'production' || !outputPath.endsWith('.html')) {
        return content;
      }

      const purgeCSSResults = await new PurgeCSS().purge({
        content: [{ raw: content }],
        css: ['dist/assets/css/critical.css'],
        keyframes: true,
      });

      return content.replace('<!-- INLINE CSS-->', '<style>' + purgeCSSResults[0].css + '</style>');
    });

    // Inline JS into Footer
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
      code,
      callback
    ) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    });

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
    eleventyConfig.addPassthroughCopy({'src/_includes/css': 'assets/css'});

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