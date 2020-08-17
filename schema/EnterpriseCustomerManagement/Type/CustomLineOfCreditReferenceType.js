var Modeler = require("../Modeler.js");
var className = 'TypeCustomLineOfCreditReferenceType';

var TypeCustomLineOfCreditReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLineOfCreditReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLineOfCreditReferenceType",
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
	  CustomLineOfCreditReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLineOfCreditReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLineOfCreditReferenceType;
Modeler.register(TypeCustomLineOfCreditReferenceType, "TypeCustomLineOfCreditReferenceType");
