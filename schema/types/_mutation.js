const searchTransform = require('../transformations/searchTransform');
const createTransform = require('../transformations/createTransform');
const exceptions = require('../../exceptions');
const service = require('../service');
const logWrapper = process.env.logger ? require(process.env.logger) : null;
const logger = logWrapper ? new logWrapper(process.env.LOG_LEVEL) : null;

const data = {
	async customerSoapEndpoint(args, context, info) {
		try {
			const op = await service.operation(args);
			//logger.info(op.preview());
			const result = await new Promise((resolve, reject) => {
				op.request(service, async (err, result) => {
					return err ? reject(err.FaultMessage || err.message || err.toString()) :
						resolve(await result.validator.result())
				}).catch(reject);
			});
			return result;
		} catch (error) {
			const exception = new exceptions.GraphQLServerException(error).toJson();
			return exception;
		}
	}
}


const types =
	`
extend type Mutation {
	Individualcreate(input: IndividualCustomerInput): CreateCustomerResponseType,
	Organizationcreate(input: OrganizationCustomerInput): CreateCustomerResponseType
}
extend type Query {
	search(input: IndividualSearchInput): SearchCustomerResponseType
}
`

const resolvers = {
	Query: {
		search: (parent, args, context, info) => data.customerSoapEndpoint(searchTransform(args.input), context, info)
	},
	Mutation: {
		Individualcreate: (parent, args, context, info) => data.customerSoapEndpoint(createTransform(args.input), context, info)
	}
};

module.exports = {
	resolvers: Object.assign(resolvers),
	types: () => [types]
}