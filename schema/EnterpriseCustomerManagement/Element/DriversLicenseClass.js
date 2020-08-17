var Modeler = require("../Modeler.js");
var className = 'ElementDriversLicenseClass';

var ElementDriversLicenseClass = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DriversLicenseClass: {
      type: "TypeDriversLicenseClassType",
      wsdlDefinition: {
        name: "DriversLicenseClass",
        type: "DriversLicenseClassType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the types associated to a Drivers License for a person"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  DriversLicenseClass: {
      type: "TypeDriversLicenseClassType",
      wsdlDefinition: {
        name: "DriversLicenseClass",
        type: "DriversLicenseClassType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the types associated to a Drivers License for a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDriversLicenseClass;
Modeler.register(ElementDriversLicenseClass, "ElementDriversLicenseClass");
