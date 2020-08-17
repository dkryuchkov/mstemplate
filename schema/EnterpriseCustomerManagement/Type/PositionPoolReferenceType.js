var Modeler = require("../Modeler.js");
var className = 'TypePositionPoolReferenceType';

var TypePositionPoolReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionPoolIdentification: {
      type: "TypePositionPoolIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionPoolIdentification",
        type: "PositionPoolIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPositionPoolReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPositionPoolReferenceType",
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
	  PositionPoolIdentification: {
      type: "TypePositionPoolIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionPoolIdentification",
        type: "PositionPoolIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPositionPoolReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPositionPoolReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePositionPoolReferenceType;
Modeler.register(TypePositionPoolReferenceType, "TypePositionPoolReferenceType");
