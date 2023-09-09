import express from "express";
const app = express();

let getUser = async (req, res) => {
    const user = {
        username: 'Moon'
    }
    res.send(JSON.stringify(user));
}

export default {
    getUser
}