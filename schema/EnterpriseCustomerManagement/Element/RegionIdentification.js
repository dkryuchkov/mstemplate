var Modeler = require("../Modeler.js");
var className = 'ElementRegionIdentification';

var ElementRegionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RegionIdentification: {
      type: "TypeRegionIdentificationType",
      wsdlDefinition: {
        name: "RegionIdentification",
        type: "RegionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Region object"
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
	  RegionIdentification: {
      type: "TypeRegionIdentificationType",
      wsdlDefinition: {
        name: "RegionIdentification",
        type: "RegionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Region object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRegionIdentification;
Modeler.register(ElementRegionIdentification, "ElementRegionIdentification");
