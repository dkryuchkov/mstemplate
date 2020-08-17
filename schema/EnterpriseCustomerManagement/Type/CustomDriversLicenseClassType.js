var Modeler = require("../Modeler.js");
var className = 'TypeCustomDriversLicenseClassType';

var TypeCustomDriversLicenseClassType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDriversLicenseClassType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDriversLicenseClassType",
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
	  CustomDriversLicenseClassType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDriversLicenseClassType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDriversLicenseClassType;
Modeler.register(TypeCustomDriversLicenseClassType, "TypeCustomDriversLicenseClassType");
