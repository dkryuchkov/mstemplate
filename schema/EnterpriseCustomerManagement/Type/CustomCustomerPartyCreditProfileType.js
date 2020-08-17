var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyCreditProfileType';

var TypeCustomCustomerPartyCreditProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyCreditProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyCreditProfileType",
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
	  CustomCustomerPartyCreditProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyCreditProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyCreditProfileType;
Modeler.register(TypeCustomCustomerPartyCreditProfileType, "TypeCustomCustomerPartyCreditProfileType");
