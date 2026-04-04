const express = require("express") 
const path = require("path")

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get('/', (req ,res)=> {
    res.sendFile(path.join(__dirname ,'index.html'))
})

app.get("/anime", (req ,res)=> {
    res.sendFile(path.join(__dirname , 'public','anime.html'))
})

app.get("/api", (req ,res)=> {
    res.sendFile(path.join(__dirname , 'data.json'))
})
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});
app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`);
});