const { parse } = require('graphql');
const db = require('../models/config.models');
const posts = db.posts;
const comments = db.comments;


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

exports.createComment = (parent, args, req) => {
    let ops = {};
    for (let obj of args.fields) {
        ops[obj.propName] = obj.value;
    }
    ops['postId'] = args.id;
    try {
        comments.create(ops).then(data => {
         return new Response(200, 'post created successfully')
        })
        .catch(err => {
         return new Response(500, err.message)
        });
    } catch (error) {
        return new Response(401, 'Something went wrong')
    }
}

exports.getPost = (parent, args) => {
    try {
         const data = posts.findByPk(args.id, { include: ["comments"] })
         return new Response(200, 'success', data,null,null);
    } catch (error) {
        return new Response(500, error.message)
    }
}




