const fs = require('fs');
const generatePage = require('./src/page-template.js');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;


// const generatePage = () => 'Name: Jane, github: janejub';
// console.log(generatePage());

// const generatePage = (userName, githubName) => {
//   return `
//   Name: ${userName}
//   Github: ${githubName}
//   `;
// };

// move generatePage function src page-template.js
// const generatePage = (name, github) => {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content = "width=device-width, initial-scale=1.0">
//       <meta jtt[-eqiov="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
// </head>

// </body>
//  <h1>${name}</h1>
//    <h2><a href="https://github.com/${github}">Github</a></h2>
//  </body>
//  </html>
// ;`
// };

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the ouptut!')
});


// console.log(generatePage('Jane', 'janehub'));
// console.log(name, github);
// console.log(generatePage(name, github));

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

// Is the same as this...
// profileDataArr.forEach((profileItem) => {
//   console.log(profileItem)
// });
// };

// const printProfileData = (profileDataArr) => {
//   console.log(profileDataArr);
// };

// const printProfileData = profileDataArr => {
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);



