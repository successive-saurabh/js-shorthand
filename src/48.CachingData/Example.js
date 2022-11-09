//Longhand
async function fetchData(url) {
  const data = await fetch(url).then((res) => res.json());
  return data;
}
async function getData() {
  await fetchData('url');
  await fetchData('url');
  await fetchData('url');
}
getData();

//Shorthand
const cache = {};
async function fetchData1(url) {
  if (cache.hasOwnProperty(url)) {
    return cache[url];
  }
  const data = await fetch(url).then((res) => res.json());
  cache[url] = data;
  return data;
}
async function getData1() {
  await fetchData1('url');
  await fetchData1('url');
  await fetchData1('url');
}
getData1();
