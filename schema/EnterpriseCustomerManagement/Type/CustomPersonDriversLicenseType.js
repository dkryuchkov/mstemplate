var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonDriversLicenseType';

var TypeCustomPersonDriversLicenseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonDriversLicenseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonDriversLicenseType",
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
	  CustomPersonDriversLicenseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonDriversLicenseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonDriversLicenseType;
Modeler.register(TypeCustomPersonDriversLicenseType, "TypeCustomPersonDriversLicenseType");
