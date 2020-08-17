const types = `
interface Customer {
	customerType: CustomerEnumType!
	customerState: CustomerEnumState!
	shareInfo: YnEnumType   
	secondaryPurpose: YnEnumType  
	address: [AddressDetailsType]
}

type PersonNameType {
    title: String!
	firstName: String!
    lastName: String!
    gender: GenderEnumType!
}

type OrgCustomerEnumType implements Customer
{
    customerType: CustomerEnumType!
	customerState: CustomerEnumState!
	shareInfo: YnEnumType   
	secondaryPurpose: YnEnumType  
	name: OrgNameType
	address: [AddressDetailsType]
}

type IndCustomerEnumType implements Customer {
	customerType: CustomerEnumType!
	customerState: CustomerEnumState!
	shareInfo: YnEnumType   
	secondaryPurpose: YnEnumType  
	name: PersonNameType! 
	address: [AddressDetailsType]!
	contactPoints: [ContactPointDetailsType]!
	identifier: IdentifierType
	indAdditionalInfo: IndAdditionalInfoType
} 
     
type CreateCustomerResponseType {
	exception: Exception
	id: String
	createDateTime: DateTime
}

type SearchCustomerType {
	id: String
	createDateTime: DateTime
	type: CustomerEnumType
  	title: String
  	firstName: String
  	middleName: String
	middleNameTwo: String
	lastName: String
	cgid: String
	birthDate: String
	homePhone: String
	workPhone: String
	mobilePhone: String
	emailAddress: String
	identityVerificationStatus: IdentityVerificationStatusEnumType
	status: StatusEnumType
	goldenId: String
	matchScore: Int
	addresses: [AddressDetailsType]
	contactReference: [ContactReferenceType]
}

type SearchCustomerResponseType {
	exception: Exception
	result: [SearchCustomerType]
}

type ContactReferenceType {
	externalId: String!
	systemNumber: String!
}

type IndAdditionalInfoType {
	dob: DateTime
    industry: Int
    middleNameTwo: String
    occupationCode: String
	maritalstatus: MaritalStatusEnumType
	middlename: String
}

type IdentifierType {
	identifierType: IdentifierEnumType!
    identifierValue: String!
}

type AddressDetailsType {
	line1: String!
	line2: String
	line3: String
	line4: String
	line5: PropertyEnumType
	line6: String
	line7: String
	line8: StreetEnumType
	line9: StreetSuffixEnumType
	deliveryPointTypeCode: String
	longPostalCode: String
	cityName: String!
	stateName: String!
	postalCode: String!
	countryCode: String!
	type: AddressEnumType!
	relationshipType: AddressRelationshipEnumType
	occupancy: CustomerAddressOccupancyEnumType
	startDate: DateTime!
	endDate: DateTime
}

type CommunicationType {
	countryCode: String
	phoneNumber: String
	areaCode: String
	emailAddress: String
}

type ContactPointDetailsType {
	type: ContactEnumDetailType!
	usetype:ContactDetailUseEnumType!
	typecode: ContactDetailCodeEnumType!
    communication: CommunicationType!
	startDate: DateTime
    endDate: DateTime
}

type OrgNameType {
	organizationName: String!
	website: String
}

type ErrorDescriptionParametersType {
    orderNumber: Int
    value: String
}

type HostResponseType {
    hostCode: String
    hostDescription: String
}

input IndividualCustomerInput {
	headers: HeaderInput!
	customerType: CustomerEnumType!
	customerState: CustomerEnumState!
	shareInfo: YnEnumType   
	secondaryPurpose: YnEnumType  
	name: PersonNameInput! 
	address: [AddressDetailsInput]!
	contactPoints: [ContactPointDetailsInput]!
	identifier: IdentifierInput
	indAdditionalInfo: IndAdditionalInfoInput
}   

input IndividualSearchInput {
	headers: HeaderInput!
	searchAttributes: [KeyValueType!]!
	minMatchThreshold: Int
}

input OrganizationSearchInput {
	headers: HeaderInput!
	searchAttributes: [KeyValueType!]!
	minMatchThreshold: Int
}

input KeyValueType {
	key: String!
	value: String!
}

input OrganizationCustomerInput {
	headers: HeaderInput!
	customerType: CustomerEnumType!
	customerState: CustomerEnumState!
	shareInfo: YnEnumType   
	secondaryPurpose: YnEnumType  
	name: OrgNameInput! 
	address: [AddressDetailsInput]!
	contactPoints: [ContactPointDetailsInput]!
	identifier: IdentifierInput
}   

input IdentifierInput {
	identifierType: IdentifierEnumType!
    identifierValue: String!
}

input ContactPointDetailsInput {
	type: ContactEnumDetailType!
	usetype: ContactDetailUseEnumType!
	typecode: ContactDetailCodeEnumType!
    communication: CommunicationInput!
	startDate: DateTime
    endDate: DateTime
}

input CommunicationInput {
	countryCode: String
	phoneNumber: String
	areaCode: String
	emailAddress: String
}

input AddressDetailsInput {
	line1: String!
	line2: String
	line3: String
	line4: String
	line5: PropertyEnumType
	line6: String
	line7: String
	line8: StreetEnumType
	line9: StreetSuffixEnumType
	deliveryPointTypeCode: String
	longPostalCode: String
	cityName: String!
	stateName: String!
	postalCode: String!
	countryCode: String!
	type: AddressEnumType!
	relationshipType: AddressRelationshipEnumType
	occupancy: CustomerAddressOccupancyEnumType
	startDate: DateTime!
	endDate: DateTime
}

input IndAdditionalInfoInput {
	dob: DateTime
    industry: Int
    middleNameTwo: String
    occupationCode: String
	maritalstatus: MaritalStatusEnumType
	middleName: String
}

input PersonNameInput {
    title: String!
	firstName: String!
    lastName: String!
    gender: GenderEnumType!
}

input OrgNameInput {
	organizationName: String!
	website: String
}

input HeaderInput {
	application: String!
	user: String!
	date: DateTime!
	channel: String!
	targetunit: String!
	brand: String!
	trackingid: String!
	ip: String!
	applicationtype: String! 
}
`;



const resolvers = {
	Customer: {
		__resolveType(customer, context, ifnfo) {
			return customer.customerType === 'Individual' ? InCustomerEnumType : OrgCustomerEnumType;
		},
	},
	DateTime: () => new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		parseValue(value) {
			return new Date(value); // value from the client
		},
		serialize(value) {
			return value.getTime(); // value sent to the client
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return parseInt(ast.value, 10); // ast value is always in string format
			}
			return null;
		},
	})
};

module.exports = {
	types: () => [types],
	schema: () => [types],
	resolvers: Object.assign(resolvers)
}