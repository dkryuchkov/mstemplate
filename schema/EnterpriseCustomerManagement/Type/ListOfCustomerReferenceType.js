var Modeler = require("../Modeler.js");
var className = 'TypeListOfCustomerReferenceType';

var TypeListOfCustomerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerReference: {
      type: "TypeCustomerReferenceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:CustomerReference",
        type: "CustomerReferenceType",
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
	  CustomerReference: {
      type: "TypeCustomerReferenceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:CustomerReference",
        type: "CustomerReferenceType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfCustomerReferenceType;
Modeler.register(TypeListOfCustomerReferenceType, "TypeListOfCustomerReferenceType");
