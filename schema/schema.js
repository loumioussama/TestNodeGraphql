const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLInputObjectType,

} = require('graphql')

const resolvers = require('../resolvers/resolvers');
const { ResponseType } = require('../types/responseType');

const rootQuery = new GraphQLObjectType({

    name: 'rootQuery',
    fields: () => ({
        post: {
            type: ResponseType,
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: resolvers.getPost
        }
    })

})

const createObjectInput = new GraphQLInputObjectType({
    name: 'createProps',
    fields: () => ({
        propName: { type: GraphQLNonNull(GraphQLString) },
        value: { type: GraphQLNonNull(GraphQLString) }
    })
})
const rootMutation = new GraphQLObjectType({

    name: 'rootMutation',

    fields: () => ({
        createPost: {
            type: ResponseType,
            args: {
                fields: { type: GraphQLNonNull(GraphQLList(GraphQLNonNull(createObjectInput))) }

            },
            resolve: resolvers.createPost
        },
        createComment: {
            type: ResponseType,
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                fields: { type: GraphQLNonNull(GraphQLList(GraphQLNonNull(createObjectInput))) }
            },
            resolve: resolvers.createComment
        }
    })
});


module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})