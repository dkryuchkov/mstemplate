const types = `
scalar DateTime

enum StreetSuffixEnumType {
	CENTRAL
	EAST
	EXTENSION
	LOWER
	NORTH
	NORTH__SPACE__EAST
	NORTH__SPACE__WEST
	SOUTH
	SOUTH__SPACE__EAST
	SOUTH__SPACE__WEST
	UPPER
	WEST
}

enum StreetEnumType {
	ACCESS
	ALLEY
	ALLEYWAY
	AMBLE
	ANCHORAGE
	APPROACH
	ARCADE
	ARTERY
	AVENUE
	BASIN
	BEACH
	BRIDGE
	BROADWAY
	BEND
	BLOCK
	BRAE
	BRACE
	BREAK
	BROW
	BOULEVARD
	BYPASS
	BYWAY
	CAUSEWAY
	CIRCUIT
	CUL__HYPHON__DE__HYPHON__SAC
	CHASE
	CIRCLE
	CLOSE
	COLONNADE
	CIRCLET
	COMMON
	CENTRAL
	CORNER
	CENTREWAY
	CONCOURSE
	COVE
	CROSSWAY
	COPSE
	CIRCUS
	CROSSROAD
	CRESCENT
	CROSSING
	CROSS
	CREST
	CORSO
	COURT
	CENTRE
	CUTTING
	COURTYARD
	CRUISEWAY
	DALE
	DELL
	DEVIATION
	DIP
	DRIVE
	DRIVEWAY
	DISTRIBUTOR
	EAST
	EDGE
	ELBOW
	END
	ENTRANCE
	ESPLANADE
	ESTATE
	EXPRESSWAY
	EXTENSION
	FAIRWAY
	FIRETRAIL
	FLAT
	FOLLOW
	FORMATION
	FRONT
	FRONTAGE
	FORESHORE
	FIRE__SPACE__TRACK
	FOOTWAY
	FREEWAY
	GAP
	GARDEN
	GARDENS
	GLADE
	GLEN
	GULLY
	GROVE
	GRANGE
	GREEN
	GROUND
	GATE
	GATES
	HILL
	HIGHROAD
	HEIGHTS
	HIGHWAY
	INTERCHANGE
	INTERSECTION
	JUNCTION
	KEY
	LANE
	LANDING
	LEES
	LINE
	LINK
	LOOKOUT
	LANEWAY
	LOOP
	LOWER
	LITTLE
	MALL
	MEW
	MEWS
	MEANDER
	MOUNT
	MOTORWAY
	NORTH
	NORTH__SPACE__EAST
	NOOK
	NORTH__SPACE__WEST
	OUTLOOK
	PARK
	PART
	PASS
	PATH
	PARADE
	PATHWAY
	PIAZZA
	PARKLANDS
	POCKET
	PARKWAY
	PLACE
	PLATEAU
	PLAZA
	POINT
	PORT
	PROMENADE
	QUADRANGLE
	QUADRANT
	QUAD
	QUAY
	QUAYS
	RAMP
	REACH
	ROAD
	RIDGE
	ROADS
	ROADSIDE
	ROADWAY
	RESERVE
	REST
	RIDGEWAY
	RIDE
	RING
	RISE
	RAMBLE
	ROUND
	RONDE
	RANGE
	RIGHT__SPACE__OF__SPACE__WAY
	ROW
	ROSEBOWL
	ROUTE
	RETREAT
	ROTARY
	RUE
	RUN
	RIVER
	RIVIERA
	RIVERWAY
	SOUTH
	SUBWAY
	SIDING
	SOUTH__SPACE__EAST
	STATE__SPACE__HIGHWAY
	SLOPE
	SOUND
	SPUR
	SQUARE
	STREET
	STEPS
	STRAND
	STRIP
	STAIRS
	SOUTH__SPACE__WEST
	SERVICE__SPACE__WAY
	TARN
	TERRACE
	THOROUGHFARE
	TRUNKWAY
	TOLLWAY
	TOP
	TOR
	TRIANGLE
	TRACK
	TRAIL
	TRAILER
	TURN
	TOWERS
	UPPER
	UNDERPASS
	VALE
	VIADUCT
	VIEW
	VILLAS
	VISTA
	WEST
	WADE
	WALK
	WAY
	WHARF
	WALKWAY
	WYND
	YARD
}
enum CustomerEnumType {
	Individual
	Bank
	Corporate
	Trust
}

enum CustomerEnumState {
	Prospect 
	Member   
	Customer 
	Broker 
	Employee
}

enum YnEnumType {
    Y   
    N  
}

enum IdentifierEnumType { 
	ME
	FC
	SF  
	CGID
}

enum AddressEnumType {
	Account
	Postal
	Current
	Holiday
	Home
	Office
	Permanent
	Previous
	Registered
	Seasonal
	Work
}

 enum ContactEnumDetailType {
	PHONE
	EMAIL
}

enum ContactDetailUseEnumType { 
	Fixed__SPACE__Landline__SPACE__Home
	Fixed__SPACE__Landline__SPACE__Work
	Home
	Other
	Personal
	Seasonal
	Work
}

enum ContactDetailCodeEnumType { 
	Mobile
	Fax
	Land__SPACE__Line
	Silent
	Telephone
}

enum IdentityVerificationStatusEnumType {
	CONFIRMED
	Not_Applicable
	UNCONFIRMED
}

enum StatusEnumType {
	Active
	Inactive
}

enum GenderEnumType {
	Female
	Male
	Others
	Undisclosed
}	

enum PropertyEnumType  {	
	APARTMENT
	C__BACKSLASH__O__SPACE__SHOP
	C__BACKSLASH__O__SPACE__UNIT
	C__BACKSLASH____HYPHON____SPACE__SUITE
	COTTAGE
	C__BACKSLASH____HYPHON____SPACE__UNIT
	DUPLEX
	FLAT
	FLOOR
	FACTORY
	HOUSE
	KIOSK
	GROUND__SPACE__FLOOR__SPACE__LEVEL
	MARINE__SPACE__BERTH
	MAISONETTE
	OFFICE
	PENTHOUSE
	REAR
	ROOM
	SUITE
	SHED
	SHOP
	SITE
	STALL
	STUDIO
	TOWNHOUSE
	UNIT
	VILLA
	WARD
	WAREHOUSE
}

enum CustomerAddressOccupancyEnumType
{
	Boarding
	CompanyProvided
	CorporateOffice
	Company__SPACE__Owned
	Others
	Corporate__SPACE__Undisclosed
	Other
	Undisclosed
	Owner__SPACE__Mortgage
	Owned
	Parental
	Registered
	Rented
}

enum AddressRelationshipEnumType {   
	Account
	Postal
	Current
	Holiday
	Home
	Office
	Permanent
	Previous
	Registered
	Seasonal
	Work
}

enum MaritalStatusEnumType {
	Defacto
	Divorced
	Married
	Separated
	Single
	Undisclosed
	Widowed
}

`;

const resolvers = {
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
