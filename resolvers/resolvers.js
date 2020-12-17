const { parse } = require('graphql');
const db = require('../models/config.models');
const posts = db.posts;
const comments = db.comments;


const { Response, ResponsePaginated } = require('../types/Response')


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
const getPagination = (page, size) => {
    page = parseInt(page);
    size = parseInt(size);
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };
  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: posts } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, posts, totalPages, currentPage };
  };
exports.getallPosts = async (parent, args) => {
    try {
        const { page, size } = args;
      
        const { limit, offset } = getPagination(page, size);
      
       const data = await posts.findAndCountAll({ where: {}, limit, offset });
       const response = getPagingData(data, page, limit);
       return new ResponsePaginated(200, 'success', response.posts, null, response.totalItems, response.totalPages )

    } catch (error) {
        return new ResponsePaginated(500, error.message)

    }
}




