var Modeler = require("../Modeler.js");
var className = 'ElementPersonDriversLicense';

var ElementPersonDriversLicense = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonDriversLicense: {
      type: "TypePersonDriversLicenseType",
      wsdlDefinition: {
        name: "PersonDriversLicense",
        type: "PersonDriversLicenseType",
        "xsd:annotation": {
          "xsd:documentation": "A person's Drivers License details."
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
	  PersonDriversLicense: {
      type: "TypePersonDriversLicenseType",
      wsdlDefinition: {
        name: "PersonDriversLicense",
        type: "PersonDriversLicenseType",
        "xsd:annotation": {
          "xsd:documentation": "A person's Drivers License details."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonDriversLicense;
Modeler.register(ElementPersonDriversLicense, "ElementPersonDriversLicense");
