import express from "express";
const app = express();

let getUser = async (req, res) => {
    const user = {
        username: 'Moon'
    }
    res.rend(JSON.stringify(user));
}

export default {
    getUser
}