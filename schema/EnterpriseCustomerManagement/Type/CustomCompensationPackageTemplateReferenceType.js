var Modeler = require("../Modeler.js");
var className = 'TypeCustomCompensationPackageTemplateReferenceType';

var TypeCustomCompensationPackageTemplateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCompensationPackageTemplateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCompensationPackageTemplateReferenceType",
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
	  CustomCompensationPackageTemplateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCompensationPackageTemplateReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCompensationPackageTemplateReferenceType;
Modeler.register(TypeCustomCompensationPackageTemplateReferenceType, "TypeCustomCompensationPackageTemplateReferenceType");
