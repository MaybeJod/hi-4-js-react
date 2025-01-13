// TODO: Set item in localStorage
localStorage.setItem("key", "value");

// TODO: Get item from localStorage
let getItem = localStorage.getItem("key");

// TODO: Remove item from localStorage
localStorage.removeItem("key");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
let user = { name: "jod", age: "25" };
localStorage.setItem("user", JSON.stringify(user));

// TODO: Get an object from localStorage
let getUser = JSON.parse(localStorage.getItem("user"));

// TODO: Set item in sessionStorage
sessionStorage.setItem("key", "value");

// TODO: Get item from sessionStorage
let getSessionStorageItem = sessionStorage.getItem("key");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("key");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
let setSessionStorageUser = { name: "notjod", age: "52" };
sessionStorage.setItem("user", JSON.stringify(setSessionStorageUser));

// TODO: Get an object from sessionStorage
let getSessionStorageUser = JSON.parse(sessionStorage.getItem("user"));
