function before(){
    alert("Đăng nhập thì mới xem được!");
    after()
  }

function after() {
document.getElementById("content").innerHTML = `
<div class="border border-gray-600 p-8 bg-white shadow-lg ml-[29vw] mt-[17vh] rounded-lg w-[30vw]">
    <h4 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h4>
    <form id="login">
    <div class="mb-6">
        <p class="block text-sm font-medium text-gray-700">Tên đăng nhập</p>
        <input type="text" id="username" name="username" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Nhập tên đăng nhập">
    </div>
    <div class="mb-6">
        <p class="block text-sm font-medium text-gray-700">Mật khẩu</p>
        <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Nhập mật khẩu">
    </div>
    <button type="submit" class="w-[100%] bg-green-600 text-white py-2 px-4 rounded-lg">Đăng Nhập</button>
    </form>
    <div class="mt-4 text-center">
    <p class="text-sm text-blue-600">Quên mật khẩu?</p>
    </div>
</div>`;
            this.addEventListener("submit", function (x) {
            x.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const acc = { username, password};
            fetch("https://auth-wit.vercel.app/auth/login", {
                method: "POST",
                body: JSON.stringify(acc),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Lỗi đăng nhập");
                }
                return res.json();
            })
            .then((data) => {
                alert("Đăng nhập thành công");
                window.localStorage.setItem("token",data.token)
                window.location.href = "/info.html"
            })
            .catch((error) => {
                alert("Đăng nhập không thành công");
                window.location.href = "/info.html"
            });
        });
}