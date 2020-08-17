var Modeler = require("../Modeler.js");
var className = 'TypeCustomRelatedCustomerPartyType';

var TypeCustomRelatedCustomerPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRelatedCustomerPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedCustomerPartyType",
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
	  CustomRelatedCustomerPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedCustomerPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRelatedCustomerPartyType;
Modeler.register(TypeCustomRelatedCustomerPartyType, "TypeCustomRelatedCustomerPartyType");
