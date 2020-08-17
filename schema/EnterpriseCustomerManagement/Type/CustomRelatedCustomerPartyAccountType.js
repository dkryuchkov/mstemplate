var Modeler = require("../Modeler.js");
var className = 'TypeCustomRelatedCustomerPartyAccountType';

var TypeCustomRelatedCustomerPartyAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRelatedCustomerPartyAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedCustomerPartyAccountType",
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
	  CustomRelatedCustomerPartyAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedCustomerPartyAccountType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRelatedCustomerPartyAccountType;
Modeler.register(TypeCustomRelatedCustomerPartyAccountType, "TypeCustomRelatedCustomerPartyAccountType");
