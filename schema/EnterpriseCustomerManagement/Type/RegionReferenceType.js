var Modeler = require("../Modeler.js");
var className = 'TypeRegionReferenceType';

var TypeRegionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RegionIdentification: {
      type: "TypeRegionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RegionIdentification",
        type: "RegionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRegionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRegionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:RegionIdentification",
        type: "RegionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRegionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRegionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRegionReferenceType;
Modeler.register(TypeRegionReferenceType, "TypeRegionReferenceType");
