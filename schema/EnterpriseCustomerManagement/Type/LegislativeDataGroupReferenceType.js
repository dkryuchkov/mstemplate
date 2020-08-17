var Modeler = require("../Modeler.js");
var className = 'TypeLegislativeDataGroupReferenceType';

var TypeLegislativeDataGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegislativeDataGroupIdentification: {
      type: "TypeLegislativeDataGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegislativeDataGroupIdentification",
        type: "LegislativeDataGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLegislativeDataGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLegislativeDataGroupReferenceType",
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
	  LegislativeDataGroupIdentification: {
      type: "TypeLegislativeDataGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegislativeDataGroupIdentification",
        type: "LegislativeDataGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLegislativeDataGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLegislativeDataGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLegislativeDataGroupReferenceType;
Modeler.register(TypeLegislativeDataGroupReferenceType, "TypeLegislativeDataGroupReferenceType");
