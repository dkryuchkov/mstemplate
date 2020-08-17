var Modeler = require("../Modeler.js");
var className = 'TypePositionStandardClassificationReferenceType';

var TypePositionStandardClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionStandardClassificationIdentification: {
      type: "TypePositionStandardClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionStandardClassificationIdentification",
        type: "PositionStandardClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPositionStandardClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPositionStandardClassificationReferenceType",
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
	  PositionStandardClassificationIdentification: {
      type: "TypePositionStandardClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionStandardClassificationIdentification",
        type: "PositionStandardClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPositionStandardClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPositionStandardClassificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePositionStandardClassificationReferenceType;
Modeler.register(TypePositionStandardClassificationReferenceType, "TypePositionStandardClassificationReferenceType");
