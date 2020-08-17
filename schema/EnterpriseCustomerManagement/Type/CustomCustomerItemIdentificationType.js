var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerItemIdentificationType';

var TypeCustomCustomerItemIdentificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerItemIdentificationType",
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
	  CustomCustomerItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerItemIdentificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerItemIdentificationType;
Modeler.register(TypeCustomCustomerItemIdentificationType, "TypeCustomCustomerItemIdentificationType");
