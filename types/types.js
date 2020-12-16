const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList

} = require('graphql')


const commentType = new GraphQLObjectType({
    name: 'comment',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        message: { type: GraphQLNonNull(GraphQLString), },
        postId: { type: GraphQLNonNull(GraphQLInt) },
        userid:{type: GraphQLNonNull(GraphQLInt),}
    })
})

const postType = new GraphQLObjectType({
    name: 'post',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        description: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString) },
        comments: { type: GraphQLList(commentType) },
        userid: {type: GraphQLNonNull(GraphQLInt),}
    })
});

module.exports = { postType, commentType }