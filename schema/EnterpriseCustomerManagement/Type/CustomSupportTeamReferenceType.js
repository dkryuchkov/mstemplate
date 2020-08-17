var Modeler = require("../Modeler.js");
var className = 'TypeCustomSupportTeamReferenceType';

var TypeCustomSupportTeamReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSupportTeamReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupportTeamReferenceType",
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
	  CustomSupportTeamReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupportTeamReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSupportTeamReferenceType;
Modeler.register(TypeCustomSupportTeamReferenceType, "TypeCustomSupportTeamReferenceType");
