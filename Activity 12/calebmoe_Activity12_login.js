function fetchUser() {
    document.getElementById("loginuser").innerHTML = `Authenticating...`;
    return new Promise(async (resolve, reject) => {
        try{
            const response = await fetch("./calebmoe_Activity12_login.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const userData = await response.json();
            resolve(userData);
        }
        catch (error) {
            reject(`An error occurred: ${error}`);
        }
    });
}
function login(users, userInput, passwordInput) {
    const user = users.find((u) => u.user === userInput && u.password === passwordInput);
    if (user && user.admin === true) {
        return true;
    } else {
        return false;
    }
}
async function useAdmin(userInput, passwordInput) {
    try {
        const users = await fetchUser(); // Ensure fetchUser is executed first
        const isAdmin = login(users, userInput, passwordInput);

        if (isAdmin) {
            document.getElementById("loginuser").innerHTML = `Welcome, Admin!`;
        } else {
            document.getElementById("loginuser").innerHTML = `Invalid username or password.`;
        }
    } catch (error) {
        document.getElementById("loginuser").innerHTML = `Error: ${error}`;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginButton").addEventListener("click", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput").value;
        const passwordInput = document.getElementById("passwordInput").value;

    // Call useAdmin to handle the login process
    useAdmin(userInput, passwordInput);
    });
});
    