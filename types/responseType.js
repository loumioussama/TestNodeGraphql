const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt

} = require('graphql')

const { postType,commentType } = require('./types')


exports.ResponseType = new GraphQLObjectType({
    name: 'response',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        message: { type: GraphQLNonNull(GraphQLString) },
        comments: { type: GraphQLList(commentType) },
        posts: { type: GraphQLList(postType) },
    })
})

exports.ResponsePaginateType = new GraphQLObjectType({
    name: 'responsepaginated',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        message: { type: GraphQLNonNull(GraphQLString) },
        comments: { type: GraphQLList(commentType) },
        posts: { type: GraphQLList(postType) },
        pages: { type: GraphQLNonNull(GraphQLInt) },
        total: { type: GraphQLNonNull(GraphQLInt) }
    })
})