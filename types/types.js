const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt

} = require('graphql')

const postType = new GraphQLObjectType({
    name: 'post',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        description: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString) },
        userid: {type: GraphQLNonNull(GraphQLInt),}
    })
});



module.exports = { postType }