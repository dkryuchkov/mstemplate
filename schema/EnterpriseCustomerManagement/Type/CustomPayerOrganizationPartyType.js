var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayerOrganizationPartyType';

var TypeCustomPayerOrganizationPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayerOrganizationPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayerOrganizationPartyType",
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
	  CustomPayerOrganizationPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayerOrganizationPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayerOrganizationPartyType;
Modeler.register(TypeCustomPayerOrganizationPartyType, "TypeCustomPayerOrganizationPartyType");
