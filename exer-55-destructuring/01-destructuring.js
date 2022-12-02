const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
};

function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42

// Nested Unpacked - fullname.firstName unpacked into var name
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane

// =======================================================================
// NESTED OBJECT AND ARRAY DESTRUCTURING
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localizationTags: [],
      lastEdit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung',
    },
  ],
  url: '/en-US/docs/Tools/Scratchpad',
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

