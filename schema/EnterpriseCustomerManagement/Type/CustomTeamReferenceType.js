var Modeler = require("../Modeler.js");
var className = 'TypeCustomTeamReferenceType';

var TypeCustomTeamReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTeamReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTeamReferenceType",
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
	  CustomTeamReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTeamReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTeamReferenceType;
Modeler.register(TypeCustomTeamReferenceType, "TypeCustomTeamReferenceType");
