var API_URL = "";
if (process.env.NODE_ENV === "development") {
    API_URL = "http://localhost:5000"
} else {
    API_URL = "https://newsbackend1.herokuapp.com";
}

export { API_URL };