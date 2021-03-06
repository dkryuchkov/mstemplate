var Modeler = require("../Modeler.js");
var className = 'TypeCustomRelatedCustomerPartyAccountContactType';

var TypeCustomRelatedCustomerPartyAccountContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRelatedCustomerPartyAccountContactType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedCustomerPartyAccountContactType",
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
	  CustomRelatedCustomerPartyAccountContactType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedCustomerPartyAccountContactType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRelatedCustomerPartyAccountContactType;
Modeler.register(TypeCustomRelatedCustomerPartyAccountContactType, "TypeCustomRelatedCustomerPartyAccountContactType");
