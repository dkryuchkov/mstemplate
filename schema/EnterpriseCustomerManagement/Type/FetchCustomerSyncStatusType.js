var Modeler = require("../Modeler.js");
var className = 'TypeFetchCustomerSyncStatusType';

var TypeFetchCustomerSyncStatusType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Object: {
      type: "TypeObjectType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:Object",
        type: "ObjectType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  Object: {
      type: "TypeObjectType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:Object",
        type: "ObjectType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFetchCustomerSyncStatusType;
Modeler.register(TypeFetchCustomerSyncStatusType, "TypeFetchCustomerSyncStatusType");
