var Modeler = require("../Modeler.js");
var className = 'TypeCustomPrimaryAddressEmploymentDetailType';

var TypeCustomPrimaryAddressEmploymentDetailType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPrimaryAddressEmploymentDetailType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPrimaryAddressEmploymentDetailType",
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
	  CustomPrimaryAddressEmploymentDetailType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPrimaryAddressEmploymentDetailType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPrimaryAddressEmploymentDetailType;
Modeler.register(TypeCustomPrimaryAddressEmploymentDetailType, "TypeCustomPrimaryAddressEmploymentDetailType");
