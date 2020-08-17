var Modeler = require("../Modeler.js");
var className = 'ElementRegionReference';

var ElementRegionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RegionReference: {
      type: "TypeRegionReferenceType",
      wsdlDefinition: {
        name: "RegionReference",
        type: "RegionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a geographical region. For example, region may be set up to group geographical areas in a clinical trial."
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
	  RegionReference: {
      type: "TypeRegionReferenceType",
      wsdlDefinition: {
        name: "RegionReference",
        type: "RegionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a geographical region. For example, region may be set up to group geographical areas in a clinical trial."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRegionReference;
Modeler.register(ElementRegionReference, "ElementRegionReference");
