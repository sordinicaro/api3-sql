import app from "./app";
// import "./model/db/db-sync";

const PORT = 53000;

app.listen(PORT, () => {
    console.log("server runing on port", PORT);
});