var Modeler = require("../Modeler.js");
var className = 'TypeCustomPrimarySalespersonPartyReferenceType';

var TypeCustomPrimarySalespersonPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPrimarySalespersonPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPrimarySalespersonPartyReferenceType",
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
	  CustomPrimarySalespersonPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPrimarySalespersonPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPrimarySalespersonPartyReferenceType;
Modeler.register(TypeCustomPrimarySalespersonPartyReferenceType, "TypeCustomPrimarySalespersonPartyReferenceType");
