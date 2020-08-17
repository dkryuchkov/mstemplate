var Modeler = require("../Modeler.js");
var className = 'ElementCareerPathIdentification';

var ElementCareerPathIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CareerPathIdentification: {
      type: "TypeCareerPathIdentificationType",
      wsdlDefinition: {
        name: "CareerPathIdentification",
        type: "CareerPathIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Career Path object"
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
	  CareerPathIdentification: {
      type: "TypeCareerPathIdentificationType",
      wsdlDefinition: {
        name: "CareerPathIdentification",
        type: "CareerPathIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Career Path object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCareerPathIdentification;
Modeler.register(ElementCareerPathIdentification, "ElementCareerPathIdentification");
