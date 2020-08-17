var Modeler = require("../Modeler.js");
var className = 'TypeCustomGovernmentAgencyReferenceType';

var TypeCustomGovernmentAgencyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomGovernmentAgencyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomGovernmentAgencyReferenceType",
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
	  CustomGovernmentAgencyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomGovernmentAgencyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomGovernmentAgencyReferenceType;
Modeler.register(TypeCustomGovernmentAgencyReferenceType, "TypeCustomGovernmentAgencyReferenceType");
