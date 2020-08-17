var Modeler = require("../Modeler.js");
var className = 'TypeCustomDependentPersonPartyType';

var TypeCustomDependentPersonPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDependentPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDependentPersonPartyType",
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
	  CustomDependentPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDependentPersonPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDependentPersonPartyType;
Modeler.register(TypeCustomDependentPersonPartyType, "TypeCustomDependentPersonPartyType");
