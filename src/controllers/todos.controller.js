const supabase = require("../config/supabase.js");

exports.getTodos = async (req, res, next) => {
    const { data, error } = await supabase.from("todos").select("*").order("created_at", { ascending: true });
    if (error) {
        return next(error)
    }
    res.status(200).json({ message: "success", data })
}

exports.addTodo = async (req, res) => {
    const { title } = req.body;
    const { data, error } = await supabase.from("todos").insert({ title });
    if (!title) {
        return res.status(400).json({ error: "title is required in the request body." })
    }
    if (error) {
        return res.status(500).json({ error: "Unable to add the todo to the database." })
    }
    res.status(201).json({ message: "success", data })
}

exports.updateTodo = async (req, res) => {
    const { id, status } = req.body;
    const { data, error } = await supabase.from("todos").update({ completed: status }).match({ id });

    if (id === undefined || status === undefined) {
        return res.status(400).json({ message: "id, status are required in request body" });
    }
    if (error) {
        return res.status(500).json({ error: `Failed to update the status of the todo with id ${id}` })
    }
    res.status(200).json({ message: `Successfully updated the status of the todo item to ${status}`, data })
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "id is required in request body" });
    }

    const { error } = await supabase.from("todos").delete({ returning: "minimal" }).match({ id })
    if (error) {
        return res.status(500).json({ message: `Failed to delete the status of the todo with id ${id}` })
    }
    res.status(200).json({ message: `Successfully deleted the todo item with id ${id}` })

}