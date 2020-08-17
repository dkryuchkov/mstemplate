var Modeler = require("../Modeler.js");
var className = 'TypeCustomBalanceGroupReferenceType';

var TypeCustomBalanceGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBalanceGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBalanceGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CustomBalanceGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBalanceGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBalanceGroupReferenceType;
Modeler.register(TypeCustomBalanceGroupReferenceType, "TypeCustomBalanceGroupReferenceType");
