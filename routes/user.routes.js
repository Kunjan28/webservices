module.exports = (app) =>{
    app.get("/healthz", (req,res) => {
        res.sendStatus(200);
      })
}