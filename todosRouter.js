let express = require("express");
let router = express.Router();
const { todosModule } = require("./todosSchema");

router.get("/", async (req, res) => {
    try {
        const userID = req.userID;
        let query = { userID: userID };

        // Check if timestamp filter is provided
        if (req.query.timestamp) {
            query.date = { $gte: new Date(req.query.timestamp) };
        }

        // Assuming you have some logic to retrieve multiple items based on the filter query
        const items = await todosModule.find(query);

        // Return the filtered items
        res.status(200).json(items);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});


router.post("/create", async (req, res) => {
  try {
    const userID = req.userID;
    let { title, objective, status, priority } = req.body;
    let newTodo = new todosModule({
      title: title,
      status: status,
      userID: userID,
    });
    await newTodo.save();
    console.log("Added Successfully");
    res.status(200).send("Todo added");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

router.put("/:id", async (req, res) => {
    try {
        const userID = req.userID;
        const itemId = req.params.id;

        // Assuming you have some logic to retrieve the item based on its ID and user ID
        const item = await todosModule.findOne({ _id: itemId, userID: userID });

        // Check if the item exists
        if (!item) {
            // If no item found for the given ID and user ID, return a 404 status code
            return res.status(404).send("Item not found");
        }

        // Update the item with the new data
        item.title = req.body.title || item.title;
        item.status = req.body.status || item.status;

        // Save the updated item
        await item.save();

        // Return a success message
        res.status(200).send("Item updated successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});


router.delete("/:id", async(req,res)=>{
    try{
        let id = req.params.id;
        const userID=req.userID;
        const data = await todosModule.findOne({_id:id});
        console.log(data)
        check = data.userID.toString()
        if(check===userID){
            await todosModule.findOneAndDelete({_id:id})
            res.send("Deleted")
        }else{
            res.send("Not Deleted")
        }

    }catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports = { router };
