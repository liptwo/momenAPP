const thaThu = document.getElementById("test");

const nam = JSON.parse(localStorage.getItem('people'));
thaThu.innerHTML = nam.name;
