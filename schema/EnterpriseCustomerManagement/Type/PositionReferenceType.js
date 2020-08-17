var Modeler = require("../Modeler.js");
var className = 'TypePositionReferenceType';

var TypePositionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionIdentification: {
      type: "TypePositionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionIdentification",
        type: "PositionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPositionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPositionReferenceType",
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
	  PositionIdentification: {
      type: "TypePositionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionIdentification",
        type: "PositionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPositionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPositionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePositionReferenceType;
Modeler.register(TypePositionReferenceType, "TypePositionReferenceType");
