module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("data");
  eleventyConfig.addPassthroughCopy("images");
};

//   return {
//     dir: {
//       input: ".",             // HTMLs estão na raiz
//       includes: "includes",   // onde estão seus partials (ex: header, footer)
//       output: "site"          // pasta final de saída
//     }
//   };
// };