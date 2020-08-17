const types = 
`
type Exception {
	name: String!
	message: String!
	statusCode: String!
	ismanaged: Boolean!
	stack: String!
}
`;

module.exports.types = () => [types];