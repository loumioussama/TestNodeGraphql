const { parse } = require('graphql');
const db = require('../models/config.models');
const posts = db.posts;


const { Response } = require('../types/Response')


exports.createPost = async (parent, args, req) => {
        let ops = {};
        for (let obj of args.fields) {
            ops[obj.propName] = obj.value
        }
        try {
            let post = await posts.create(ops) ;
            return new Response(201, 'Created post',post)
        } catch (error) {
            return new Response(401, 'Something went wrong');
        }
}




