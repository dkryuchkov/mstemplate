var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationUnitReferenceType';

var TypeCustomOrganizationUnitReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationUnitReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationUnitReferenceType",
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
	  CustomOrganizationUnitReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationUnitReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationUnitReferenceType;
Modeler.register(TypeCustomOrganizationUnitReferenceType, "TypeCustomOrganizationUnitReferenceType");
