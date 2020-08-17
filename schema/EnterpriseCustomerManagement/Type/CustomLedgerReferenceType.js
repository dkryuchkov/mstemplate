var Modeler = require("../Modeler.js");
var className = 'TypeCustomLedgerReferenceType';

var TypeCustomLedgerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLedgerReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLedgerReferenceType",
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
	  CustomLedgerReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLedgerReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLedgerReferenceType;
Modeler.register(TypeCustomLedgerReferenceType, "TypeCustomLedgerReferenceType");
