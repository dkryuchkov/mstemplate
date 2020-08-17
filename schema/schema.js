const GQL_SCHEMA_DIRS = process.env.GQL_SCHEMA_DIRS.split(",");
const fs = require('fs');
const _ = require("lodash");
const path = require('path');
const {
	makeExecutableSchema
} = require('graphql-tools');
const {
	merge
} = require('lodash');

const getTypesSchema = (types) => 
Promise.all(types.map(async type =>
		(_.isFunction(type) ? type() : type).toString()));

const Query = `
  type Query {
    status: String
  }
`;

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

let resolvers = {
	Query: {
		status: () => 'ok'
	}
};

const typeDefs = [Query, Mutation];
const schemaDefs = [];

// Read the current directory and load types and resolvers automatically
const readAll = (dirname,subdir) =>
	fs.readdirSync(dirname)
	.forEach((dir) => {
		if (GQL_SCHEMA_DIRS.includes(dir)) readAll(path.join(dirname, dir),true);
		if (subdir && dir.indexOf('.js') > 0) {
			//console.log(dir);
			const tmp = require(path.join(dirname, dir));
			if (tmp.resolvers) resolvers = merge(resolvers, tmp.resolvers);
			if (tmp.types) typeDefs.push(tmp.types);
			if (tmp.schema) schemaDefs.push(tmp.schema);
		}
	});

readAll(__dirname);

const gqls = require('graphql-json-schema');
module.exports.graphQLSchemaJson = async () => { 
	const schema = await getTypesSchema(schemaDefs);
	return gqls(schema.join("\n"));
}


module.exports.graphQLSchema = makeExecutableSchema({
	typeDefs,
	resolvers
});