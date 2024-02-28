function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of iter()) {
  console.log(k);
}
