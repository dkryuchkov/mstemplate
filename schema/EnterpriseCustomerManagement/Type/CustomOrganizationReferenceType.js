var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationReferenceType';

var TypeCustomOrganizationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationReferenceType",
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
	  CustomOrganizationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationReferenceType;
Modeler.register(TypeCustomOrganizationReferenceType, "TypeCustomOrganizationReferenceType");
