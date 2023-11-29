let password = "1234-";
if (password.includes("_") || password.includes("-")) 
{
    console.log("Надежный пароль");
}
else console.log("Пароль недостаточно надёжный");