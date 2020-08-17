var Modeler = require("../Modeler.js");
var className = 'TypeCustomEmployeePartyReferenceType';

var TypeCustomEmployeePartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEmployeePartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmployeePartyReferenceType",
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
	  CustomEmployeePartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmployeePartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEmployeePartyReferenceType;
Modeler.register(TypeCustomEmployeePartyReferenceType, "TypeCustomEmployeePartyReferenceType");
