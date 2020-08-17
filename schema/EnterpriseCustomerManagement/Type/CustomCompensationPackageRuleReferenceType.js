var Modeler = require("../Modeler.js");
var className = 'TypeCustomCompensationPackageRuleReferenceType';

var TypeCustomCompensationPackageRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCompensationPackageRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCompensationPackageRuleReferenceType",
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
	  CustomCompensationPackageRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCompensationPackageRuleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCompensationPackageRuleReferenceType;
Modeler.register(TypeCustomCompensationPackageRuleReferenceType, "TypeCustomCompensationPackageRuleReferenceType");
